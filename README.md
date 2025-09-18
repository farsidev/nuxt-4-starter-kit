# Nuxt 4 Starter Kit

A production-grade Nuxt 4 starter kit with TypeScript, Tailwind CSS v4, and modern tooling. This template provides everything you need to build fast, secure, and SEO-optimized applications.

## ✨ Features

- **🚀 Nuxt 4** - Latest Nuxt with TypeScript strict mode
- **🎨 Tailwind CSS v4** - Latest Tailwind with design tokens and `tailwind-variants`
- **🔧 VueUse** - Essential Vue composition utilities with auto-imports
- **🎯 Icons** - Iconify integration with local SVG support
- **🖼️ Images** - Optimized image handling with `@nuxt/image`
- **🔤 Fonts** - Local and Google Fonts integration
- **🔍 SEO** - Complete SEO setup with sitemap, robots, and structured data
- **🛡️ Security** - Production-ready security headers and policies
- **📝 Code Quality** - ESLint flat config, Prettier, and pre-commit hooks
- **🤖 MCP** - Model Context Protocol for AI integration
- **⚡ Performance** - Optimized build with Vite and modern tooling

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone or use as template**

   ```bash
   git clone <your-repo-url>
   cd nuxt-4-starter-kit
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nuxt-4-starter-kit/
├── .vscode/                 # VS Code settings and extensions
├── .github/workflows/       # GitHub Actions CI
├── assets/
│   ├── css/
│   │   └── main.css        # Tailwind CSS v4 + design tokens
│   └── fonts/              # Local font files
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.vue      # tailwind-variants example
│   │   └── Badge.vue       # tailwind-variants example
│   └── Logo.vue
├── pages/                  # File-based routing
│   ├── index.vue          # Demo page
│   └── about.vue
├── public/
│   └── icons/             # Local SVG icons
├── server/
│   ├── routes/            # API routes
│   └── plugins/           # Server plugins
├── nuxt.config.ts         # Nuxt configuration
├── eslint.config.mjs      # ESLint flat config
└── package.json
```

## 🛠️ Available Scripts

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Code Quality

```bash
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm typecheck    # TypeScript type checking
```

## 🎨 Styling with Tailwind Variants

This starter uses `tailwind-variants` for type-safe component variants:

```vue
<template>
  <Button variant="primary" size="lg"> Click me </Button>
</template>
```

Components support multiple variants:

- **Button**: `default`, `secondary`, `outline`, `ghost`, `destructive`, `link`
- **Badge**: `default`, `secondary`, `success`, `warning`, `destructive`, `outline`

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
# Site configuration
NUXT_PUBLIC_SITE_URL=https://your-domain.com

# Security
NUXT_SECURITY_CONTACT=security@your-domain.com
```

### Tailwind CSS v4

The project uses Tailwind CSS v4 with design tokens defined in `assets/css/main.css`:

```css
:root {
  --color-primary: 59 130 246;
  --color-secondary: 100 116 139;
  /* ... more tokens */
}
```

### Security Configuration

Security headers are configured in `nuxt.config.ts`:

```typescript
security: {
  hsts: { maxAge: 31536000 },
  csp: { /* Content Security Policy */ },
  // ... more security options
}
```

## 🤖 MCP (Model Context Protocol)

This starter includes MCP support for AI integration:

1. **Enable in development**:

   ```typescript
   // nuxt.config.ts
   devServer: {
     mcp: true;
   }
   ```

2. **Connect from compatible IDEs**:
   - Cursor: Built-in MCP support
   - Claude Desktop: Configure MCP server

3. **Available endpoints**:
   - `/api/mcp/sse` - Server-Sent Events for real-time communication

## 🔍 SEO Features

- **Meta tags** - Automatic title, description, and Open Graph
- **Sitemap** - Auto-generated sitemap.xml
- **Robots.txt** - Search engine directives
- **Structured data** - Schema.org markup
- **Canonical URLs** - Prevent duplicate content

## 🛡️ Security Features

- **HSTS** - HTTP Strict Transport Security
- **CSP** - Content Security Policy
- **Security headers** - X-Frame-Options, X-Content-Type-Options, etc.
- **Security.txt** - Security contact information
- **Permissions Policy** - Feature access control

## 📦 Modules Included

| Module          | Purpose                   | Documentation                                      |
| --------------- | ------------------------- | -------------------------------------------------- |
| `@vueuse/nuxt`  | Vue composition utilities | [VueUse](https://vueuse.org/)                      |
| `@nuxt/icon`    | Iconify integration       | [Nuxt Icon](https://nuxt.com/modules/icon)         |
| `@nuxt/image`   | Optimized images          | [Nuxt Image](https://nuxt.com/modules/image)       |
| `@nuxt/fonts`   | Font optimization         | [Nuxt Fonts](https://nuxt.com/modules/fonts)       |
| `@nuxtjs/seo`   | SEO meta-package          | [Nuxt SEO](https://nuxtseo.com/)                   |
| `nuxt-security` | Security headers          | [Nuxt Security](https://nuxt-security.vercel.app/) |
| `nuxt-mcp`      | AI integration            | [Nuxt MCP](https://github.com/nuxt/mcp)            |

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify

1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `.output/public`

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt Team](https://nuxt.com/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [VueUse](https://vueuse.org/) for essential Vue utilities
- [Iconify](https://iconify.design/) for the icon ecosystem

## 📚 Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [VueUse Documentation](https://vueuse.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Happy coding! 🎉**
