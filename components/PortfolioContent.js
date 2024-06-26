import React from 'react';
import styles, { layout } from '../constants/style';

export default function PortfolioContent() {
  return (
    <section className={`${layout.section} flex justify-center align-middle`}>
      <div className="w-full pb-10">
        <h1 className={`${styles.heading2} py-4`}>Our Work</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 h-full w-full">
          <div className="relative overflow-hidden pt-[56.25%]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/UbzKc1SJ5tA?si=BdzHGd8RDPELqEoC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="relative overflow-hidden pt-[56.25%]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/V8bW4pwDCuE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="relative overflow-hidden pt-[56.25%]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/itGV60ndqMI"
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
        </div>
      </div>
    </section>
  );
}
