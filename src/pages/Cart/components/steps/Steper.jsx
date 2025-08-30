import React from 'react';
import styles from '../../styles.module.scss';

const Steper = ({number, content}) => {
    const { stepper, numberStep, textStep } = styles;
    return (
        <div className={stepper}>
            <div className={numberStep}>{number}</div>
            <div className={textStep}>{content}</div>
        </div>
    );
};

export default Steper;
