import React, { useState, useEffect } from 'react';

const formatNumber = number => String(number).padStart(2, '0');

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [targetDate]); // Chạy lại effect nếu targetDate thay đổi

    const timerComponents = Object.keys(timeLeft).map(interval => {
        return (
            <span key={interval}>
                {formatNumber(timeLeft[interval])} {interval}{' '}
            </span>
        );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Hết giờ!</span>}
        </div>
    );
};

export default CountdownTimer;