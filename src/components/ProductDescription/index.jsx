import { Box, Typography } from '@mui/material';
import propTypes from 'prop-types';
import ProductDetailRow from '../ProductDetailRow';
import { useId } from 'react';

const ProductDescription = ({ product }) => {
    const categoryId = useId();
    const recordCountId = useId();
    const fieldsId = useId();
    return (
        <>
            <Box
                height={'100%'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {product && product.id && (
                    <>
                        <Box
                            border="1px solid black"
                            px={5}
                            py={2}
                            width={'60%'}
                            sx={{
                                backgroundColor: '#ff980008',
                                borderRadius: '12px',
                                boxShadow: 'inset 2px 2px 6px rgba(255, 255, 255, 0.5),inset -2px -2px 6px rgba(0, 0, 0, 0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                transition: 'box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: 'inset 2px 2px 10px rgba(255, 255, 255, 0.6), inset -2px -2px 10px rgba(0, 0, 0, 0.2)',
                                },
                                color: '#333',
                            }}
                        >
                            <Typography variant="h5" pt={2} fontWeight={600}>
                                {product.title}{' '}
                            </Typography>
                            <ProductDetailRow
                                propertyName="Category"
                                propertyValue={product.data_category}
                                key={product.data_category + product.record_count + product.id + categoryId}
                            />
                            <ProductDetailRow
                                propertyName="Records"
                                propertyValue={product.record_count}
                                key={product.record_count + product.record_count + product.id + recordCountId}
                            />
                            <ProductDetailRow
                                propertyName="Fields"
                                propertyValue={product.fields.join(', ')}
                                key={product.data_category + product.record_count + product.id + fieldsId}
                            />
                        </Box>
                    </>
                )}
            </Box>
        </>
    );
};

ProductDescription.propTypes = {
    product: propTypes.object,
};

export default ProductDescription;
