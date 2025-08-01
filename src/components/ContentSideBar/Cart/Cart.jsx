import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import React from 'react';
import { PiShoppingCart } from 'react-icons/pi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const Cart = () => {
    const { container, boxButton, boxTotal } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                    title={'CART'}
                />
                <ItemProduct />
            </div>
            <div style={{width: '100%'}}>
                <div className={boxTotal}>
                    <p>SUBTOTAL: </p>
                    <p>$99</p>
                </div>
                <div className={boxButton}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
};

export default Cart;
