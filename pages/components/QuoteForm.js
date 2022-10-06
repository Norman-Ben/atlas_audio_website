import React from 'react';
import styles, { layout } from '../style';
import ContactUsButton from './ContactUsButton';
import Image from 'next/image';
import MixingDesk from '../../public/assets/AtlasMixingDeskPic.jpg';

export default function QuoteForm() {
  return (
    <section className={`md:${layout.section} ${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src={MixingDesk}
          alt="Mixing Desk"
          className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
        />
      </div>
      <form>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Health Home Truths</h2>
          <div className={`${styles.paragraph} max-w-[470px] mt-5`}></div>
        </div>
      </form>
    </section>
  );
}
