import React from 'react';
import styles from './footer.module.css'
import productImage1 from '../Footer/product1.png';
import productImage2 from '../Footer/product2.png';
import productImage3 from '../Footer/product3.png';
import productImage4 from '../Footer/product4.png';

const Footer = () => {
    return (
        <>
            {/* A flex grid of items with flex-basis of 25% and flex wrap set to wrap */}
            <div className={styles.container}>
                <div className={styles.flexItem}>
                    <img src={productImage1} alt="product-1"></img>
                </div>
                <div className={styles.flexItem}>
                    <img src={productImage2} alt="product-2"></img>
                </div>
                <div className={styles.flexItem}>
                    <img src={productImage3} alt="product-3"></img>
                </div>
                <div className={styles.flexItem}>
                    <img src={productImage4} alt="product-4"></img>
                </div>
            </div>
            <footer>
                Made with ❤️ by Saurabh.
            </footer>
        </>
    );
}

export default Footer;