import { React, useEffect, useCallback } from 'react';
import styles, { layout } from '../style';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import StudioSynths from '../../public/assets/BarnStudioPics/StudioSynths.jpeg';
import StudioMixingDesk from '../../public/assets/BarnStudioPics/StudioMixingDesk.jpeg';
import StudioControlRoom from '../../public/assets/BarnStudioPics/StudioControlRoom.JPG';
import StudioGuitars from '../../public/assets/BarnStudioPics/StudioGuitars.jpeg';
import Next from '../../public/assets/Next.svg';
import Back from '../../public/assets/Back.svg';

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
    <section className={layout.sectionReverse}>
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
          <div className="flex flex-row">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
