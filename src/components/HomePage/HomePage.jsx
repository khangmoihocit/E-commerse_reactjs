import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import React from 'react';
import Info from '@components/Info/Info';

const HomePage = () => {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
            </div>
        </div>
    );
};

export default HomePage;
