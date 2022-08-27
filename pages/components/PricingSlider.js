import React from 'react';
import styles, { layout } from '../style';
import ContactUsButton from './ContactUsButton';

export default function PricingSlider() {
  return (
    <div className="w-full md:w-5/6 my-10">
      <input
        type="range"
        min={0}
        max={60}
        step={5}
        value={5}
        className="w-full"
      ></input>
      <p className={`${styles.paragraph}`}>Minutes:</p>
      <p className={`${styles.paragraph}`}>Price:</p>

      <ContactUsButton styles={'my-10'} />
    </div>
  );
}
