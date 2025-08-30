import React from 'react';
import styles from '../../styles.module.scss';
import Steper from '@/pages/Cart/components/steps/Steper';

const Steps = () => {
    const { containerSteps, steps, line , textNotice} = styles;

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
                        <Steper number={item.number} content={item.content} />
                        {index !== dataSteps.length - 1 && (
                            <div className={line}></div>
                        )}
                    </>
                ))}
            </div>

            <div className={textNotice}></div>
        </div>
    );
};

export default Steps;
