import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import React, { useEffect, useState } from 'react';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadlingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import getProducts from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';

const HomePage = () => {
    const { container } = styles;
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            setListProducts(data.contents);
        });
    }, []);


    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProduct data={listProducts.slice(0, 2)}/>
                <PopularProduct data={listProducts.slice(2, listProducts.length)} />
                <SaleHomePage />
            </div>
        </div>
    );
};

export default HomePage;
