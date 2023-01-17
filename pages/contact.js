import React from 'react';
import styles from '../constants/style';
import { Navbar, Footer, ContactContent } from '../components/index.js';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Atlas Audio | Contact</title>
      </Head>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <ContactContent />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
