import React from 'react';
import styles, { layout } from '../style';
import ContactUsButton from './ContactUsButton';

export default function PricingSlider() {
  const [sliderValue, setSliderValue] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    setPrice(event.target.value * 50);
  };

  return (
    <div className="w-full md:w-5/6 my-10">
      <input
        type="range"
        min={0}
        max={60}
        step={5}
        value={sliderValue}
        className="w-full slider"
        onChange={handleSliderChange}
      ></input>
      <p className={`${styles.paragraph}`}>Minutes: {sliderValue}</p>
      <p className={`${styles.paragraph}`}>Price: £{price}</p>

      <ContactUsButton styles={'mt-5'} />
    </div>
  );
}
