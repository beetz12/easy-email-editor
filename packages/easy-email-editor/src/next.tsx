'use client';

/**
 * Next.js 14 App Router Compatible Export
 *
 * This file provides a clean export of the email editor components
 * that are fully compatible with Next.js 14's app router and server components.
 *
 * All components exported from this file have the 'use client' directive
 * and are safe to use in Next.js 14 applications without needing dynamic imports
 * or ssr: false workarounds.
 *
 * @example
 * ```tsx
 * // app/editor/page.tsx
 * import { EmailEditor, EmailEditorProvider } from 'easy-email-editor/next';
 *
 * export default function EditorPage() {
 *   return (
 *     <EmailEditorProvider
 *       data={initialData}
 *       height="100vh"
 *     >
 *       {({ values }) => <EmailEditor />}
 *     </EmailEditorProvider>
 *   );
 * }
 * ```
 */

// Re-export all components - they already have 'use client' directives
export { EmailEditorProvider } from './components/Provider/EmailEditorProvider';
export { EmailEditor } from './components/EmailEditor';
export { BlockAvatarWrapper } from './components/wrapper';
export { EditEmailPreview } from './components/EmailEditor/components/EditEmailPreview';
export { MobileEmailPreview } from './components/EmailEditor/components/MobileEmailPreview';
export { DesktopEmailPreview } from './components/EmailEditor/components/DesktopEmailPreview';
export { ToolsPanel } from './components/EmailEditor/components/ToolsPanel';

// Export hooks
export { useActiveTab } from './hooks/useActiveTab';
export { useEditorProps } from './hooks/useEditorProps';
export { useBlock } from './hooks/useBlock';
export { useEditorContext } from './hooks/useEditorContext';
export { useDomScrollHeight } from './hooks/useDomScrollHeight';
export { useRefState } from './hooks/useRefState';
export { useLazyState } from './hooks/useLazyState';
export { useFocusBlockLayout } from './hooks/useFocusBlockLayout';
export * from './hooks/useDataTransfer';
export * from './hooks/useFocusIdx';
export * from './hooks/useHoverIdx';

// Export UI components
export { IconFont } from './components/IconFont';
export { TextStyle } from './components/UI/TextStyle';
export { Stack } from './components/UI/Stack';
export { Tabs, TabPane } from './components/UI/Tabs';

// Export types and constants
export { ActiveTabKeys } from './components/Provider/BlocksProvider';
export * from './typings';
export type { StackProps } from './components/UI/Stack';
export type { PropsProviderProps } from './components/Provider/PropsProvider';
export { AvailableTools } from './components/Provider/PropsProvider';
export type { BlockAvatarWrapperProps } from './components/wrapper';
export type { BlockGroup, CollectedBlock } from './components/Provider/PropsProvider';
export * from './constants';

// Export utils (these are safe for both client and server)
export * from './utils/index';
