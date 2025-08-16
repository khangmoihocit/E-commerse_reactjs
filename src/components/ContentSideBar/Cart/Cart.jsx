import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import React, { useContext } from 'react';
import { PiShoppingCart } from 'react-icons/pi';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SidebarProvider';

const Cart = () => {
    const { container, boxButton, boxTotal, productList  } = styles;

    const { listProductCart } = useContext(SideBarContext);
    
    return (
        <div className={container}>
            <div className={productList }>
                <HeaderSideBar
                    icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                    title={'CART'}
                />
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
                        />
                    );
                })}
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
