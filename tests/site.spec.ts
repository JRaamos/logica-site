import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/grupo",
  "/empresas",
  "/modelo",
  "/contato",
  "/privacidade",
  "/endereco-inexistente",
];
for (const width of [360, 390, 768, 1440]) {
  test(`Telas sem transbordamento, imagens e acessibilidade — ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("main h1")).toBeVisible();
      await expect(page.locator("main")).toHaveAttribute("id", "conteudo");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBeTruthy();
      const images = await page
        .locator("img")
        .evaluateAll((images) =>
          images
            .filter(
              (image) =>
                !(image as HTMLImageElement).loading ||
                (image as HTMLImageElement).loading !== "lazy",
            )
            .every(
              (image) =>
                (image as HTMLImageElement).complete &&
                (image as HTMLImageElement).naturalWidth > 0,
            ),
        );
      expect(images).toBeTruthy();
      const accessibility = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        accessibility.violations,
        JSON.stringify(
          accessibility.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => n.target),
          })),
        ),
      ).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
}
test("Busca sem acentos, filtros compartilháveis, detalhes e estado vazio", async ({
  page,
}) => {
  await page.goto("/empresas");
  await expect(
    page.getByRole("button", {
      name: /^Conhecer (FarmaCore|Ceres|Visva|Delta|Proserve|Stella|NúcleoAuto|Azalea|Eclesia|Propi|Kinder|Kinetrik|Ginga)$/,
    }),
  ).toHaveCount(13);
  await page.getByRole("button", { name: "Saúde", exact: true }).click();
  await expect(page).toHaveURL(/segmento=saude/);
  await expect(
    page.getByRole("button", { name: "Conhecer Ceres" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Conhecer Ceres" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Ceres" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Conhecer Ceres" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Todos os segmentos" }).click();
  await page.getByRole("textbox", { name: "Buscar projetos" }).fill("locacao");
  await expect(
    page.getByRole("button", { name: "Conhecer Delta" }),
  ).toBeVisible();
  await page
    .getByRole("textbox", { name: "Buscar projetos" })
    .fill("astronomia");
  await expect(
    page.getByRole("heading", { name: "Nenhum projeto encontrado" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Limpar filtros" }).click();
  await expect(
    page.getByRole("button", {
      name: /^Conhecer (FarmaCore|Ceres|Visva|Delta|Proserve|Stella|NúcleoAuto|Azalea|Eclesia|Propi|Kinder|Kinetrik|Ginga)$/,
    }),
  ).toHaveCount(13);
});
test("Menu móvel, fechamento por Escape e navegação", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation", { name: "Navegação móvel" })
    .getByRole("link", { name: "Nosso portfólio" })
    .click();
  await expect(page).toHaveURL("/empresas");
  await expect(page.getByRole("dialog")).not.toBeVisible();
});
test("Contato valida os campos e prepara mensagem sem transmissão", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contato?assunto=solucoes&empresa=ceres");
  let requests = 0;
  page.on("request", (request) => {
    if (request.method() === "POST") requests++;
  });
  await expect(page.getByLabel("Mensagem *", { exact: true })).toHaveValue(
    /Ceres/,
  );
  await page.getByRole("button", { name: "Preparar mensagem" }).click();
  await expect(
    page.getByText("Informe seu nome com pelo menos 2 caracteres."),
  ).toBeVisible();
  await page.getByLabel("Nome completo *").fill("Mariana Oliveira");
  await page
    .getByLabel("E-mail *", { exact: true })
    .fill("mariana@example.com");
  await page
    .getByLabel("Empresa", { exact: true })
    .fill("Horizonte Tecnologia");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Preparar mensagem" }).click();
  await expect(
    page.getByRole("heading", { name: "Mensagem preparada" }),
  ).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText(
    "Nenhuma mensagem foi enviada.",
  );
  await expect(page.getByRole("dialog")).toContainText("Horizonte Tecnologia");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Baixar mensagem" }).click();
  expect((await download).suggestedFilename()).toBe("mensagem-logica.txt");
  expect(requests).toBe(0);
  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
  await page
    .getByRole("button", { name: "Fechar mensagem", exact: true })
    .click();
  await page.getByRole("button", { name: "Cancelar", exact: true }).click();
  await expect(page.getByLabel("Nome completo *")).toHaveValue("");
});
test("Rotas antigas mantêm parâmetros e FAQ expande com teclado", async ({
  page,
}) => {
  await page.goto("/empresas.html?segmento=saude");
  await expect(page).toHaveURL("/empresas?segmento=saude");
  await expect(
    page.getByRole("button", { name: "Conhecer Ceres" }),
  ).toBeVisible();
  await page.goto("/");
  const question = page.getByRole("button", {
    name: "As empresas mantêm sua identidade?",
  });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
});

test("Os 13 projetos têm detalhes próprios e contato contextual", async ({
  page,
}) => {
  await page.goto("/empresas");
  const names = [
    "FarmaCore",
    "Ceres",
    "Visva",
    "Delta",
    "Proserve",
    "Stella",
    "NúcleoAuto",
    "Azalea",
    "Eclesia",
    "Propi",
    "Kinder",
    "Kinetrik",
    "Ginga",
  ];
  for (const name of names) {
    await page
      .getByRole("button", { name: `Conhecer ${name}`, exact: true })
      .click();
    const dialog = page.getByRole("dialog");
    await expect(
      dialog.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    await expect(dialog.locator(".solution-list li")).toHaveCount(3);
    await expect(dialog.locator(".detail-preview")).toBeVisible();
    expect(
      await dialog
        .locator(".detail-preview")
        .evaluate(
          (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
        ),
    ).toBe(true);
    await expect(
      dialog.getByRole("link", { name: "Conversar sobre a solução" }),
    ).toHaveAttribute("href", /empresa=/);
    await page.keyboard.press("Escape");
  }
  await page.getByRole("button", { name: "Automotivo", exact: true }).click();
  await expect(page.locator(".project-entry")).toHaveCount(2);
  await page.getByRole("textbox", { name: "Buscar projetos" }).fill("nucleo");
  await expect(
    page.getByRole("button", { name: "Conhecer NúcleoAuto", exact: true }),
  ).toBeVisible();
});
