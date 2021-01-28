import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <>
        {/* Only visible on large screens! */}
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <p>20% cashback on all orders</p>
                </div>
            </div>
        </>
    );
}

export default Header;