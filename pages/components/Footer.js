import React from 'react';
import styles from '../style';
import Image from 'next/image';
import { footerLinks } from '../constants';
import AtlasAudioLogo from '../../public/assets/AtlasAudioLogoWhite.png';

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col sm:justify-start sm:mr-10 md:max-w-[310px] max-w-[210px]">
          <Image
            src={AtlasAudioLogo}
            alt="Atlas Audio Logo"
            className="w-[180px] object-contain m-auto md:m-0"
          />
          <p
            className={`${styles.paragraph} mt-4 max-w-[310px] text-sm text-center`}
          >
            Copyright © 2022 Atlas Audio
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row sm:justify-between justify-center flex-wrap md:mt-0 mt-10 gap-4">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex-row ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[10px] text-white mb-2 sm:block hidden">
                {footerlink.title}
              </h4>
              <ul className="list-none sm:flex gap-4 items-center flex-1 text-center">
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
                          className="svg-filter m-auto"
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
