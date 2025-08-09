import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import { OurShopConText } from '@/contexts/OurShopProvider';
import styles from '../styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

const ListProduct = () => {
    const { containerProduct } = styles;
    const { products, isShowGrid } = useContext(OurShopConText);

    console.log(isShowGrid)

    return (
        <>
            <MainLayout>
                <div className={isShowGrid ? containerProduct : ''}>
                    {products.map(item => {
                        return (
                            <ProductItem
                                key={item._id}
                                src={item.images[0]}
                                preSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                                details={item}
                                isHomePage={false}
                            />
                        );
                    })}
                </div>
            </MainLayout>
        </>
    );
};

export default ListProduct;
