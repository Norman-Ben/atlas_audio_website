import React from 'react';
import styles from '../style';
import Image from 'next/future/image';
import { footerLinks } from '../constants';

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Image
            src="/assets/AtlasAudioLogoWhite.png"
            alt="Atlas Audio Logo"
            width={768}
            height={768}
            className="w-[180px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] text-sm`}>
            Copyright © 2022 Atlas-Audio
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 gap-4">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex-row ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[10px] text-white mb-2">
                {footerlink.title}
              </h4>
              <ul className="list-none sm:flex hidden gap-4 items-center flex-1">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.id}
                    className={`font-poppins font-normal text-[16px] leading-[30px] text-dimWhite hover:text-secondary cursor-pointer mx-4 my-4`}
                  >
                    <a href={link.id}>
                      {/* Logic to display Site Links or Social Media Icons depending on which array is being mapped */}
                      {footerlink.title === 'Site Links' ? link.title : null}
                      {footerlink.title === 'Social Media' ? (
                        <Image
                          alt="Social Media Icon"
                          src={link.img}
                          width={30}
                          height={30}
                          className="svg-filter"
                        />
                      ) : null}
                    </a>
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
