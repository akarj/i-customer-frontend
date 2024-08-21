import { axiosInstance } from './Axios';

export const getProducts = async (limit = 50, page = 1, search = '') => {
    console.log({ limit, page, search });
    const params = {};
    if (limit) params.limit = limit;
    if (page) params.page = page;
    if (search) params.search = search;
    console.log('param', { params });
    const response = await axiosInstance.get('/products', {
        params: params,
    });
    return response.data.data;
};

export const getProduct = async id => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
};

export default {
    getProducts,
    getProduct,
};
