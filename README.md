# Profile Card

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-5-E91E63?logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)

A small profile card app built with React, TypeScript, Vite, Tailwind CSS, and React Icons.

The project is designed to be easy to fork and customize. Content and theme settings live in JSON files, and the icon registry is centralized so you can extend the UI without touching every component.

## Features

- Editable profile content through `src/config/profile.json`
- Editable visual theme through `src/config/theme.json`
- Language switcher driven by configuration instead of fixed `pt` and `en` buttons
- Configurable icon mapping through `src/config/icons.ts`
- Simple component structure for deeper customization

## Screenshot

![Application screenshot](screenshots/demo.png)

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

### Run with Docker

Build the Docker image:

```bash
docker build -t profile-card .
```

Run the container:

```bash
docker run --name profile-card -p 8080:80 profile-card
```

After starting the container, access the application at:

```text
http://localhost:8080
```

To stop and remove the container:

```bash
docker stop profile-card
docker rm profile-card
```

## Project Structure

```text
src/
  components/        Reusable UI components
  config/
    icons.ts         Icon registry used by JSON config
    profile.json     Profile content, links, translations, language options
    theme.json       Colors, gradients, layout, font
    theme.ts         Applies theme values as CSS variables
```

## Content Configuration

The main content lives in [src/config/profile.json](/Users/alvaro/Documents/profile-card/src/config/profile.json).

### Top-level fields

- `defaultLanguage`: The initial language code used when the app loads
- `languages`: The languages shown in the language switcher
- `avatar`: Profile image source and alt text
- `contact`: Email used by the CTA button
- `infoItems`: Detail rows rendered below the summary
- `techBadges`: Technologies rendered as badges
- `socialLinks`: Social links rendered as round icon buttons
- `translations`: Localized content for the profile text and CTA

### Example

```json
{
  "defaultLanguage": "en",
  "languages": [
    {
      "code": "en",
      "label": "English",
      "shortLabel": "EN",
      "htmlLang": "en"
    }
  ],
  "avatar": {
    "src": "/avatar.jpg",
    "alt": "Jane Doe portrait"
  },
  "contact": {
    "email": "jane@example.com"
  }
}
```

## Adding or Changing Languages

The app is no longer limited to `pt` and `en`. Language options are read from `profile.json`, and the switcher renders them dynamically.

To add a new language:

1. Add a new item to `languages`
2. Add a matching entry under `translations`
3. Add localized values inside any `infoItems.translations` entries that should change with the selected language

### `languages` structure

Each item supports:

- `code`: Internal language key such as `en`, `pt`, `es`, `fr`
- `label`: Full label used for accessibility and tooltip text
- `shortLabel`: Short label shown in the switcher button
- `htmlLang`: Value applied to the page `<html lang="">`

Example:

```json
"languages": [
  {
    "code": "pt",
    "label": "Português",
    "shortLabel": "PT",
    "htmlLang": "pt-BR"
  },
  {
    "code": "en",
    "label": "English",
    "shortLabel": "EN",
    "htmlLang": "en"
  },
  {
    "code": "es",
    "label": "Español",
    "shortLabel": "ES",
    "htmlLang": "es"
  }
]
```

### `translations` structure

Each language entry controls the main visible text in the card:

- `name`
- `role`
- `about`
- `contactButton`

Example:

```json
"translations": {
  "en": {
    "name": "Jane Doe",
    "role": "Frontend Developer",
    "about": "I build polished interfaces and design systems.",
    "contactButton": "Contact Me"
  },
  "es": {
    "name": "Jane Doe",
    "role": "Desarrolladora Frontend",
    "about": "Creo interfaces cuidadas y sistemas de diseno.",
    "contactButton": "Contactarme"
  }
}
```

### Notes

- `defaultLanguage` should match one of the keys inside `translations`
- If a localized `infoItems.translations` value is missing, the app falls back to the default language for that row
- You do not need to update the `LanguageSwitch` component when adding a new language

## Editing `infoItems`

Each item in `infoItems` renders one row with an icon and a value.

