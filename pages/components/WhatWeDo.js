import React from 'react';
import styles, { layout } from '../style';
import Image from 'next/future/image';
import PricingSlider from './PricingSlider';

export default function WhatWeDo() {
  return (
    <section>
      <section className={layout.section}>
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

        <div className={`${layout.sectionImg}`}>
          <Image
            alt="Mixing Desk"
            src="/assets/AtlasGuitarPic.jpg"
            height={1080}
            width={1080}
            className="md:w-[70%] w-[65%] rounded-[15px]"
          />
        </div>
      </section>
      <section className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse}`}>
          <Image
            src="/assets/AtlasKeysPic.jpg"
            alt="Guitar"
            height={640}
            width={640}
            className="md:w-[70%] w-[65%] rounded-[15px] relative z-[5]"
          />

          {/* gradients */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[70%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[70%] -left-1/2 bottom-0 rounded-full purple__gradient" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>State of the art Studio</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our studio, located in bath, is equipped with all the hardware
            required to make your project execptional. From recording and
            editing to mixing and mastering.
          </p>
        </div>
      </section>
      <section className={layout.section}>
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

        <div className={`${layout.sectionImg}`}>
          <Image
            alt="Mixing Desk"
            src="/assets/AtlasMixingDeskPic.jpg"
            height={1080}
            width={1080}
            className="md:w-[70%] w-[65%] rounded-[15px]"
          />
        </div>
      </section>
    </section>
  );
}
