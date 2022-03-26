# lint-config

> My custom lint config.

## Usage

### Install Dependencies

```bash
pnpm add -D @yzydeveloper/eslint-config
```

### Extends Eslint Config

Create a new file called `.eslintrc`

```json
// .eslintrc
{
  "extends": "@yzydeveloper"
}
```

Create a new file called `.eslintignore`

```txt
dist
node_modules
public
```

### Add Script

```json
// package.json
{
  "scripts": {
    "lint": "npx eslint --ext .js,.ts,.json,.vue --fix ."
  }
}
```

## Packages

| Name           | Version                                               |
| -------------- | ----------------------------------------------------- |
| [@yzydeveloper/eslint-config](packages/eslint/all) | [![npm](https://img.shields.io/npm/v/@yzydeveloper/eslint-config)](https://www.npmjs.com/package/@yzydeveloper/eslint-config) |
| [@yzydeveloper/eslint-config-vue](packages/eslint/vue) | [![npm](https://img.shields.io/npm/v/@yzydeveloper/eslint-config-vue)](https://www.npmjs.com/package/@yzydeveloper/eslint-config-vue) |
| [@yzydeveloper/eslint-config-ts](packages/eslint/typescript) | [![npm](https://img.shields.io/npm/v/@yzydeveloper/eslint-config-ts)](https://www.npmjs.com/package/@yzydeveloper/eslint-config-ts) |
| [@yzydeveloper/eslint-config-basic](packages/eslint/basic) | [![npm](https://img.shields.io/npm/v/@yzydeveloper/eslint-config-basic)](https://www.npmjs.com/package/@yzydeveloper/eslint-config-basic) |

## Ref

I referred to them and simplified some configurations that I don't need.

- [@yunyoujun/eslint-config](https://github.com/YunYouJun/eslint-config)

## Release

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

- [`--no-push`](https://github.com/lerna/lerna/tree/main/commands/version#--no-push): By default, lerna version will push the committed and tagged changes to the configured git remote. Pass --no-push to disable this behavior.
