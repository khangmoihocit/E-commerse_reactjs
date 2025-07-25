import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import React from 'react';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

const HeadlingListProduct = () => {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div><ProductItem /></div>
                    <div><ProductItem /></div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadlingListProduct;
