import React, { useContext } from 'react';
import styles from './styles.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { OurShopConText } from '@/contexts/OurShopProvider';

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
        boxBtn,
        boxContent,
        leftBtn,
        largImg
    } = styles;

    const { isShowGrid } = useContext(OurShopConText);

    return (
        <div
            className={isShowGrid ? '' : container}
            style={{ marginTop: '20px' }}
        >
            <div className={classNames(boxImg, {[largImg] : !isShowGrid})}>
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
            <div className={isShowGrid ? '' : boxContent}>
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
                    <div
                        className={classNames(boxBtn, {
                            [leftBtn]: !isShowGrid
                        })}
                    >
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
