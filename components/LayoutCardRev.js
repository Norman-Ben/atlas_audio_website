import { React, useEffect } from 'react';
import styles, { layout } from '../pages/constants/style';
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
    x: -100,
  },
};

export default function LayoutCardRev(props) {
  const animationControl = useAnimation();
  const [cardRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animationControl.start('visible');
    }
  }, [animationControl, inView]);

  return (
    <motion.section
      className={`${layout.section}`}
      ref={cardRef}
      animate={animationControl}
      initial="hidden"
      variants={cardAnimation}
    >
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
    </motion.section>
  );
}
