import React from 'react';
import styles from '../constants/style';
import { Navbar, Footer, AboutContent } from '../components/index.js';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Atlas Audio | About</title>
      </Head>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} max-w-[1280px]`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <AboutContent />
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
