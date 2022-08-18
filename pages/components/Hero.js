import React from 'react';
import styles from '../style.js';
import ContactUs from './ContactUs.js';
import Image from 'next/future/image';

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}
      >
        <div className={`flex flex-row justify-between items-center w-full`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Bespoke <span className="text-gradient">compositions</span> for
            media <br className="sm:block hidden" /> and professional{' '}
            <span className="text-gradient">audio services</span>.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <ContactUs /> */}
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Custom Soundtracks - Podcast themes - Audiobook themes - Video Game
          OSTs - Mixing & Mastering - Studio Engineering
        </p>
      </div>
      <div>
        <Image
          src="/assets/Hero-Picture1.jpeg"
          width={1024}
          height={683}
          alt="Sound engineer working on a mixing desk"
          className="w-[80%] relative z-[5] top-6 rounded-xl mb-12"
        />
        <Image
          src="/assets/Hero-Picture2.jpeg"
          width={1024}
          height={683}
          alt="Test"
          className="w-[80%] relative z-[5] rounded-xl mt-6"
        />
      </div>
    </section>
  );
}
