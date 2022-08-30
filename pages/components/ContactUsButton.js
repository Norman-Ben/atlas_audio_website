import React from 'react';

const ContactUsButton = ({ styles }) => (
  <button
    type="button"
    className={`py-3 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Contact Us
  </button>
);

export default ContactUsButton;
