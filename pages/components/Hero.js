import React from 'react';
import styles from '../style.js';

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex lg:flex-row flex-col ${styles.paddingY} justify-center z-10`}
    >
      <div className={` ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}>
        <div
          className={`flex flex-row justify-between items-center w-full z-[5]`}
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[80px] leading-[50px]">
            Bespoke <span className="text-gradient">compositions</span> for
            media <br className="sm:block hidden" /> and professional{' '}
            <span className="text-gradient">audio services</span>.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
          Recording and Engineering - Mixing and Mastering - Bespoke Soundtracks
        </p>
      </div>
    </section>
  );
}
