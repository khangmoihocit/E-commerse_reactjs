import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import React, { useContext, useEffect } from 'react';
import { PiShoppingCart } from 'react-icons/pi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SidebarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

const Cart = () => {
    const {
        container,
        boxButton,
        boxTotal,
        productList,
        containerListProductCart,
        overLoading
    } = styles;

    const { listProductCart, isLoading } = useContext(SideBarContext);

    return (
        <div className={container}>
            <div className={productList}>
                <HeaderSideBar
                    icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                    title={'CART'}
                />
                <div className={containerListProductCart}>
                    {listProductCart.map((item, index) => {
                        return (
                            <ItemProduct
                                src={item.images[0]}
                                nameProduct={item.name}
                                priceProduct={item.price}
                                skuProduct={item.sku}
                                sizeProduct={item.size}
                                quantity={item.quantity}
                                key={index}
                                productId={item.productId}
                                userId={item.userId}
                            />
                        );
                    })}
                </div>
            </div>
            <div style={{ width: '100%' }}>
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
