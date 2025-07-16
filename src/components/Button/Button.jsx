import React from 'react';
import styles from './styles.module.scss';

const Button = () => {
    return (
        <div>
            <button className={styles.btn}>M</button>
            <button className={styles.btn2}>S</button>
        </div>
    );
};

export default Button;