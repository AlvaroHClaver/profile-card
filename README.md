# Profile Card

Mini aplicação em React, TypeScript, Vite e Tailwind para publicar um cartão de perfil customizável.

## Como rodar

```bash
npm install
npm run dev
```

## Como customizar

Os dados principais ficam em JSON para facilitar forks e ajustes no GitHub.

### Conteúdo

Edite `src/config/profile.json` para trocar:

- nome, cargo, descrição e texto do botão em `translations`
- idioma inicial em `defaultLanguage`
- foto em `avatar.src`
- e-mail de contato em `contact.email`
- itens com ícones em `infoItems`
- tecnologias em `techBadges`
- links sociais em `socialLinks`

Ícones disponíveis por padrão:

- `infoItems`: `mail`, `location`, `briefcase`
- `socialLinks`: `github`, `linkedin`

Para adicionar novos ícones, importe-os em `src/config/icons.ts` e inclua uma nova chave em `detailIcons` ou `socialIcons`.

### Cores e estilos

Edite `src/config/theme.json` para trocar:

- `colors`: cores dos textos, badges, botão, card e avatar
- `gradients`: fundos da página, cabeçalho e botão principal
- `layout`: largura, altura, raio do card, tamanho/posição do avatar e largura do conteúdo
- `font.family`: fonte usada pela página

As mudanças de tema são aplicadas como CSS variables, então o visual pode ser ajustado sem mexer nos componentes.

## Build

```bash
npm run build
```
