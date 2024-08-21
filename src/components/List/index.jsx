import { Box } from '@mui/material';
import propTypes from 'prop-types';
import ListCard from '../ListCard';
import { useContext } from 'react';
import { ProductsContext } from '../../store';

const ListContainer = ({ products }) => {
    const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);
    return (
        <>
            <Box height={'100%'} py={3} borderRadius={1}>
                <Box
                    height={'100%'}
                    px={2}
                    sx={{
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    {products.map(product => (
                        <ListCard
                            key={product.id}
                            selected={selectedProduct?.id === product.id}
                            clickHandler={() => {
                                setSelectedProduct(product);
                            }}
                        >
                            {product.title}
                        </ListCard>
                    ))}
                </Box>
            </Box>
        </>
    );
};

ListContainer.propTypes = {
    products: propTypes.array,
};

export default ListContainer;
