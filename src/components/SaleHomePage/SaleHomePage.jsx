import React from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const SaleHomePage = () => {
    const {container} = styles;
    return (
        <div className={container}>
            <div>
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
            </div>
            <div>
                <h2>Sale Of The Year</h2>
                <p>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
                <Button content={'Read more'} isPrimary={false}/>
            </div>
            <div><img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" /></div>
        </div>
    );
};

export default SaleHomePage;