import React from 'react';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';

const PaymentSummary = ({ cartItems = [] }) => {
    const {
        summaryContainer,
        summaryTitle,
        summaryRow,
        summaryLabel,
        summaryValue,
        totalRow,
        checkoutBtn,
        continueShoppingBtn,
        paymentSecurity,
        paymentIcons,
        securityText,
        innerImage
    } = styles;

    const imgPaySafe = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const total = subtotal; // No shipping in this design

    return (
        <div className={summaryContainer}>
            <h3 className={summaryTitle}>CART TOTALS</h3>

            <div className={summaryRow}>
                <span className={summaryLabel}>Subtotal</span>
                <span className={summaryValue}>${subtotal.toFixed(2)}</span>
            </div>

            <div className={`${summaryRow} ${totalRow}`}>
                <span className={summaryLabel}>TOTAL</span>
                <span className={summaryValue}>${total.toFixed(2)}</span>
            </div>

            <div className={checkoutBtn}>
                <Button content={'PROCEED TO CHECKOUT'} />
            </div>

            <div className={continueShoppingBtn}>
                <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
            </div>

            <div className={paymentSecurity}>
                <div className={securityText}>
                    <span>GUARANTEED</span>{' '}
                    <span style={{ color: '#28a745', fontWeight: '400' }}>
                        SAFE
                    </span>{' '}
                    <span>CHECKOUT</span>
                </div>

                <div className={paymentIcons}>
                    {imgPaySafe.map((item, index) => (
                        <span className={innerImage} key={index}>
                            <img src={item} alt='' />
                        </span>
                    ))}
                </div>

                <p className={securityText}>Your Payment is 100% Secure</p>
            </div>
        </div>
    );
};

export default PaymentSummary;
