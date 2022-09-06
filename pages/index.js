import styles from './style.js';
import {
  Navbar,
  Portfolio,
  Testimonials,
  WhatWeDo,
  ContactUs,
  Footer,
  Hero,
} from './components/index.js';

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="blue__gradient absolute z-[0] w-[70%] h-[55%] top-0 left-0" />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <WhatWeDo />
          <Footer />
          {/* <div className="blue__gradient absolute z-[0] w-[50%] h-[50%] top-0 left-0" /> */}
        </div>
      </div>
    </div>
  );
}
