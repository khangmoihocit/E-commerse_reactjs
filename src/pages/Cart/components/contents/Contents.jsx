import React, { useState } from 'react';
import styles from '../../styles.module.scss';
import ProductTable from './ProductTable/ProductTable';
import PaymentSummary from './PaymentSummary/PaymentSummary';

const Contents = () => {
    const { containerContents } = styles;

    // Sample cart data - trong thực tế sẽ lấy từ context hoặc props
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Erat mattis gravida",
            size: "L",
            price: 200.00,
            sku: "2345",
            quantity: 7,
            image: "/src/assets/images/photoofman.webp"
        },
        {
            id: 2,
            name: "Est suspendisse nibh",
            size: "M",
            price: 290.20,
            sku: "16543",
            quantity: 1,
            image: "/src/assets/images/photoofman.webp"
        }
    ]);

    const handleUpdateQuantity = (itemId, newQuantity) => {
        setCartItems(items =>
            items.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (itemId) => {
        setCartItems(items => items.filter(item => item.id !== itemId));
    };

    return (
        <div className={containerContents}>
            <ProductTable 
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
            />
            <PaymentSummary cartItems={cartItems} />
        </div>
    );
};

export default Contents;
