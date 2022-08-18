import styles from '../style';
import Image from 'next/future/image';

export default function ContactUs() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Contact</span>
          </p>
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px] flex flex-row">
          <span className="text-gradient">Us</span>
          <Image
            src="/assets/arrow-up.svg"
            width={23}
            height={23}
            alt="Contact us link"
            className="object-contain"
          />
        </p>
      </div>
    </div>
  );
}
