import React from 'react';
import styles from './styles.module.scss';
import { BsTrash3 } from "react-icons/bs";
import Button from '@/components/Button/Button';

const ProductTable = ({ cartItems = [], onUpdateQuantity, onRemoveItem }) => {
    const { 
        tableContainer, 
        table, 
        tableHeader, 
        tableRow, 
        productCell, 
        productImage, 
        productInfo, 
        productName, 
        productSize,
        priceCell,
        skuCell,
        quantityCell,
        quantitySelect,
        subtotalCell,
        deleteBtn,
        couponSection,
        couponInput,
        couponBtn,
        clearCartBtn
    } = styles;

    return (
        <div className={tableContainer}>
            <table className={table}>
                <thead>
                    <tr className={tableHeader}>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index} className={tableRow}>
                            <td className={productCell}>
                                <div className={productInfo}>
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className={productImage}
                                    />
                                    <div>
                                        <div className={productName}>{item.name}</div>
                                        <div className={productSize}>Size: {item.size}</div>
                                    </div>
                                    <button 
                                        className={deleteBtn}
                                        onClick={() => onRemoveItem(item.id)}
                                    >
                                        <BsTrash3 />
                                    </button>
                                </div>
                            </td>
                            <td className={priceCell}>${item.price.toFixed(2)}</td>
                            <td className={skuCell}>{item.sku}</td>
                            <td className={quantityCell}>
                                <select 
                                    className={quantitySelect}
                                    value={item.quantity}
                                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                                >
                                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </td>
                            <td className={subtotalCell}>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div className={couponSection}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Coupon code" 
                        className={couponInput}
                    />
                    <div className={couponBtn}>
                        <Button content={'OK'} isPrimary={false} />
                    </div>
                </div>
                <div className={clearCartBtn} >
                    <Button isPrimary={false} style={{fontSize: '12px', padding:'0 30px'}} content={'CLEAR SHOPPING CART'}/>
                </div>
            </div>
        </div>
    );
};

export default ProductTable;
