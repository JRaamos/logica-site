import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const html = readFileSync("dist/index.html", "utf8");
for (const page of ["grupo", "empresas", "modelo", "contato", "privacidade"]) {
  mkdirSync(`dist/${page}`, { recursive: true });
  writeFileSync(`dist/${page}/index.html`, html);
  writeFileSync(`dist/${page}.html`, html);
}
writeFileSync("dist/404.html", html);
writeFileSync("dist/.nojekyll", "");
