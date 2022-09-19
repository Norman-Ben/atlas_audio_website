import React from 'react';
import styles, { layout } from '../style';
import Image from 'next/image';
import PricingSlider from './PricingSlider';
import HeroPicture from '../../public/assets/HeroPicture.jpeg';
import GuitarPic from '../../public/assets/AtlasGuitarPic.jpg';
import MixingDeskPic from '../../public/assets/AtlasMixingDeskPic.jpg';

export default function WhatWeDo() {
  return (
    <section>
      <section className={`md:${layout.section} ${layout.sectionReverse}`}>
        <div className={`${layout.sectionInfo} sm:pt-12`}>
          <h2 className={`${styles.heading2} max-w-[600px]`}>
            A range of musical services <br className="md:block hidden" />{' '}
            tailored for your media.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Looking for a snappy soundtrack for your podcast? Composition for
            your RPG inspired game? Catchy background music for your
            advertisement? We can help bring your media to life. Fully produced
            within our professional studio, we’re able to provide exactly what
            your media needs, regardless of genre or style.
          </p>
        </div>

        <div className={`${layout.sectionImg} mb-7 pt-4`}>
          <div className="w-[90%] pt-9">
            <Image
              alt="Recording Studio"
              src={HeroPicture}
              className="rounded-[15px]"
              quality={50}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <section className={`${layout.section}`}>
        <div className={`${layout.sectionImgReverse} mb-7`}>
          <div className="w-[90%]">
            <Image
              src={GuitarPic}
              alt="Guitar"
              className="rounded-[15px] relative z-[5]"
              quality={50}
            />
          </div>
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>State of the art Studio</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our studio, located in bath, is equipped with all the audio hardware
            required to make your project come to life. From recording and
            engineering to editing, mixing and mastering.
          </p>
        </div>
      </section>
      <section className={layout.sectionReverse}>
        <div className={`${layout.sectionInfo} sm:pt-12`}>
          <h2 className={`${styles.heading2} max-w-[600px]`}>Pricing</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We guarantee a personable and professional service, containing open
            communication as well as a variety of pricing structures to suit
            your needs and budget. Please use the slider below for a quote based
            on total length of composition(s) required.
          </p>
          <PricingSlider />
        </div>

        <div className={`${layout.sectionImg} mb-7`}>
          <div className="w-[90%]">
            <Image
              alt="Mixing Desk"
              src={MixingDeskPic}
              className="rounded-[15px]"
              quality={50}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
