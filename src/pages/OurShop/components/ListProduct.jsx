import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import { OurShopConText } from '@/contexts/OurShopProvider';
import styles from '../styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
import Button from '@components/Button/Button';

const ListProduct = () => {
    const { containerProduct } = styles;
    const { products, isShowGrid, isLoading } = useContext(OurShopConText);

    return (
        <>
            <MainLayout>
                {isLoading ? (
                    <div>Loading ... ?</div>
                ) : (
                    <>
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
                                        isShowGrid={isShowGrid}
                                    />
                                );
                            })}
                        </div>
                        <div style={{ width: '180px', margin: '50px auto' }}>
                            <Button content={'LOAD MORE PRODUCT'} />
                        </div>
                    </>
                )}
            </MainLayout>
        </>
    );
};

export default ListProduct;
