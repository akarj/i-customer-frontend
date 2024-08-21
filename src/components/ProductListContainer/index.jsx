import propTypes from 'prop-types';
import ListContainer from '../List';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useEffect, useState } from 'react';
// import useDebouncer from '../../hooks/useDebouncer';
import { getProducts } from '../../services/products.service';
import { ProductsContext } from '../../store';
import useDebounce from '../../hooks/useDebouncer';

function ProductListContainer() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    // const debouncedSearch = useDebouncer(search, 500);
    const debouncedSearch = useDebounce(search, 500);
    const { setSelectedProduct } = useContext(ProductsContext);

    useEffect(() => {
        async function getProductsList() {
            try {
                setSelectedProduct(null);
                const res = await getProducts(50, 1, debouncedSearch);
                setProducts(res);
            } catch (error) {
                if (error.response.status === 403) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                }
            }
        }
        getProductsList();
    }, [debouncedSearch, setSelectedProduct]);

    useEffect(() => {
        async function getProductsList() {
            try {
                setSelectedProduct(null);
                console.log('de', debouncedSearch);

                const res = await getProducts(50, 1, debouncedSearch);
                setProducts(res);
            } catch (error) {
                if (error.response.status === 403) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                }
                console.log('error', error);
            }
        }
        getProductsList();
    }, []);

    return (
        <Box height={'100%'} sx={{ flex: 1 }} mr={2}>
            <Box sx={{ fontWeight: 700, marginBottom: '1rem' }} px={2}>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-search" color="secondary">
                        Search products
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-search"
                        type={'text'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="search" edge="end">
                                    <SearchIcon color="secondary" />
                                </IconButton>
                            </InputAdornment>
                        }
                        color="secondary"
                        label="Search products"
                        placeholder="Search products"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        sx={{
                            color: '#ff9800',
                        }}
                    />
                </FormControl>
            </Box>
            <ListContainer products={products} />
        </Box>
    );
}

ProductListContainer.propTypes = {
    search: propTypes.string,
    setSearch: propTypes.func,
    products: propTypes.array,
};

export default ProductListContainer;
