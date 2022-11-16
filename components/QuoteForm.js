import { React, useState } from 'react';
import styles, { layout } from '../constants/style';
import Image from 'next/image';
import MixingDesk from '../public/assets/MixingDesk.jpeg';

export default function QuoteForm() {
  const formInitialState = {
    fullName: '',
    email: '',
    projectName: '',
    projectLength: '',
    projectGenre: '',
    devTime: '',
    additionalComments: '',
  };

  const [formState, setFormState] = useState(formInitialState);

  const [formSubmitted, setFormSubmitted] = useState(false);

  //Updates the formState on user input
  const handleFormChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  //Handles the submission of the form by calling the "QuoteFormSubmit.js" API and sending form data object with it.
  async function handleSubmit(e) {
    e.preventDefault();
    const formContents = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formContents[field.name] = field.value;
    });

    await fetch('/api/QuoteFormSubmit', {
      method: 'POST',
      body: JSON.stringify(formContents),
    });
    setFormState(formInitialState);
    setFormSubmitted(true);
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
      <form onSubmit={handleSubmit}>
        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>What&apos;s your project?</h2>
            <label htmlFor="fullName" className="block text-dimWhite mt-5">
              Name<span className="text-harvestGold">*</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              required
              value={formState.fullName}
              onChange={handleFormChange}
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></input>
            <label htmlFor="email" className="block text-dimWhite mt-5">
              Email<span className="text-harvestGold">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleFormChange}
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></input>
            <label htmlFor="projectName" className="block text-dimWhite mt-5">
              Name of Project<span className="text-harvestGold">*</span>
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Project Name"
              required
              value={formState.projectName}
              onChange={handleFormChange}
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></input>
            <label htmlFor="projectName" className="block text-dimWhite mt-5">
              Type of Project (Film, Game, Podcast, etc.)
              <span className="text-harvestGold">*</span>
            </label>
            <input
              type="text"
              id="projectGenre"
              name="projectGenre"
              required
              placeholder="Project Type"
              value={formState.projectGenre}
              onChange={handleFormChange}
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></input>
            <label htmlFor="devTime" className="block text-dimWhite mt-5">
              Estimated deadline for project
              <span className="text-harvestGold">*</span>
            </label>
            <select
              name="devTime"
              id="devTime"
              required
              value={formState.devTime}
              onChange={handleFormChange}
              className="mt-2 w-[40%] rounded-md border border-gray-400 text-white bg-gray-700"
            >
              <option value="less than 1 month">less than 1 Month</option>
              <option value="1-3 Months">1-3 Months</option>
              <option value="3-6 Months">3-6 Months</option>
              <option value="6-9 Months">6-9 Months</option>
              <option value="9-12 Months">9-12 Months</option>
              <option value="12+ Months">12+ Months</option>
            </select>
            <label htmlFor="devTime" className="block text-dimWhite mt-5">
              Estimated Length of OST (in minutes)
              <span className="text-harvestGold">*</span>
            </label>
            <input
              type="number"
              id="projectLength"
              name="projectLength"
              required
              placeholder="OST Length"
              value={formState.projectLength}
              onChange={handleFormChange}
              className="mt-2 w-[40%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></input>
            <label
              htmlFor="additionalComments"
              className="block text-dimWhite mt-5"
            >
              Additional Comments
            </label>
            <textarea
              name="additionalComments"
              id="additionalComments"
              value={formState.additionalComments}
              onChange={handleFormChange}
              cols="30"
              rows="5"
              placeholder="Additional Comments"
              className="mt-2 w-[80%] rounded-md border border-gray-400 text-white bg-gray-700"
            ></textarea>
            <button
              className={`my-3 py-3 px-6 font-poppins font-medium text-[18px] text-primary ${
                formSubmitted ? 'bg-slate-600' : 'bg-harvestGold'
              } rounded-[10px] outline-none ${styles} hover:bg-[#ffa600]`}
              disabled={formSubmitted}
            >
              {formSubmitted ? 'Form Submitted!' : 'Submit'}
            </button>
            <p>
              If you would like to provide us with further information please
              contact us at: <br />
              <a
                href="mailto:contact@atlas-audio.co.uk"
                className="underline text-white"
              >
                contact@atlas-audio.co.uk
              </a>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
