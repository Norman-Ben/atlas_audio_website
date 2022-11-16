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
    x: 100,
  },
};

export default function LayoutCard(props) {
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
        {props.button ? props.button : null}
      </div>

      <div className={`${layout.sectionImg} mb-7 pt-4`}>
        <div className="w-[90%] pt-9">
          {props.picture !== 'Marketing Video' ? (
            <Image
              alt={props.alt}
              src={props.picture}
              className="rounded-[15px]"
              quality={50}
              placeholder="blur"
            />
          ) : (
            <>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/766999477?h=2b5481d6f0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                  }}
                  title="Atlas Promo 1st Draft"
                ></iframe>
              </div>
              <script
                src="https://player.vimeo.com/api/player.js"
                async
              ></script>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}
