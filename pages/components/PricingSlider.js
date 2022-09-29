import React from 'react';
import styles, { layout } from '../style';
import ContactUsButton from './ContactUsButton';

export default function PricingSlider() {
  const [sliderValue, setSliderValue] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  function calculatePrice(quotePriceMins) {
    if (quotePriceMins === 0) {
      return (quotePriceMins = 0);
    } else if (quotePriceMins <= 5) {
      return (quotePriceMins *= 150);
    } else if (quotePriceMins <= 10) {
      return (quotePriceMins *= 140);
    } else if (quotePriceMins <= 30) {
      return (quotePriceMins *= 130);
    } else if (quotePriceMins <= 50) {
      return (quotePriceMins *= 120);
    } else if (quotePriceMins <= 70) {
      return (quotePriceMins *= 100);
    } else if (quotePriceMins <= 80) {
      return (quotePriceMins *= 90);
    } else {
      return (quotePriceMins *= 80);
    }
  }

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    setPrice(calculatePrice(event.target.value));
  };

  console.log(price);

  return (
    <div className="w-full md:w-5/6 my-10">
      <input
        type="range"
        min={0}
        max={90}
        step={1}
        value={sliderValue}
        className="w-full slider"
        onChange={handleSliderChange}
      ></input>
      <p className={`${styles.paragraph}`}>Minutes: {sliderValue}</p>
      <p className={`${styles.paragraph}`}>Price: £{price}</p>

      <ContactUsButton
        styles={'mt-5'}
        text="Contact Us"
        link="mailto:contact@atlas-audio.co.uk"
      />
    </div>
  );
}
