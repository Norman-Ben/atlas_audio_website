import React from 'react';
import StudioPic from '../public/assets/AtlasStudioPic.jpeg';
import PricingPic from '../public/assets/AtlasPricingPic.jpeg';
import MixingDesk2 from '../public/assets/MixingDesk2.png';
import ContactUsButton from './ContactUsButton';
import { LayoutCard, LayoutCardRev } from './index.js';

const cardContent = {
  cardOne: {
    headingText: 'Hire a Drummer',
    pText:
      'In need of a dedicated drummer to bring your track to life? Look no further than our remote service, hosted on Zoom for your convenience.',
    picture: 'Marketing Video',
    alt: 'Atlas Audio Marketing Video'
  },
  cardTwo: {
    headingText: 'State of the Art Studio',
    pText:
      'The Barn Studio live room and control room are primed and ready to take your track from inception to completion. Find us between Bath & Bristol, close to the beautiful village of Chew Magna.',
    picture: StudioPic,
    alt: 'Atlas Audio Studio Pic'
  },
  cardThree: {
    headingText: 'Pricing',
    pText:
      'Whatever it is that your project needs, we’re here to help. Audio services don’t need to cost an arm and a leg, but it does vary from project to project. Fill in the form, and tell us about what makes your project special, and we’ll take it from there.',
    picture: PricingPic,
    alt: 'Julian from Atlas Audio',
    button: (
      <ContactUsButton
        styles={'mt-5 max-w-[180px]'}
        text="Get a Quote"
        link="/quote"
      />
    )
  },
  cardFour: {
    headingText: 'Bespoke Compositions',
    pText:
      'Let us bring your project to life with tailored compositions specifically created just for you, from video game soundtracks and podcast themes to promotion trailers and advertisement. Contact us now for a free consultation.',
    picture: MixingDesk2,
    alt: 'Mixing Desk'
  }
};

export default function WhatWeDo() {
  return (
    <section>
      <LayoutCard
        headingText={cardContent.cardFour.headingText}
        pText={cardContent.cardFour.pText}
        picture={cardContent.cardFour.picture}
        alt={cardContent.cardFour.alt}
      />
      <LayoutCardRev
        headingText={cardContent.cardTwo.headingText}
        pText={cardContent.cardTwo.pText}
        picture={cardContent.cardTwo.picture}
        alt={cardContent.cardTwo.alt}
      />
      <LayoutCard
        headingText={cardContent.cardOne.headingText}
        pText={cardContent.cardOne.pText}
        picture={cardContent.cardOne.picture}
        alt={cardContent.cardOne.alt}
      />
      <LayoutCardRev
        headingText={cardContent.cardThree.headingText}
        pText={cardContent.cardThree.pText}
        picture={cardContent.cardThree.picture}
        alt={cardContent.cardThree.alt}
        button={cardContent.cardThree.button}
      />
    </section>
  );
}
