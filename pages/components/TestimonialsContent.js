import React from 'react';
import styles, { layout } from '../style';
import Image from 'next/future/image';

export default function AboutContent() {
  return (
    <section>
      <section className={`md:${layout.section} ${layout.sectionReverse}`}>
        <div className={`${layout.sectionImgReverse}`}>
          <div className="relative overflow-hidden pt-[56.25%] w-full">
            <iframe
              src="https://www.youtube-nocookie.com/embed/itGV60ndqMI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
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
            because they certainly delivered.
            <br />
            I’ve already notified Atlas Audio of future projects, projects that
            would not be the same without their talents. I look forward to what
            comes next, I am excited about my franchises growth, and if you are
            like me, and are looking for someone to manage your music, if you’re
            seeking creatives in this field, I highly recommend getting in touch
            with Atlas Audio.”
          </p>
        </div>
      </section>

      <section className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse}`}>
          <Image
            src="/assets/HHT-Testimonial.jpeg"
            alt="Guitar"
            height={1024}
            width={683}
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
      <section className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse}`}>
          <Image
            src="/assets/LCB-Testimonial.jpeg"
            alt="Guitar"
            height={1024}
            width={683}
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
    </section>
  );
}
