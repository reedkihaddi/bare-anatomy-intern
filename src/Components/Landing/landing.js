import React from 'react';
import styles from './landing.module.css'
import productImage from '../Landing/brand.PNG';

const Landing = () => {
    return (
        <>
        {/* Flex container */}
            <div className={styles.container}>
                <div className={styles.containerIntroText}>
                    <h1>
                        Hi friend,
                    </h1>
                    <h1>
                        Time to upgrade your beauty routine!
                    </h1>
                </div>
                <div className={styles.containerImage}>
                    <img src={productImage} alt="products"></img>
                </div>
            </div>
        </>
    );
}

export default Landing;