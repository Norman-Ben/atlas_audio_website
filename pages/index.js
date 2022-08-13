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
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero <section />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <WhatWeDo />
          <Portfolio />
          <Testimonials />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
}
