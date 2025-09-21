import React, { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SidebarProvider';
import { StoreContext } from '@/contexts/StoreProvider';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Menu = ({ content, href }) => {
    const { menu, subMenu } = styles;
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo, setUserInfo } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }

        if (content === 'Our Shop') {
            navigate('/shop');
        }
    };

    const handleRenderText = content => {
        if (content === 'Sign in' && userInfo) {
            return `Hello: ${userInfo?.username}`;
        } else {
            return content;
        }
    };

    const handleHover = () => {
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    const handleLogOut = () => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('userId');

        setIsShowSubMenu(false);
        setUserInfo(null);
        window.location.reload();
    };

    return (
        <div
            className={menu}
            onClick={handleClickShowLogin}
            onMouseEnter={handleHover}
        >
            {handleRenderText(content)}
            {isShowSubMenu && (
                <div
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
};

export default Menu;
