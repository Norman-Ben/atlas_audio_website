import React from 'react';
import PricingSlider from './PricingSlider';
import AAAlex from '../../public/assets/AtlasAudioAlex.jpeg';
import AAJulian from '../../public/assets/AtlasAudioJulian.jpeg';
import MixingDeskPic from '../../public/assets/AtlasMixingDeskPic.jpg';
import { WhatWeDoCard, WhatWeDoCardRev } from './index.js';

const cardContent = {
  cardOne: {
    headingText: 'A range of musical services tailored for your media.',
    pText:
      'Looking for a snappy soundtrack for your podcast? Composition for your RPG inspired game? Catchy background music for your advertisement? We can help bring your media to life. Fully produced within our professional studio, we’re able to provide exactly what your media needs, regardless of genre or style.',
    picture: AAAlex,
    alt: 'Alex from Atlas Audio',
  },
  cardTwo: {
    headingText: 'State of the art Studio',
    pText:
      'Our studio, located in bath, is equipped with all the audio hardware required to make your project come to life. From recording and engineering to editing, mixing and mastering.',
    picture: AAJulian,
    alt: 'Julian from Atlas Audio',
  },
  cardThree: {
    headingText: 'Pricing',
    pText:
      'We guarantee a personable and professional service, containing open communication as well as a variety of pricing structures to suit your needs and budget. Please use the slider below for a quote based on total length of composition(s) required.',
    picture: MixingDeskPic,
    alt: 'Mixing Desk',
    slider: <PricingSlider />,
  },
};

export default function WhatWeDo() {
  return (
    <section>
      <WhatWeDoCard
        headingText={cardContent.cardOne.headingText}
        pText={cardContent.cardOne.pText}
        picture={cardContent.cardOne.picture}
        alt={cardContent.cardOne.alt}
      />
      <WhatWeDoCardRev
        headingText={cardContent.cardTwo.headingText}
        pText={cardContent.cardTwo.pText}
        picture={cardContent.cardTwo.picture}
        alt={cardContent.cardTwo.alt}
      />
      <WhatWeDoCard
        headingText={cardContent.cardThree.headingText}
        pText={cardContent.cardThree.pText}
        picture={cardContent.cardThree.picture}
        alt={cardContent.cardThree.alt}
        slider={cardContent.cardThree.slider}
      />
    </section>
  );
}
