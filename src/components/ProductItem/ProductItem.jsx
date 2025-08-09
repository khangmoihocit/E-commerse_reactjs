import React from 'react';
import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import classNames from 'classnames';
import Button from '@components/Button/Button';

const ProductItem = ({
    src,
    preSrc,
    name,
    price,
    details,
    isHomePage = true
}) => {
    const {
        container,
        boxImg,
        showImgWhenHover,
        showFuncWhenHover,
        boxIcon,
        innerTitle,
        innerPrice,
        boxSize,
        size,
        textCenter,
        boxBtn
    } = styles;

    console.log(details);

    return (
        <div className={container}>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img src={preSrc} alt='' className={showImgWhenHover} />
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
            {!isHomePage && (
                <div className={boxSize}>
                    {details.size.map((item, index) => {
                        return (
                            <div className={size} key={index}>
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            )}
            <div
                className={classNames(innerTitle, {
                    [textCenter]: !isHomePage
                })}
            >
                {name}
            </div>
            {!isHomePage && (
                <div
                    className={textCenter}
                    style={{ color: '#888', padding: '5px 0' }}
                >
                    Brand 01
                </div>
            )}
            <div
                className={classNames(innerPrice, {
                    [textCenter]: !isHomePage
                })}
                style={{
                    color: isHomePage ? '#333' : '#888'
                }}
            >
                ${price}
            </div>
            {!isHomePage && (
                <div className={boxBtn}>
                    <Button content={'ADD TO CART'} />
                </div>
            )}
        </div>
    );
};

export default ProductItem;
