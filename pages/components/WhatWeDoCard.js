import React from 'react';
import styles, { layout } from '../style';
import Image from 'next/image';

export default function WhatWeDoCard(props) {
  return (
    <section className={`md:${layout.section} ${layout.sectionReverse}`}>
      <div className={`${layout.sectionInfo} sm:pt-12`}>
        <h2 className={`${styles.heading2} max-w-[600px]`}>
          {props.headingText}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {props.pText}
        </p>
        {props.slider ? props.slider : null}
      </div>

      <div className={`${layout.sectionImg} mb-7 pt-4`}>
        <div className="w-[90%] pt-9">
          <Image
            alt={props.alt}
            src={props.picture}
            className="rounded-[15px]"
            quality={50}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
