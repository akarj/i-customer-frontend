import { createTheme } from '@mui/material/styles';
import '@fontsource/inter';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0056b3',
        },
        secondary: {
            main: '#ff9800',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
        success: {
            main: '#4caf50',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h1: {
            fontSize: '2.2rem',
            fontWeight: 600,
            color: '#333333',
        },
        h2: {
            fontSize: '1.8rem',
            fontWeight: 500,
            color: '#333333',
        },
        body1: {
            fontSize: '1rem',
            color: '#666666',
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                    padding: '8px 16px',
                },
                containedPrimary: {
                    backgroundColor: '#0056b3',
                    '&:hover': {
                        backgroundColor: '#004099',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#ff9800',
                    '&:hover': {
                        backgroundColor: '#e68900',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0056b3',
                    color: '#ffffff',
                },
            },
        },
    },
});

export default theme;