import React from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const SaleHomePage = () => {
    const { container, title, desc, boxBtn, boxImage, boxContent } = styles;
    return (
        <div className={container}>
            <div className={boxImage}>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div className={boxContent}>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={desc}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div className={boxImage}>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
};

export default SaleHomePage;
