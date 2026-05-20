# Profile Card

A small profile card app built with React, TypeScript, Vite, and Tailwind CSS.

The project is designed to be easy to fork and customize. Most of the content and visual styling can be changed through JSON files, so you can adapt the card without rewriting the components.

## Features

- Editable profile content through `src/config/profile.json`
- Editable visual theme through `src/config/theme.json`
- Built-in bilingual structure for Portuguese and English
- Configurable icon mapping through `src/config/icons.ts`
- Simple React component structure for further customization

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

## Project Structure

```text
src/
  components/        Reusable UI components
  config/
    icons.ts         Icon registry used by JSON config
    profile.json     Profile content, links, translations, badges
    theme.json       Colors, gradients, layout, font
    theme.ts         Applies theme values as CSS variables
```

## Customizing Content

The main content lives in [src/config/profile.json](/Users/alvaro/Documents/profile-card/src/config/profile.json).

### Top-level fields

- `defaultLanguage`: Initial language used when the app loads. Supported values are `pt` and `en`.
- `avatar`: Controls the profile image source and alt text.
- `contact`: Defines the email used by the CTA button.
- `infoItems`: Defines the detail rows shown below the profile summary.
- `techBadges`: List of technologies rendered as badges.
- `socialLinks`: Social platforms rendered as round icon buttons.
- `translations`: Localized text for name, role, description, button label, and language labels.

### Example

```json
{
  "defaultLanguage": "en",
  "avatar": {
    "src": "/avatar.jpg",
    "alt": "Jane Doe portrait"
  },
  "contact": {
    "email": "jane@example.com"
  }
}
```

## Editing `translations`

Each language entry controls the main visible text in the card:

- `name`
- `role`
- `about`
- `contactButton`
- `languageLabels`

Example:

```json
"translations": {
  "pt": {
    "name": "Seu Nome",
    "role": "Frontend Developer",
    "about": "A short paragraph about your work.",
    "contactButton": "Fale comigo",
    "languageLabels": {
      "pt": "Português",
      "en": "Inglês"
    }
  },
  "en": {
    "name": "Your Name",
    "role": "Frontend Developer",
    "about": "A short paragraph about your work.",
    "contactButton": "Contact Me",
    "languageLabels": {
      "pt": "Portuguese",
      "en": "English"
    }
  }
}
```

## Editing `infoItems`

Each item in `infoItems` renders one row with an icon and a value.

Supported shapes:

- Use `text` for a fixed value that does not change between languages.
- Use `translations` when the value should change with the selected language.

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
      "pt": "Sao Paulo, Brasil",
      "en": "Sao Paulo, Brazil"
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
- `contentWidth`: Width used by the content sections inside the card
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

These values are applied as CSS variables, which means you can reshape most of the visual system without touching component code.

## Adding New Icons

Icons are not defined directly in the JSON files. Instead, the JSON uses string keys that map to React icons in [src/config/icons.ts](/Users/alvaro/Documents/profile-card/src/config/icons.ts).

Current built-in icon keys:

- Detail icons: `mail`, `location`, `briefcase`
- Social icons: `github`, `linkedin`

### How to add a new detail icon

1. Import the icon in `src/config/icons.ts`
2. Add a new key inside `detailIcons`
3. Use that key inside `profile.json`

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

1. Import the icon in `src/config/icons.ts`
2. Add a new key inside `socialIcons`
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

## Notes for Forks

- Place static assets such as profile pictures inside `public/`
- Use paths like `/avatar.jpg` inside `profile.json`
- If you add a new language, you will also need to extend the TypeScript `Language` type in `src/config/types.ts`
- If you add new icon keys, keep `profile.json` and `icons.ts` in sync

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