Supported shapes:

- Use `text` for a fixed value that does not change between languages
- Use `translations` when the value should change with the selected language

Example:

```json
"infoItems": [
  {
    "icon": "mail",
    "text": "jane@example.com"
  },
  {
    "icon": "location",
    "translations": {
      "en": "Sao Paulo, Brazil",
      "es": "Sao Paulo, Brasil"
    }
  }
]
```

## Editing Social Links

Each entry in `socialLinks` supports:

- `icon`: The icon key registered in `src/config/icons.ts`
- `url`: The target link
- `label`: Accessible label used by screen readers

Example:

```json
"socialLinks": [
  {
    "icon": "github",
    "url": "https://github.com/your-user",
    "label": "GitHub"
  },
  {
    "icon": "linkedin",
    "url": "https://linkedin.com/in/your-user",
    "label": "LinkedIn"
  }
]
```

## Customizing the Theme

The visual theme lives in [src/config/theme.json](/Users/alvaro/Documents/profile-card/src/config/theme.json).

### `font`

- `family`: Font family applied to the page

### `layout`

- `cardWidth`: Card width on desktop
- `cardWidthMobile`: Card width on small screens
- `cardHeight`: Card height
- `cardRadius`: Card border radius
- `contentWidth`: Width used by content sections inside the card
- `headerHeight`: Header height
- `avatarSize`: Avatar width and height
- `avatarTop`: Vertical avatar offset
- `avatarLeft`: Horizontal avatar offset

### `colors`

- `cardBg`
- `cardBorder`
- `primaryText`
- `detailsText`
- `action`
- `profileBg`
- `bulletIcon`
- `bulletText`
- `badgeBg`
- `badgeBorder`
- `badgeFont`

### `gradients`

- `app`: Page background
- `header`: Header background
- `action`: Primary button background

These values are applied as CSS variables, so most visual changes can be made without editing component code.

## Using React Icons

This project uses [`react-icons`](https://react-icons.github.io/react-icons/) to render both detail icons and social icons.

### Why it is set up this way

- JSON files stay simple and serializable by storing only icon keys such as `mail` or `github`
- Components never import icons directly from configuration JSON
- New icons can be introduced in one place through the icon registry

### Current icon registry

The icon mappings live in [src/config/icons.ts](/Users/alvaro/Documents/profile-card/src/config/icons.ts).

Current built-in keys:

- Detail icons: `mail`, `location`, `briefcase`
- Social icons: `github`, `linkedin`

### How to add a new detail icon

1. Import the icon from the correct `react-icons` package
2. Add a key inside `detailIcons`
3. Use that key in `profile.json`

Example:

```ts
import { FiGlobe } from "react-icons/fi";

export const detailIcons = {
  briefcase: IoBriefcaseOutline,
  location: GrLocation,
  mail: FiMail,
  website: FiGlobe,
};
```

Then in `profile.json`:

```json
{
  "icon": "website",
  "text": "yourdomain.com"
}
```

### How to add a new social icon

1. Import the icon from `react-icons`
2. Add a key inside `socialIcons`
3. Reference the key in `socialLinks`

Example:

```ts
import { IoLogoInstagram } from "react-icons/io5";

export const socialIcons = {
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  instagram: IoLogoInstagram,
};
```

Then in `profile.json`:

```json
{
  "icon": "instagram",
  "url": "https://instagram.com/your-user",
  "label": "Instagram"
}
```

### Choosing icon packages

`react-icons` groups icons by library. A few common examples:

- `react-icons/fi`: Feather Icons
- `react-icons/io5`: Ionicons v5
- `react-icons/fa`: Font Awesome
- `react-icons/si`: Simple Icons

Use the import path that matches the icon you want to add.

## Notes for Forks

- Place static assets such as profile pictures inside `public/`
- Use paths like `/avatar.jpg` inside `profile.json`
- Keep `languages`, `translations`, and `infoItems.translations` aligned
- If you add a new icon key, keep `profile.json` and `icons.ts` in sync

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
