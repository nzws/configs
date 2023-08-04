# configs

My best & simple configs for TypeScript projects.

## Prettier

### Install

```bash
yarn add --dev --exact prettier @nzws/prettier-config
```

### Usage

Add to your `package.json`:

```
{
  # ...
  "prettier": "@nzws/prettier-config"
}
```

## ESLint

### Install

```bash
yarn add --dev --exact eslint @nzws/eslint-config
```

### Usage

Add to your `package.json`:

```
{
  # ...
  "eslintConfig": {
    "extends": "@nzws/eslint-config/typescript-nodejs" # Example for TypeScript + Node.js
  }
}
```

### Extends

- `@nzws/eslint-config/typescript-nodejs`: TypeScript + Node.js
- `@nzws/eslint-config/typescript-react`: TypeScript + React
- `@nzws/eslint-config/typescript-next`: TypeScript + Next.js
