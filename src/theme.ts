// theme.ts
import { createTheme } from '@mui/material/styles';

// Étendre le type de palette pour inclure nos champs personnalisés
declare module '@mui/material/styles/createPalette' {
    interface Palette {
        sections?: {
            background1?: string;
            background2?: string;
            background3?: string;
            background4?: string;
            background5?: string;
        };
        cards: {
            card1: string;
            text1: string;
        };
    }
    interface PaletteOptions {
        sections?: {
            background1?: string;
            background2?: string;
            background3?: string;
            background4?: string;
            background5?: string;
        };
        cards?: {
            card1?: string;
            text1?: string;
        };
    }
}

// Créer les thèmes avec vos champs personnalisés
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#14c58a',
        },
        background: {
            default: '#cccccc',
        },
        sections: {
            background1: 'rgba(242, 250, 247, 1)',
            background2: 'rgba(232, 252, 255, 1)',
            background3: 'rgba(217, 255, 241, 1)',
            background4: 'rgba(212, 227, 255, 1)',
            background5: 'rgba(204, 255, 236, 1)',
        },                          
        cards: {
            card1: 'rgba(245, 245, 245, 1)',
            text1: 'rgba(33, 33, 33, 1)',
        },        
        text: {
            primary: '#050505',
            secondary: '#3b3a3a',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#14c58a',
        },
        background: {
            default: '#121212',
        },
        sections: {
            background1: 'rgba(15, 32, 29, 1)', 
            background2: 'rgba(12, 34, 38, 1)', 
            background3: 'rgba(10, 40, 31, 1)', 
            background4: 'rgba(9, 26, 40, 1)', 
            background5: 'rgba(8, 30, 27, 1)', 
        },               
        cards: {
            card1: 'rgba(245, 245, 245, 1)',
            text1: 'rgba(33, 33, 33, 1)',
        },
        text: {
            primary: '#f5f0f0',
            secondary: '#bfbdbd',
        },
    },
});
