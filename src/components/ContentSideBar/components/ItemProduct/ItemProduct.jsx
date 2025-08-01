import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';
import { SideBarContext } from '@/contexts/SidebarProvider';

const ItemProduct = () => {
    const { container, boxContent, price, title, boxClose, size } = styles;
    const { type } = useContext(SideBarContext);
    const isShowSize = type === 'cart' ? true : false;

    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                alt=''
            />
            <div className={boxClose}>
                <IoMdClose style={{ fontSize: '20px', color: '#c1c1c1' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>
                    title of productcccccccccccccccccccccccc
                </div>
                {isShowSize && <div className={size}>Size: M</div>}
                <div className={price}>$222</div>
                {isShowSize && <div className={price}>SKU: 12345</div>}
            </div>
        </div>
    );
};

export default ItemProduct;
