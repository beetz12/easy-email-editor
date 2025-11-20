'use client';

import React, { useCallback, useMemo, useRef } from 'react';
import { useLocalStorage } from 'react-use';
import { debounce } from 'lodash';
import { useRefState } from 'easy-email-editor';

const defaultPresetColor: string[] = [
  '#000000',
  '#FFFFFF',
  '#9b9b9b',
  '#d0021b',
  '#4a90e2',
  '#7ed321',
  '#bd10e0',
  '#f8e71c',
];

const CURRENT_COLORS_KEY = 'CURRENT_COLORS_KEY';
const MAX_RECORD_SIZE = 20;

export const PresetColorsContext = React.createContext<{
  colors: string[];
  addCurrentColor: (color: string) => void;
}>({
  colors: [],
  addCurrentColor: () => {},
});

export const PresetColorsProvider: React.FC<{
  children: React.ReactNode | React.ReactElement;
}> = props => {
  const [currentColors, setCurrentColors] = useLocalStorage<string[]>(
    CURRENT_COLORS_KEY,
    defaultPresetColor,
  );
  const currentColorsRef = useRefState(currentColors);

  // Lazy initialize to avoid SSR issues
  const colorDivRef = useRef<HTMLDivElement | null>(null);
  const getColorDiv = () => {
    if (!colorDivRef.current && typeof document !== 'undefined') {
      colorDivRef.current = document.createElement('div');
    }
    return colorDivRef.current;
  };

  const addCurrentColor = useCallback(
    debounce((newColor: string) => {
      const colorDiv = getColorDiv();
      if (!colorDiv) return;

      colorDiv.style.color = '';
      colorDiv.style.color = newColor;
      if (colorDiv.style.color) {
        if (currentColorsRef.current!.includes(newColor)) return;
        const newColors = [...new Set([...currentColorsRef.current!, newColor])]
          .filter(Boolean)
          .slice(-MAX_RECORD_SIZE);

        setCurrentColors(newColors);
      }
    }, 500),
    [currentColorsRef, setCurrentColors],
  );

  const value = useMemo(() => {
    return {
      colors: currentColors!,
      addCurrentColor,
    };
  }, [addCurrentColor, currentColors]);

  return useMemo(() => {
    return (
      <PresetColorsContext.Provider value={value}>
        {props.children}
      </PresetColorsContext.Provider>
    );
  }, [props.children, value]);
};
