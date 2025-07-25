import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MainLayout from '@components/Layout/Layout';
import React from 'react';

const HeadlingListProduct = () => {
    const targetDate = '2025-07-27T00:00:00';
    return (
        <MainLayout>
            <CountdownTimer targetDate={targetDate} />
        </MainLayout>
    );
};

export default HeadlingListProduct;