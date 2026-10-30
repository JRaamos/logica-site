import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Copy, Download, Check, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { PageIntro } from "../components/app/Shared";
import { Button } from "../components/ui/button";
import { Input, Textarea } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../components/ui/dialog";
import { companies, subjects } from "../lib/data";
const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome com pelo menos 2 caracteres.")
    .max(120, "Use até 120 caracteres."),
  email: z.email("Informe um e-mail válido, como nome@empresa.com.").max(254),
  company: z.string().trim().max(160, "Use até 160 caracteres."),
  subject: z.enum(["grupo", "solucoes", "parcerias", "outros"], {
    error: "Escolha o assunto da conversa.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Conte um pouco mais: escreva pelo menos 20 caracteres.")
    .max(3000, "Use até 3.000 caracteres."),
  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Confirme a leitura do aviso de privacidade para continuar.",
    ),
});
type Values = z.infer<typeof schema>;
const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT || "").trim();
export default function Contact() {
  const [params] = useSearchParams();
  const validSubject =
    subjects.find((s) => s.value === params.get("assunto"))?.value || "";
  const company = companies.find((c) => c.id === params.get("empresa"));
  const [prepared, setPrepared] = useState("");
  const [sent, setSent] = useState(false);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: validSubject as Values["subject"],
      message: company
        ? `Gostaria de conhecer o projeto ${company.name}, da Logica.`
        : "",
      consent: false,
    },
  });
  async function onSubmit(values: Values) {
    setSent(false);
    const message = `Contato — Logica\n\nNome: ${values.name}\nE-mail: ${values.email}\nEmpresa: ${values.company || "Não informada"}\nAssunto: ${subjects.find((s) => s.value === values.subject)?.label}\n\n${values.message}`;
    if (!endpoint) {
      setPrepared(message);
      return;
    }
    try {
      const url = new URL(endpoint);
      if (url.protocol !== "https:") throw new Error("config");
      const response = await fetch(url.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("response");
      const data = await response.json();
      if (data.success !== true) throw new Error("delivery");
      setSent(true);
      setPrepared(message);
      form.reset();
    } catch {
      toast.error(
        "Não foi possível enviar a mensagem. Tente novamente em instantes.",
      );
    }
  }
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(prepared);
      toast.success("Mensagem copiada.");
    } catch {
      toast.error("Não foi possível copiar. Use “Baixar mensagem”.");
    }
  }
  function downloadMessage() {
    const url = URL.createObjectURL(
      new Blob([prepared], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "mensagem-logica.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Mensagem preparada para download.");
  }
  function cancel() {
    form.reset();
    toast("Preenchimento cancelado.");
  }
  return (
    <>
      <PageIntro title="Vamos conversar">
        Toda boa conexão começa com espaço para ouvir.
      </PageIntro>
      <section className="container contact-grid">
        <aside className="contact-aside">
          <h2>
            Qual é o seu
            <br /> próximo capítulo?
          </h2>
          <p>
            Apresente sua empresa, encontre uma solução ou compartilhe uma ideia
            de parceria.
          </p>
          <div className="contact-options">
            {subjects.slice(0, 3).map((subject) => (
              <button
                key={subject.value}
                type="button"
                aria-pressed={form.watch("subject") === subject.value}
                onClick={() =>
                  form.setValue("subject", subject.value as Values["subject"], {
                    shouldValidate: true,
                  })
                }
              >
                {subject.label}
                <ArrowRight />
              </button>
            ))}
          </div>
          <div className="contact-note">
            <h3>
              {endpoint
                ? "Uma conversa com a Logica"
                : "Prepare o primeiro contato"}
            </h3>
            <p>
              {endpoint
                ? "Preencha os campos ao lado para encaminhar sua mensagem."
                : "Nesta apresentação, você pode copiar ou baixar sua mensagem. O envio não está conectado."}
            </p>
          </div>
        </aside>
        <Form {...form}>
          <form
            className="contact-form"
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="form-top">
              <h2>Conte um pouco sobre você</h2>
              <p>* obrigatório</p>
            </div>
            <div className="form-grid">
              <FormItem>
                <FormLabel htmlFor="name">Nome completo *</FormLabel>
                <Input
                  id="name"
                  autoComplete="name"
                  placeholder="Ex.: Mariana Oliveira"
                  maxLength={120}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.name}
                  aria-describedby="name-error"
                  {...form.register("name")}
                />
                <FormMessage name="name" />
              </FormItem>
              <FormItem>
                <FormLabel htmlFor="email">E-mail *</FormLabel>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="voce@empresa.com.br"
                  aria-required="true"
                  maxLength={254}
                  aria-invalid={!!form.formState.errors.email}
                  aria-describedby="email-error"
                  {...form.register("email")}
                />
                <FormMessage name="email" />
              </FormItem>
              <FormItem>
                <FormLabel htmlFor="company">Empresa</FormLabel>
                <Input
                  id="company"
                  autoComplete="organization"
                  placeholder="Nome da sua empresa"
                  maxLength={160}
                  {...form.register("company")}
                />
                <FormMessage name="company" />
              </FormItem>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="subject">Assunto *</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="subject"
                        ref={field.ref}
                        onBlur={field.onBlur}
                        aria-required="true"
                        aria-invalid={!!form.formState.errors.subject}
                        aria-describedby="subject-error"
                      >
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject.value} value={subject.value}>
                            {subject.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage name="subject" />
                  </FormItem>
                )}
              />
              <FormItem className="full-width">
                <FormLabel htmlFor="message">Mensagem *</FormLabel>
                <Textarea
                  id="message"
                  placeholder="Conte sobre sua empresa e o que gostaria de construir."
                  maxLength={3000}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.message}
                  aria-describedby="message-error"
                  {...form.register("message")}
                />
                <FormMessage name="message" />
              </FormItem>
              <FormItem className="full-width">
                <div className="consent-row">
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <Checkbox
                        id="consent"
                        checked={field.value}
                        onCheckedChange={(value) =>
                          field.onChange(value === true)
                        }
                        ref={field.ref}
                        onBlur={field.onBlur}
                        aria-required="true"
                        aria-invalid={!!form.formState.errors.consent}
                        aria-describedby="consent-error"
                      />
                    )}
                  />
                  <label htmlFor="consent">
                    Li o{" "}
                    <Link to="/privacidade" target="_blank" rel="noopener">
                      aviso de privacidade
                    </Link>{" "}
                    e estou ciente do uso dos dados para este contato. *
                  </label>
                </div>
                <FormMessage name="consent" />
              </FormItem>
            </div>
            <div className="form-actions">
              <Button
                type="button"
                variant="outline"
                onClick={cancel}
                disabled={form.formState.isSubmitting}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <>
                    <LoaderCircle className="spin" />
                    Enviando mensagem
                  </>
                ) : (
                  <>
                    {endpoint ? "Enviar mensagem" : "Preparar mensagem"}
                    <ArrowRight />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </section>
      <Dialog
        open={!!prepared}
        onOpenChange={(open) => {
          if (!open) setPrepared("");
        }}
      >
        <DialogContent>
          <Check className="detail-icon" />
          <DialogTitle className="confirmation-title">
            {sent ? "Mensagem enviada" : "Mensagem preparada"}
          </DialogTitle>
          <DialogDescription>
            {sent
              ? "Sua mensagem foi recebida pelo serviço de contato."
              : "Sua mensagem está pronta para copiar ou baixar. Nenhuma mensagem foi enviada."}
          </DialogDescription>
          <pre className="prepared-message">{prepared}</pre>
          <div className="message-tools">
            <Button variant="outline" onClick={copyMessage}>
              <Copy />
              Copiar mensagem
            </Button>
            <Button variant="outline" onClick={downloadMessage}>
              <Download />
              Baixar mensagem
            </Button>
          </div>
          <div className="dialog-actions">
            <DialogClose asChild>
              <Button variant="outline">Fechar mensagem</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
