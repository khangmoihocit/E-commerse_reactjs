import React from 'react';
import styles from '../../styles.module.scss';
import Steper from '@/pages/Cart/components/steps/Steper';

const Steps = () => {
    const { containerSteps, steps, line, textNotice } = styles;

    const dataSteps = [
        { number: 1, content: 'Shopping cart' },
        { number: 2, content: 'Checkout' },
        { number: 3, content: 'Order status' }
    ];

    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((item, index) => (
                    <>
                        <Steper
                            number={item.number}
                            content={item.content}
                            key={index}
                            isDisabled={index !== 0}
                        />
                        {index !== dataSteps.length - 1 && (
                            <div className={line}></div>
                        )}
                    </>
                ))}
            </div>

            <div className={textNotice}>You are out of time! Checkout now to avoid losing your order!</div>
        </div>
    );
};

export default Steps;
