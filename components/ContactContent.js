import React from 'react';
import styles, { layout } from '../constants/style';
import Image from 'next/image';
import ContactUsButton from './ContactUsButton';
import { footerLinks } from '../constants';
import AboutPic from '../public/assets/AtlasGuitarPic.jpg';

export default function ContactContent() {
  let socialMediaLinks = footerLinks[1].links;

  return (
    <section className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src={AboutPic}
          alt="Keybaord player"
          className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Contact Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Need a soundtrack? Let&apos;s get started.
        </p>

        <ContactUsButton
          styles={'mt-5'}
          text="Email Us"
          link="mailto:contact@atlas-audio.co.uk"
        />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          contact@atlas-audio.co.uk
        </p>
        <ul className="flex flex-row gap-7 my-4">
          {socialMediaLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.id}>
                  <Image
                    alt="Social Media Icon"
                    src={link.img}
                    width={30}
                    height={30}
                    className="svg-filter m-auto"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
