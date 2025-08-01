import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import React from 'react';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';

const Compare = () => {
    const {container} = styles;
    return (
        <div className={container}>
            <HeaderSideBar icon={<TfiReload style={{fontSize: '20px'}}/>} title={'COMPARE'}/>
            <ItemProduct />
        </div>
    );
};

export default Compare;