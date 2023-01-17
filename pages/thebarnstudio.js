import React from 'react';
import styles from '../constants/style';
import { Navbar, Footer, BarnStudioContent } from '../components/index.js';
import Head from 'next/head';

export default function TheBarnStudio() {
  return (
    <>
      <Head>
        <title>Atlas Audio | The Barn Studio</title>
      </Head>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <BarnStudioContent />
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
