import React from 'react';
import styles from './info.module.css'

const Info = () => {
    return (
        <>
        {/* 
        Divide this into a sub-component? 
        Container intro, a flex container with multiple headings 
        */}
            <div className={styles.containerIntro}>
                <div className={styles.conatinerIntroText}>
                    <h3>
                        Anubha is using Bare Anatomy's
                    </h3>
                    <h3>
                        products since 03.04.2020
                    </h3>
                    <div className={styles.containerInvitationText}>
                        <h3>
                            and has invited you to amp up your beauty game!
                        </h3>
                    </div>
                </div>
            </div>
            {/* Container discount and copy discount is a flex container*/}
            <div className={styles.containerDiscount}>
                <div className={styles.containerDiscountWrapper}>
                    <div className={styles.containerDiscountIntro}>
                        <div className={styles.discountText}>
                            <div>
                                Use code
                            </div>
                            <div className={styles.copyDiscount}>
                                <div className={styles.copyDiscountWrapper}>
                                    <span className={styles.copyDiscountCode}>ANUBHA08</span>
                                    <span className={styles.copyDiscountButton} onClick={() =>  navigator.clipboard.writeText('Text copied!')}>COPY </span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    on your first purchase and get
                                </div>
                            </div>
                        </div>
                        <div className={styles.discountOff}>
                            <div className={styles.discountOffWraper}></div>
                            <span className={styles.flatText}> FLAT</span>
                            <span className={styles.rupeeText}>₹250</span>
                            <span className={styles.flatText}> OFF </span>
                        </div>
                        <div className={styles.discountInfo}>
                            This will be auto applied if you follow the link below
                        </div>
                        <div className={styles.containerDiscountButton}>
                        <a href="#" class={styles.button}>start shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;