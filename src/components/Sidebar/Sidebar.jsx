import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SidebarProvider';
import { AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';

const Sidebar = () => {
    const { container, overlay, sidebar, sliceSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleToggle}
            ></div>
            <div
                className={classNames(sidebar, {
                    [sliceSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <AiOutlineClose />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
