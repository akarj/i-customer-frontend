import { useState } from 'react';
import PropTypes from 'prop-types';
import { ProductsContext } from '..';

const ProductsProvider = ({ children }) => {
    const [productsList, setProductsList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <ProductsContext.Provider value={{ productsList, setProductsList, selectedProduct, setSelectedProduct }}>{children}</ProductsContext.Provider>
    );
};

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductsProvider;
