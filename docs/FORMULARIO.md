# Formulário de contato

## Comportamento padrão

Sem `VITE_CONTACT_ENDPOINT`, os campos são processados no navegador. O site mostra “Mensagem preparada” e informa que nada foi enviado. É possível copiar ou baixar `.txt`. Não há gravação em localStorage, cookies ou banco de dados pelo código da aplicação.

A mensagem fica apenas no estado da página e no arquivo/clipboard se o visitante escolher essas ações. Recarregar perde o preenchimento. O botão Cancelar restaura os valores iniciais, incluindo assunto e solução selecionados na URL.

## Conectar recebimento real

1. Implemente um endpoint HTTPS sob responsabilidade da empresa. Defina destinatário, tratamento de dados, retenção e proteção contra abuso.
2. Copie `.env.example` para `.env.local` e configure apenas a URL pública:

```dotenv
VITE_CONTACT_ENDPOINT=https://seu-dominio.example/api/contato
```

3. O endpoint precisa aceitar `POST` JSON e CORS para a origem do site, se estiver em outro domínio. Contrato:

```json
{
  "name": "Mariana Oliveira",
  "email": "mariana@example.com",
  "company": "Horizonte Tecnologia",
  "subject": "solucoes",
  "message": "Gostaria de conhecer as soluções disponíveis.",
  "consent": true
}
```

4. Responda HTTP 2xx com `{ "success": true }` apenas após receber/aceitar a mensagem. O site só confirma “Mensagem enviada” com essas duas condições. Outros retornos ou timeout de 15 segundos exibem erro e preservam os campos.
5. Faça novo build. Valores VITE são resolvidos durante o build, não depois dele.
6. Atualize o aviso de privacidade com os dados reais e valide uma entrega até o destinatário. O endpoint opcional não foi fornecido nem validado nesta entrega.

Não coloque chaves de e-mail, senhas ou tokens em variáveis VITE. O envio ao provedor de e-mail deve ocorrer no servidor, com validação, limites e controles apropriados ao uso.
