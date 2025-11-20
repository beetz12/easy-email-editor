'use client';

import { useMemo } from 'react';
import { EmailEditorProvider } from 'easy-email-editor';
import { ExtensionProvider, StandardLayout } from 'easy-email-extensions';
import { BlockManager } from 'easy-email-core';
import '@arco-design/web-react/dist/css/arco.css';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';

// Import styles
import 'easy-email-extensions';

const initialData = BlockManager.getBlockByType('Page')!.create({});

export default function EditorPage() {
  const onSubmit = async (values: any) => {
    console.log('Submitted values:', values);
  };

  return (
    <div style={{ height: '100vh' }}>
      <EmailEditorProvider
        data={initialData}
        height='100vh'
        onSubmit={onSubmit}
        autoComplete
        dashed={false}
      >
        {({ values }) => {
          return (
            <ExtensionProvider>
              <StandardLayout
                compact={false}
                showSourceCode={true}
              />
            </ExtensionProvider>
          );
        }}
      </EmailEditorProvider>
    </div>
  );
}
