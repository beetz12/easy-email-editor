# Easy Email Editor - Next.js 14 App Router Demo

This demo application showcases the easy-email-editor running natively in Next.js 14 with full App Router and Server Components support.

## Features

✅ **No SSR Workarounds** - No `dynamic()` imports with `ssr: false` required
✅ **Native Next.js 14** - Full App Router and Server Components compatibility
✅ **Production Ready** - Works in both development and production builds
✅ **Zero Configuration** - Minimal setup required
✅ **Full Feature Set** - All editor functionality available

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Available Routes

- `/` - Home page with migration documentation
- `/editor` - Full-featured editor with extensions (StandardLayout)
- `/editor/simple` - Simple editor (core only)

## Project Structure

```
nextjs14-app-router-demo/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── editor/
│   │   ├── page.tsx         # Full editor page
│   │   └── simple/
│   │       └── page.tsx     # Simple editor page
├── next.config.js           # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Key Configuration

### next.config.js

```javascript
const nextConfig = {
  transpilePackages: ['easy-email-core', 'easy-email-editor', 'easy-email-extensions'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};
```

### CSS Imports

The correct order for CSS imports is:

```tsx
import '@arco-design/web-react/dist/css/arco.css';  // 1. Arco Design
import 'easy-email-editor/lib/style.css';            // 2. Editor styles
import 'easy-email-extensions/lib/style.css';        // 3. Extensions styles
```

## Usage Examples

### Simple Editor

```tsx
'use client';

import { EmailEditorProvider, EmailEditor } from 'easy-email-editor';
import { BlockManager } from 'easy-email-core';
import 'easy-email-editor/lib/style.css';

const initialData = BlockManager.getBlockByType('Page')!.create({});

export default function EditorPage() {
  return (
    <EmailEditorProvider data={initialData} height="100vh">
      {({ values }) => <EmailEditor />}
    </EmailEditorProvider>
  );
}
```

### Full Editor with Extensions

```tsx
'use client';

import { EmailEditorProvider } from 'easy-email-editor';
import { ExtensionProvider, StandardLayout } from 'easy-email-extensions';
import { BlockManager } from 'easy-email-core';
import '@arco-design/web-react/dist/css/arco.css';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';

const initialData = BlockManager.getBlockByType('Page')!.create({});

export default function EditorPage() {
  const onSubmit = async (values: any) => {
    console.log('Email data:', values);
  };

  return (
    <div style={{ height: '100vh' }}>
      <EmailEditorProvider
        data={initialData}
        height="100vh"
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <ExtensionProvider>
            <StandardLayout showSourceCode={true} />
          </ExtensionProvider>
        )}
      </EmailEditorProvider>
    </div>
  );
}
```

## Migration Highlights

This demo application demonstrates the following Next.js 14 migration improvements:

1. **Fixed Module-Level DOM Access** - All browser API calls are now SSR-safe
2. **Added 'use client' Directives** - 35+ components properly marked as client components
3. **Lazy Initialization** - Browser APIs initialized on-demand, not at module load
4. **Conditional Rendering** - Portal and browser-dependent features guarded with SSR checks
5. **Clean Architecture** - Proper separation between server and client components

## Dependencies

- **next**: ^14.2.18
- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **easy-email-core**: workspace:*
- **easy-email-editor**: workspace:*
- **easy-email-extensions**: workspace:*
- **mjml-browser**: ^4.15.3
- **react-final-form**: ^6.5.9

## Troubleshooting

### Build Errors

If you encounter build errors, ensure:

1. All package dependencies are installed: `npm install`
2. The packages are built: `cd ../packages/easy-email-core && npm run build`
3. Node version is 18+ or 20+

### Runtime Errors

Common issues and solutions:

1. **"document is not defined"** - Ensure the page component has `'use client'` directive
2. **CSS not loading** - Check CSS import order in your components
3. **Type errors** - Run `npm install` and ensure TypeScript dependencies are installed

### Development Tips

1. Use React DevTools to inspect Client Component boundaries
2. Check browser console for hydration warnings
3. Test both development and production builds

## Learn More

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Migration Guide](../NEXTJS14_MIGRATION.md)

## License

MIT
