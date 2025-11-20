'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { I18nManager, t } from 'easy-email-core';

export const LanguageProvider: React.FC<{
  children?: React.ReactNode;
  locale?: Record<string, string>;
}> = props => {
  const [count, setCount] = useState(0);

  I18nManager.setLocaleData(props.locale || {});

  // Set window.t in useEffect to avoid SSR issues
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).t = t;
    }
  }, []);

  useEffect(() => {
    setCount(c => c + 1);
  }, [props.locale]);

  return useMemo(() => {
    return <React.Fragment key={count}>{props.children}</React.Fragment>;
  }, [count, props.children]);
};
