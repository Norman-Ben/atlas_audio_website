import React from 'react';
import styles, { layout } from '../style';

export default function PortfolioContent() {
  return (
    <section className={`${layout.section} flex justify-center align-middle`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 h-full w-full">
        <div className="relative overflow-hidden pt-[56.25%]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/YFHXiyJfAdc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="relative overflow-hidden pt-[56.25%]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/V8rKa5S6o5U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="relative overflow-hidden pt-[56.25%]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/VqVX0U0vvNM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
