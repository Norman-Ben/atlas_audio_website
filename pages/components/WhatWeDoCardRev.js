import React from 'react';
import styles, { layout } from '../style';
import Image from 'next/image';

export default function WhatWeDoCardRev(props) {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionImgReverse} mb-7`}>
        <div className="w-[90%]">
          <Image
            src={props.picture}
            alt={props.alt}
            className="rounded-[15px] relative z-[5]"
            quality={50}
          />
        </div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{props.headingText}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {props.pText}
        </p>
      </div>
    </section>
  );
}
