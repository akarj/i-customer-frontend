import SignInPage from './pages/signin';
import './App.css';
import ProductsPage from './pages/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './components/ProtectedRoute';
import NotFoundPage from './pages/NotFound';
import { storageEncryption } from './utils/encrypt';

function App() {
    storageEncryption();

    return (
        <>
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<ProductsPage />} path="/" exact />
                    </Route>
                    <Route element={<SignInPage />} path="/login" />
                    <Route element={<NotFoundPage />} path="*" />
                </Routes>
            </Router>
        </>
    );
}

export default App;
