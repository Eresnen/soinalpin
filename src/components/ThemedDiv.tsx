// src/ThemedDiv.tsx
import React from 'react';
import { useTheme as useMaterialUITheme } from '@mui/material/styles';

interface ThemedDivProps {
  children: React.ReactNode;
}

const ThemedDiv: React.FC<ThemedDivProps> = ({ children }) => {
  const materialTheme = useMaterialUITheme();

  return (
    <div style={{ background: materialTheme.palette.background.default, color: materialTheme.palette.text.primary,  minHeight: '100vh', padding: '20px', }} >
      {children}
    </div>
  );
};

export default ThemedDiv;