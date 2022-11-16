import React from 'react';
import styles, { layout } from '../pages/constants/style';
import Image from 'next/image';
import HhtTestimonial from '../public/assets/HHT-Testimonial.jpeg';
import LcbTestimonial from '../public/assets/LCB-Testimonial.jpeg';
import UtopianDreamTestimonial from '../public/assets/UtopianDreamTestimonial.png';

export default function AboutContent() {
  const [isReadMore, setIsReadMore] = React.useState(false);

  function handleReadMore() {
    setIsReadMore(!isReadMore);
  }

  return (
    <section>
      <section className={`md:${layout.section} ${layout.sectionReverse}`}>
        <div className={`${layout.sectionImgReverse}`}>
          <Image
            src={UtopianDreamTestimonial}
            alt="Utopian Dream Testimonial"
            className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
          />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            The Ancestral Odyssey: The Utopian Dream
          </h2>
          <p className={`${styles.paragraph} mt-5`}>
            “Working with Atlas, collaborating with Julian Kirk and Alex Adams
            was an absolute pleasure. Right from the start they were
            enthusiastic about the creative process, keen to listen, were
            passionate about building the best work they could do, but more
            importantly, they were aware of how close I was to my project and
            only wanted to honour that bond to do it justice while it was in
            their capable hands, and I would trust them again with my work 100%
            because they certainly delivered. <br />
            <span className={isReadMore ? `block` : `hidden`}>
              I’ve already notified Atlas Audio of future projects, projects
              that would not be the same without their talents. I look forward
              to what comes next, I am excited about my franchises growth, and
              if you are like me, and are looking for someone to manage your
              music, if you’re seeking creatives in this field, I highly
              recommend getting in touch with Atlas Audio.”
            </span>
            <button onClick={handleReadMore} className="text-white underline">
              {isReadMore ? 'Read less..' : 'Read more..'}
            </button>
          </p>
        </div>
      </section>

      <section className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse}`}>
          <Image
            src={LcbTestimonial}
            alt="Lights Camera Blokes Image"
            className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
          />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Lights, Cameras, Blokes</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-7`}>
            “Working with Atlas Audio to bring music to my podcast was a
            brilliant experience. They bought a lot of talent and skill to a
            process that felt genuinely collaborative and definitely elevated
            our project.”
          </p>
        </div>
      </section>
      <section className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse}`}>
          <Image
            src={HhtTestimonial}
            alt="Home Health Truth Image"
            className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
          />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Health Home Truths</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            “A bespoke, and complete service – Atlas Audio took my vague
            inspiration to the next level, bringing direction and solidifying my
            brand. They really payed attention to my vision, and kept me in the
            loop throughout the process. These boys delivered a unique, and
            entire soundscape.”
          </p>
        </div>
      </section>
    </section>
  );
}
