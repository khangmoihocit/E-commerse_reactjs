import React from 'react';
import styles from './styles.module.scss';
import { CiHeart } from 'react-icons/ci';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
const WishList = () => {
    const { container } = styles;

    return (
        <div className={container}>
            <HeaderSideBar
                icon={<CiHeart style={{ fontSize: '30px' }} />}
                title={'WISHLIST'}
            />
            <ItemProduct />
        </div>
    );
};

export default WishList;
