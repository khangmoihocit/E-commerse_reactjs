import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import React from 'react';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

const HeadlingListProduct = () => {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadlingListProduct;
