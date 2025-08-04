import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';

const OurShop = () => {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handleBackPreviourPage = () => {
        navigate(-1);
    };
    return (
        <>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home {'>'} <span className={specialText}>Shop</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={handleBackPreviourPage}
                        >
                            {'<'} Return to previous page
                        </div>
                    </div>
                </div>

                <Banner />
            </MainLayout>
        </>
    );
};

export default OurShop;
