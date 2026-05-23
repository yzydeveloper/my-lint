# @yzydeveloper/eslint-config

> My custom ESLint flat config.

[![npm](https://img.shields.io/npm/v/@yzydeveloper/eslint-config)](https://www.npmjs.com/package/@yzydeveloper/eslint-config)

## Usage

### Install

```bash
pnpm add -D eslint @yzydeveloper/eslint-config
```

### Config

Create `eslint.config.mjs` in your project root.

```js
// eslint.config.mjs
import yzydeveloper from '@yzydeveloper/eslint-config'

export default yzydeveloper()
```

### Add Script

```json
{
    "scripts": {
        "lint": "eslint",
        "lint:fix": "eslint --fix"
    }
}
```

## CLI

You can also use the CLI to setup the config.

```bash
pnpm dlx @yzydeveloper/eslint-config@latest
```

## Features

- ESLint flat config
- Auto fix for formatting
- TypeScript, JSX, Vue, JSON, YAML, TOML, Markdown support
- Optional React, Next.js, Svelte, UnoCSS, Astro, Solid support
- Respects `.gitignore` by default

## License

[MIT](./LICENSE)
