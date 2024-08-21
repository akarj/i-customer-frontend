import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import ProductsProvider from './store/Product/Product.context';
import AuthProvider from './store/User/User.context';
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleOAuthProvider clientId={import.meta.env.VITE_API_GOOGLE_CLIENT_ID || "136240760219-ecl17tulnf3gj1eoiob40k406bgkui55.apps.googleusercontent.com"}>
        <AuthProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
