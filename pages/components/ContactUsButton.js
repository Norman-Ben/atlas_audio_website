import React from 'react';

const ContactUsButton = ({ styles, text, link }) => (
  <button
    type="button"
    className={`py-3 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    onClick={() => {
      window.open(link);
    }}
  >
    {text}
  </button>
);

export default ContactUsButton;
