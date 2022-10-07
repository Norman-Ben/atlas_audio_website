import { React, useState } from 'react';
import styles, { layout } from '../style';
import Image from 'next/image';
import MixingDesk from '../../public/assets/AtlasMixingDeskPic.jpg';

export default function QuoteForm() {
  const formInitialState = {
    fullName: '',
    email: '',
    projectName: '',
    projectLength: '',
    projectGenre: '',
    devTime: '',
    addtionalComments: '',
  };

  const [formState, setFormState] = useState(formInitialState);

  const handleFormChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    console.log(formState);
  };

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className={`md:${layout.section} ${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <Image
          src={MixingDesk}
          alt="Mixing Desk"
          className="md:w-[90%] w-[65%] rounded-[15px] relative z-[5]"
        />
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Tell us about you and your project
            </h2>
            <label htmlFor="fullName" className="block text-dimWhite mt-5">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              value={formState.fullName}
              onChange={handleFormChange}
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></input>
            <label htmlFor="email" className="block text-dimWhite mt-5">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleFormChange}
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
              value={formState.projectName}
              onChange={handleFormChange}
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
              value={formState.projectGenre}
              onChange={handleFormChange}
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></input>
            <label htmlFor="devTime" className="block text-dimWhite mt-5">
              How long have you been in devleopment?
            </label>
            <select
              name="devTime"
              id="devTime"
              value={formState.devTime}
              onChange={handleFormChange}
              className="mt-2 w-[40%] rounded-md border border-gray-400 text-white bg-gray-700"
            >
              <option value="0-3 Months">0-3 Months</option>
              <option value="3-6 Months">3-6 Months</option>
              <option value="6-12 Months">6-12 Months</option>
              <option value="12+ Months">12+ Months</option>
            </select>
            <label htmlFor="devTime" className="block text-dimWhite mt-5">
              Estimated Length of OST (in minutes)
            </label>
            <input
              type="number"
              id="projectLength"
              name="projectLength"
              placeholder="OST Length"
              value={formState.projectLength}
              onChange={handleFormChange}
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
              value={formState.addtionalComments}
              onChange={handleFormChange}
              cols="30"
              rows="5"
              placeholder="Additional Comments"
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></textarea>
            <button
              className={`my-3 py-3 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
