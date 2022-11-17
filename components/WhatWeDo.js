import React from 'react';
import StudioPic from '../public/assets/AtlasStudioPic.jpeg';
import PricingPic from '../public/assets/AtlasPricingPic.jpeg';
import ContactUsButton from './ContactUsButton';
import { LayoutCard, LayoutCardRev } from './index.js';

const cardContent = {
  cardOne: {
    headingText: 'Hire a Drummer.',
    pText:
      'In need of a dedicated drummer to bring your track to life? Look no further than our remote service, hosted on Zoom for your convenience.',
    picture: 'Marketing Video',
    alt: 'Atlas Audio Marketing Video',
  },
  cardTwo: {
    headingText: 'State of the Art Studio',
    pText:
      'The Barn Studio live room and control room are primed and ready to take your track from inception to completion. Find us between Bath & Bristol, close to the beautiful village Chew Magna.',
    picture: StudioPic,
    alt: 'Julian from Atlas Audio',
  },
  cardThree: {
    headingText: 'Pricing',
    pText:
      'Whatever it is that your project needs, we’re here to help. Audio services don’t need to cost an arm and a leg, but it does vary from project to project. Fill in the form, and tell us about what makes your project special, and we’ll take it from there.',
    picture: PricingPic,
    alt: 'Mixing Desk',
    button: (
      <ContactUsButton
        styles={'mt-5 max-w-[180px]'}
        text="Get a Quote"
        link="/quote"
      />
    ),
  },
};

export default function WhatWeDo() {
  return (
    <section>
      <LayoutCard
        headingText={cardContent.cardOne.headingText}
        pText={cardContent.cardOne.pText}
        picture={cardContent.cardOne.picture}
        alt={cardContent.cardOne.alt}
      />
      <LayoutCardRev
        headingText={cardContent.cardTwo.headingText}
        pText={cardContent.cardTwo.pText}
        picture={cardContent.cardTwo.picture}
        alt={cardContent.cardTwo.alt}
      />
      <LayoutCard
        headingText={cardContent.cardThree.headingText}
        pText={cardContent.cardThree.pText}
        picture={cardContent.cardThree.picture}
        alt={cardContent.cardThree.alt}
        button={cardContent.cardThree.button}
      />
    </section>
  );
}
