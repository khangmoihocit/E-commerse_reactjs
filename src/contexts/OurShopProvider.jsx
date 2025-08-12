import { createContext, useContext, useEffect, useState } from 'react';
import getProducts from '@/apis/productsService';
import { ToastContext } from '@/contexts/ToastProvider';

export const OurShopConText = createContext();

export const OurShopProvider = ({ children }) => {
    const sortOptions = [
        { label: 'Default sorting', value: '0' },
        { label: 'Sort by popularity ', value: '1' },
        { label: 'Sort by average rating ', value: '2' },
        { label: 'Sort by latest ', value: '3' },
        { label: 'Sort by price: low to high ', value: '4' },
        { label: 'Sort by price: high to low ', value: '5' }
    ];

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'all' }
    ];

    const { toast } = useContext(ToastContext);
    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const values = {
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        setIsShowGrid,
        products,
        isShowGrid,
        isLoading
    };

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        };
        setIsLoading(true);
        getProducts(query)
            .then(response => {
                setProducts(response.contents);
                setIsLoading(false);
            })
            .catch(error => {
                toast.error(error);
                setIsLoading(false);
            });
    }, [sortId, showId]);

    return (
        <OurShopConText.Provider value={values}>
            {children}
        </OurShopConText.Provider>
    );
};
