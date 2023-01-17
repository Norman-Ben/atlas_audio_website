import styles from '../constants/style';
import { Navbar, WhatWeDo, Footer, Hero } from '../components/index';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Atlas Audio | Home</title>
      </Head>
      <div className="w-full overflow-hidden bg-primary">
        <div className="blue__gradient absolute z-[0] w-[70%] h-[55%] top-0 left-0" />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} xl:max-w-[1280px] w-full`}>
            <Navbar />
          </div>
        </div>

        <div className={` ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} xl:max-w-[1280px] w-full`}>
            <Hero />
          </div>
        </div>

        <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} xl:max-w-[1280px] w-full`}>
            <WhatWeDo />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
