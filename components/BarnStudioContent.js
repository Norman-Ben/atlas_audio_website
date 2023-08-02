import { React, useEffect, useCallback } from 'react';
import styles, { layout } from '../constants/style';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import StudioSynths from '../public/assets/BarnStudioPics/StudioSynths.jpeg';
import StudioMixingDesk from '../public/assets/BarnStudioPics/StudioMixingDesk.jpeg';
import StudioControlRoom from '../public/assets/BarnStudioPics/StudioControlRoom.JPG';
import StudioGuitars from '../public/assets/BarnStudioPics/StudioGuitars.jpeg';
import Next from '../public/assets/Next.svg';
import Back from '../public/assets/Back.svg';

export default function BarnStudioContent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);
  return (
    <>
      <section className={`${layout.sectionReverse} gap-10`}>
        <div className={`${layout.sectionImgReverse}`}>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <Image
                    src={StudioSynths}
                    alt="Picture of Atlas Audio"
                    className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    src={StudioMixingDesk}
                    alt="Picture of Atlas Audio"
                    className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    src={StudioControlRoom}
                    alt="Picture of Atlas Audio"
                    className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    src={StudioGuitars}
                    alt="Picture of Atlas Audio"
                    className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row py-2">
              <button className="embla__prev" onClick={scrollPrev}>
                <Image src={Back} alt="Back" height={50} />
              </button>
              <button className="embla__next" onClick={scrollNext}>
                <Image src={Next} alt="Next" height={50} />
              </button>
            </div>
          </div>
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>The Barn Studio</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Packed to the brim with new and old keyboards, guitars, basses,
            amps, speakers, drums, mics & more. The Barn Studio is our
            soundscape sandbox, and it can be yours too. Whether you’re looking
            for a soundtrack for your game, or a place to come and record your
            latest album, we do it all.
          </p>
        </div>
      </section>
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/175209"
        frameBorder="0"
        width="100%"
        height="400"
      ></iframe>
    </>
  );
}
