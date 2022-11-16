import React from 'react';
import styles, { layout } from '../pages/constants/style';
import Image from 'next/image';
import AboutImage from '../public/assets/BarnSign.jpg';
import JulianHeadshot from '../public/assets/JulianHeadshot.jpeg';
import AlexHeadshot from '../public/assets/AlexHeadshot.jpeg';
import JakeHeadshot from '../public/assets/JakeHeadshot.jpeg';

export default function AboutContent() {
  return (
    <>
      <section className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse}`}>
          <Image
            src={AboutImage}
            alt="Picture of Atlas Audio"
            className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
          />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>About Us</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Atlas Audio is the brainchild of Julian, Alex & Jake, a creative hub
            for musicians to make music. Whether for their own creative outlet,
            or to augment visual or interactive media, it is the essence of
            creativity, and the birthplace of your soundtrack.
          </p>
        </div>
      </section>
      <section className={`flex md:flex-row flex-col-reverse`}>
        <div
          className={`flex-1 ${styles.flexCenter} flex-col sm:pt-12 text-center`}
        >
          <h2 className={`${styles.heading2} max-w-[600px] align-middle`}>
            Julian Kirk
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Creative Director
          </p>
        </div>

        <div className={`${layout.sectionImg} mb-7 pt-4`}>
          <div className="w-[70%] pt-9">
            <Image
              alt="Picture of Alex Adams"
              src={JulianHeadshot}
              className="rounded-[15px]"
              quality={50}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <section className={`flex md:flex-row flex-col-reverse`}>
        <div
          className={`flex-1 ${styles.flexCenter} flex-col sm:pt-12 text-center`}
        >
          <h2 className={`${styles.heading2} max-w-[600px] align-middle`}>
            Alex Adams
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Technical Director
          </p>
        </div>

        <div className={`${layout.sectionImg} mb-7 pt-4`}>
          <div className="w-[70%] pt-9">
            <Image
              alt="Picture of Julian Kirk"
              src={AlexHeadshot}
              className="rounded-[15px]"
              quality={50}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <section className={`flex md:flex-row flex-col-reverse`}>
        <div
          className={`flex-1 ${styles.flexCenter} flex-col sm:pt-12 text-center`}
        >
          <h2 className={`${styles.heading2} max-w-[600px] align-middle`}>
            Jake Aubrey
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Marketing Director
          </p>
        </div>

        <div className={`${layout.sectionImg} mb-7 pt-4`}>
          <div className="w-[70%] pt-9">
            <Image
              alt="Picture of Jake Aubrey"
              src={JakeHeadshot}
              className="rounded-[15px]"
              quality={50}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </>
  );
}
