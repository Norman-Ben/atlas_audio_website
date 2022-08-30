import React from 'react';
import styles from '../style';
import Image from 'next/future/image';
import { footerLinks } from '../constants';

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Image
            src="/assets/AtlasAudioLogoWhite.png"
            alt="Atlas Audio Logo"
            width={768}
            height={768}
            className="w-[220px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Copyright © 2022 Atlas-Audio
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
