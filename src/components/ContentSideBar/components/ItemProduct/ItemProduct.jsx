import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';
import { SideBarContext } from '@/contexts/SidebarProvider';

const ItemProduct = ({src, nameProduct, priceProduct, skuProduct, sizeProduct, quantity}) => {
    const { container, boxContent, price, title, boxClose, size } = styles;
    const { type } = useContext(SideBarContext);
    const isShowSize = type === 'cart' ? true : false;

    return (
        <div className={container}>
            <img
                src={src}
                alt=''
            />
            <div className={boxClose}>
                <IoMdClose style={{ fontSize: '20px', color: '#c1c1c1' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>
                    {nameProduct}
                </div>
                {isShowSize && <div className={size}>Size: {sizeProduct}</div>}
                <div className={price}>{quantity} x ${priceProduct}</div>
                {isShowSize && <div className={price}>SKU: {skuProduct}</div>}
            </div>
        </div>
    );
};

export default ItemProduct;
