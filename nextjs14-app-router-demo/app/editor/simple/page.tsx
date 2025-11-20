'use client';

import { EmailEditorProvider, EmailEditor } from 'easy-email-editor';
import { BlockManager } from 'easy-email-core';
import 'easy-email-editor/lib/style.css';

const initialData = BlockManager.getBlockByType('Page')!.create({});

export default function SimpleEditorPage() {
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
        {({ values }) => <EmailEditor />}
      </EmailEditorProvider>
    </div>
  );
}
