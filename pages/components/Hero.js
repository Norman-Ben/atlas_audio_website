import React from 'react';
import styles from '../style.js';
import ContactUs from './ContactUs.js';
import Image from 'next/future/image';

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex lg:flex-row flex-col-reverse ${styles.paddingY}`}
    >
      {/* Hero Picture Container */}
      <div className={`${styles.flexCenter} flex-wrap lg:my-0 my-10`}>
        <Image
          src="/assets/Hero-Picture1.jpeg"
          width={1024}
          height={683}
          alt="Sound engineer working on a mixing desk"
          className="xl:w-[70%] lg:w-[55%] w-[80%] z-[5] top-6 rounded-[30px] mb-2"
        />
        <Image
          src="/assets/Hero-Picture2.jpeg"
          width={1024}
          height={683}
          alt="Test"
          className="xl:w-[70%] lg:w-[55%] w-[80%] z-[5] rounded-[30px] mt-2"
        />
        {/* Gradients */}

        <div className="absolute z-[0] w-[45%] h-[55%] top-0 left-0 white__gradient" />
        <div className="absolute z-[0] w-[40%] h-[50%] left-0 bottom-0 blue__gradient" />
        <div className="absolute z-[0] w-[20%] h-[20%] left-0 bottom-10 purple__gradient" />
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}
      >
        <div
          className={`flex flex-row justify-between items-center w-full z-[5]`}
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[85px] leading-[60px]">
            Bespoke <span className="text-gradient">compositions</span> for
            media <br className="sm:block hidden" /> and professional{' '}
            <span className="text-gradient">audio services</span>.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <ContactUs /> <-- ADD LATER?? */}
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
          Custom Soundtracks - Podcast themes - Audiobook themes - Video Game
          OSTs - Mixing & Mastering - Studio Engineering
        </p>
      </div>
    </section>
  );
}
