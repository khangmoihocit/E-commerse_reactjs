import React from 'react';
import styles from './styles.module.scss';

const Button = ({content}) => {
    const {btn} = styles;
    return (
        <div>
            <button className={btn}>{content}</button>
        </div>
    );
};

export default Button;