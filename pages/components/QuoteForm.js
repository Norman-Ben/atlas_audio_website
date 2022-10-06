import React from 'react';
import styles, { layout } from '../style';
import ContactUsButton from './ContactUsButton';
import Image from 'next/image';
import MixingDesk from '../../public/assets/AtlasMixingDeskPic.jpg';

export default function QuoteForm() {
  return (
    <section className={`md:${layout.section} ${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src={MixingDesk}
          alt="Mixing Desk"
          className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
        />
      </div>
      <form>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Tell us about you and your project
          </h2>
          <label htmlFor="name" className="block text-dimWhite mt-5">
            Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
          ></input>
          <label htmlFor="email" className="block text-dimWhite mt-5">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
          ></input>
          <label htmlFor="projectName" className="block text-dimWhite mt-5">
            Name of Project
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Project Name"
            className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
          ></input>
          <label htmlFor="projectName" className="block text-dimWhite mt-5">
            Genre of Project
          </label>
          <input
            type="text"
            id="projectGenre"
            name="projectGenre"
            placeholder="Project Genre"
            className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
          ></input>
          <label htmlFor="DevTime" className="block text-dimWhite mt-5">
            How long have you been in devleopment?
          </label>
          <select
            name="DevTime"
            id="DevTime"
            className="mt-2 w-[40%] rounded-md border border-gray-400 text-white bg-gray-700"
          >
            <option value="0-3 Months">0-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="12+ Months">12+ Months</option>
          </select>
          <label htmlFor="projectLength" className="block text-dimWhite mt-5">
            Estimated Length of OST (in minutes)
          </label>
          <input
            type="number"
            id="length"
            placeholder="OST Length"
            className="mt-2 w-[40%] rounded-md border border-gray-400 text-white bg-gray-700"
          ></input>
          <label
            htmlFor="addtionalComments"
            className="block text-dimWhite mt-5"
          >
            Addtional Comments
          </label>
          <textarea
            name="addtionalComments"
            id="addtionalComments"
            cols="30"
            rows="5"
            placeholder="Additional Comments"
            className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
          ></textarea>

          <div className={`${styles.paragraph} max-w-[470px] mt-5`}></div>
        </div>
      </form>
    </section>
  );
}
