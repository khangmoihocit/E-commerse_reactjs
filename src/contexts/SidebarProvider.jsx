import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import { getCart } from '@/apis/cartService';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);

    const handleGetListProducCart = (userId, type) => {
        if (userId && type === 'cart') {
            getCart(userId)
                .then(res => {
                    setListProductCart(res.data.data);
                })
                .catch(error => {
                    setListProductCart([]);
                });
        }
    };

    const values = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProducCart,
        listProductCart
    };

    return (
        <SideBarContext.Provider value={values}>
            {children}
        </SideBarContext.Provider>
    );
};
