import React, { useState, useEffect } from 'react';

// Chuyển hàm helper ra ngoài vì nó không phụ thuộc vào component
const formatNumber = number => String(number).padStart(2, '0');

const CountdownTimer = ({ targetDate }) => {
    // 1. Di chuyển hàm tính toán vào trong để nó có thể truy cập `targetDate`
    //    nhưng không cần định nghĩa lại nếu không cần thiết (useCallback có thể dùng ở đây nhưng không bắt buộc)
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

    // 2. Dùng lazy initial state để hàm chỉ chạy 1 lần lúc khởi tạo
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

    // 3. Dùng useEffect với dependency array và setInterval
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Hàm dọn dẹp
        return () => clearInterval(intervalId);
    }, [targetDate]); // Chạy lại effect nếu targetDate thay đổi

    // 4. Dùng .map() để render và xử lý trường hợp hết giờ
    const timerComponents = Object.keys(timeLeft).map(interval => {
        return (
            <span key={interval}>
                {formatNumber(timeLeft[interval])} {interval}{' '}
            </span>
        );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Hết giờ! 🥳</span>}
        </div>
    );
};

export default CountdownTimer;