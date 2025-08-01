import React, { useContext, useEffect, useState } from 'react';
import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import Menu from '@components/Header/Menu/Menu';
import { dataBoxIcon, dataMenu } from '@components/Header/constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.webp';
import heartIcon from '@icons/svgs/heartIcon.svg';
import { CiHeart } from 'react-icons/ci';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import { TfiReload } from 'react-icons/tfi';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SidebarProvider';

const Header = () => {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { isOpen, setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = type => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map(item => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map(item => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map(item => {
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <CiHeart
                            style={{ fontSize: '27px' }}
                            onClick={() => handleOpenSideBar('wishList')}
                        />
                        <PiShoppingCart
                            style={{ fontSize: '25px' }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
