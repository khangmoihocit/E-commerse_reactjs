import React from 'react';
import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

const ProductItem = ({src, preSrc, name, price}) => {
    const { container, boxImg, showImgWhenHover, showFuncWhenHover, boxIcon,innerTitle, innerPrice } = styles;

    return (
        <div className={container}>
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    src={preSrc}
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
            <div className={innerTitle}>{name}</div>
            <div className={innerPrice}>${price}</div>
        </div>
    );
};

export default ProductItem;
