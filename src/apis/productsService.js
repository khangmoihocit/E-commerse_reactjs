import axiosClient from '@/apis/axiosClient';

const getProducts = async query => {
    const { sortType, page, limit } = query;

    const queryLimit = limit === 'all' ? '' : `limit=${limit}`;

    const result = await axiosClient.get(
        `/product?sortType=${sortType}&page=${page}&${queryLimit}`
    );
    return result.data;
};

export default getProducts;
