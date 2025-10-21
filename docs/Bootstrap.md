# Bootstrapping

This is the Bootstrapping process for a professional Node Typescript project.

## 1. Project initialization

### Npm

```bash
# Initialize npm project
npm init -y
```

### Typescript

```bash
# Install Typescript
npm install typescript --save-dev
npm install --save-dev @types/node
# config tsconfig.json
npx tsc --init
```

## 2. Code quality tools

### Prettier

```bash
npm install prettier --save-dev
# Config at prettier.config.js
# Ignore at .prettierignore
# Add to package.json scripts: "format": "prettier --write .",
```

### ESLint

```bash
npm init @eslint/config@latest
# Config at eslint.config.js
# Config eslint with prettier
npm install eslint-config-prettier --save-dev
# Add to package.json scripts: "lint": "eslint --fix .",
```

### Vs Code extensions recommendations

Create a `.vscode/extensions.json` file with the following content:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

## 3. Git workflow tools

### Husky

```bash
npm install husky --save-dev
# Initialize husky
npx husky init
# Change Pre-commit hook to just format and lint
echo 'npm run format && npm run lint' > .husky/pre-commit
```

### Lint-staged

```bash
npm install lint-staged --save-dev
# Config at lint-staged.config.js
# Add to package.json scripts: "lint-staged": "lint-staged",
# Change Pre-commit hook to run lint-staged
```