# Next.js + Tailwind CSS + TypeScript Boilerplate & Starter

A comprehensive starter pack featuring Next.js, TypeScript, Tailwind CSS, and Shadcn UI. Additionally, AI-powered extensions are included but kept separate to maintain the core boilerplate structure—use them as needed."

### Know bugs wait to solve

- husky commits can not found npx when only try to commit on **SoucreTree** only, using terminal is fine

## Features

- <u>**Next.js 14 with App Router**</u>  
  Leverage the latest App Router for enhanced routing capabilities.

- <u>**React 18**</u>  
  Enjoy concurrent features and the latest improvements in React 18.

- <u>**TypeScript**</u>  
  Strongly typed development with TypeScript integration.

- <u>**Shadcn/UI Ready**</u>  
  Seamlessly integrated Shadcn UI for a cohesive design system.

- <u>**Tailwind CSS 3**</u>  
  Utility-first CSS framework with the latest version of Tailwind.

- <u>**Pre-built Components**</u>  
  A set of pre-designed components ready to use.

- <u>**Jest**</u>  
  Unit and integration testing with Jest, configured and ready to go.

- <u>**Absolute Import and Path Alias**</u>  
  Simplify imports with the `@/` prefix, making your code cleaner and more maintainable.

- <u>**ESLint**</u>  
  Identify and fix issues in your codebase; also auto-sorts imports.

- <u>**Prettier**</u>  
  Automatic code formatting to maintain a consistent code style.

- <u>**Husky & Lint Staged**</u>  
  Ensure code quality by running linting and formatting checks before commits.

- <u>**Conventional Commit Lint**</u>  
  Enforce conventional commit messages for better versioning.

- <u>**Release Please GitHub Actions**</u>  
  Automate your release process by linting code on pull requests.

- <u>**Automatic Branch and Issue Autolink**</u>  
  Automatically create branches when issues are assigned and auto-link them in pull requests.

- <u>**Snippets**</u>  
  A collection of useful code snippets for faster development.

- <u>**Site Map**</u>  
  Automatically generate a `sitemap.xml` for improved SEO.

- <u>**Reset Css**</u>  
  Fill the control on CSS when using semantic HTML.

- <u>**Expansion Pack**</u>  
  Additional features and tools to extend your project as needed.

## Getting Started

### 1. Clone this template using one of the following methods:

- **Use this repository as a template**  
  You can start your project by using this repository as a template.

  _Disclosure_: By using this repository as a template, an attribution link will appear on your repository. Your acknowledgment would be greatly appreciated as it helps others discover this template too! 😄

- **Using `create-next-app`**  
  Create a new Next.js app with this template using the following command:

  ```bash
  pnpm create next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter ts-pnpm
  ```

### 2. Install dependencies

**pnpm** makes husky work properly and decrease your dependecies storage hell

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

Access [http://localhost:3000](http://localhost:3000) in your browser to view. Begin editing the page by making changes to `src/pages/index.tsx`.

### 4. Change Default Configurations

There are some things you need to change including title, urls, favicons, etc.

Find all comments with **_!CONFIGURE_**, then follow the guide.

**_Don't forget_** to change the package name in package.json

## Expansion Pack 📦

This boilerplate has [expansion pack](https://github.com/fthozdemir/next-expansion-pack).
