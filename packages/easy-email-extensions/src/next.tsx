'use client';

/**
 * Next.js 14 App Router Compatible Export
 *
 * This file provides a clean export of the email editor extensions
 * that are fully compatible with Next.js 14's app router and server components.
 *
 * All components exported from this file have the 'use client' directive
 * and are safe to use in Next.js 14 applications without needing dynamic imports
 * or ssr: false workarounds.
 *
 * @example
 * ```tsx
 * // app/editor/page.tsx
 * import { StandardLayout, ExtensionProvider } from 'easy-email-extensions/next';
 * import { EmailEditorProvider } from 'easy-email-editor/next';
 *
 * export default function EditorPage() {
 *   return (
 *     <EmailEditorProvider data={initialData} height="100vh">
 *       {({ values }) => (
 *         <ExtensionProvider>
 *           <StandardLayout />
 *         </ExtensionProvider>
 *       )}
 *     </EmailEditorProvider>
 *   );
 * }
 * ```
 */

// Import styles
import './index.scss';

// Re-export all components - they already have 'use client' directives
export * from './BlockLayer';
export * from './AttributePanel';
export * from './ShortcutToolbar';
export * from './SourceCodePanel';
export * from './InteractivePrompt';
export * from './SimpleLayout';
export * from './StandardLayout';
export * from './MergeTagBadgePrompt';
export * from './components/Providers/ExtensionProvider';
export * from './constants';
export * from './components/Form';
export * from './components/ShadowDom';

// Export utils (these are safe for both client and server)
export { getContextMergeTags } from './utils/getContextMergeTags';
export { getIconNameByBlockType, setIconsMap } from './utils/getIconNameByBlockType';
export { getBlockTitle } from './utils/getBlockTitle';
export { MjmlToJson } from './utils/MjmlToJson';
