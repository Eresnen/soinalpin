import React, { CSSProperties, ReactNode } from 'react';
import { useTheme as useMaterialUITheme } from '@mui/material/styles';

interface ThemedTextProps {
  children: ReactNode;  // Le contenu texte à afficher
  style?: CSSProperties;  // Prop optionnelle pour personnaliser le style
  variant?: 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline';  // Variantes typographiques
}

const ThemedText: React.FC<ThemedTextProps> = ({ children, style, variant = 'body1' }) => {
  const materialTheme = useMaterialUITheme();

  // Définition des styles par défaut basés sur le thème
  const defaultStyles: CSSProperties = {
    color: materialTheme.palette.text.primary,  // Couleur du texte selon le thème
    fontSize: '1rem',  // Taille de police par défaut
    lineHeight: 1.5,  // Hauteur de ligne par défaut
    fontFamily: materialTheme.typography.fontFamily,  // Police de caractère du thème
  };

  // Fusionner les styles par défaut avec les styles personnalisés passés en prop
  const combinedStyles = { ...defaultStyles, ...style };

  // Appliquer la variante typographique via les styles du thème
  const variantStyle = materialTheme.typography[variant];

  return (
    <div style={{ ...combinedStyles, ...variantStyle }}>
      {children}
    </div>
  );
};

export default ThemedText;