import React from 'react';
import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

const ProductItem = ({src, preSrc, name, price}) => {
    const { boxImg, showImgWhenHover, showFuncWhenHover, boxIcon,innerTitle, innerPrice } = styles;

    return (
        <div>
            <div className={boxImg}>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                    alt=''
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
                    alt=''
                    className={showImgWhenHover}
                />
                <div className={showFuncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={innerTitle}>10k yellow gold</div>
            <div className={innerPrice}>99.99</div>
        </div>
    );
};

export default ProductItem;
