import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';
import Contents from '@/pages/Cart/components/contents/Contents';
import Steps from '@/pages/Cart/components/steps/Steps';
import styles from './styles.module.scss';

const Cart = () => {
    const {container} = styles;
    return (
        <>
            <Header />
            <div className={container}>
                <Steps />
                <Contents />
            </div>
            <Footer />
        </>
    );
};

export default Cart;
