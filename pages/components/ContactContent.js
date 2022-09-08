import React from 'react';
import styles, { layout } from '../style';
import Image from 'next/future/image';
import ContactUsButton from './ContactUsButton';
import { footerLinks } from '../constants';

export default function ContactContent() {
  let socialMediaLinks = footerLinks[1].links;

  return (
    <section className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src="/assets/AtlasKeysPic.webp"
          alt="Guitar"
          height={1024}
          width={683}
          className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Contact Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Interested in bringing your media to life with bespoke composition?
          Feel free to contact us below for more information.
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
