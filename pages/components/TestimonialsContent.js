import React from 'react';
import styles, { layout } from '../style';
import Image from 'next/future/image';

export default function AboutContent() {
  return (
    <section className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src="/assets/AtlasAudioAboutPic.jpeg"
          alt="Guitar"
          height={1024}
          width={683}
          className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About Atlas Audio</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Atlas Audio, formed by creative duo Alex Adams and Julian Kirk, is a
          music for media company where bespoke soundtracks are born and
          uniquely crafted to suit their purpose. Since childhood, Alex and
          Julian have been composing both in bands and technology. Inspired by
          their love of Games, TV & Film, and a special energy of passion and
          oneupmanship, Atlas Audio is the culmination of a combined love of
          crafting sound worlds to a brief.
        </p>
      </div>
    </section>
  );
}
