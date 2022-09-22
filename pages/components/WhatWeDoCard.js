import { React, useEffect } from 'react';
import styles, { layout } from '../style';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};

export default function WhatWeDoCard(props) {
  const animationControl = useAnimation();
  const [cardRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animationControl.start('visible');
    }
  }, [animationControl, inView]);

  return (
    <motion.section
      className={`md:${layout.section} ${layout.sectionReverse}`}
      ref={cardRef}
      animate={animationControl}
      initial="hidden"
      variants={cardAnimation}
    >
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
    </motion.section>
  );
}
