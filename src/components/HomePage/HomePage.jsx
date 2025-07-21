import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import React from 'react';

const HomePage = () => {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
            </div>
        </div>
    );
};

export default HomePage;
