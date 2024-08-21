import { useContext } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProductDescription from '../../components/ProductDescription';
import ProductListContainer from '../../components/ProductListContainer';
import { ProductsContext } from '../../store';

const ProductsPage = () => {
    const { selectedProduct } = useContext(ProductsContext);
    console.log('selectedProduct', selectedProduct);

    return (
        <>
            <Container sx={{ height: '80dvh', display: 'flex', flexDirection: 'column', textAlign: 'center' }} component="section">
                <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }} pt={4}>
                    iCustomer
                </Typography>
                <Box sx={{ height: 'min(80dvh, 100%)', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ProductListContainer />
                    <Box sx={{ borderRight: '1px solid black', height: '90%' }}></Box>
                    <Box sx={{ flex: 1.5 }} height={'100%'}>
                        <ProductDescription product={selectedProduct} />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default ProductsPage;
