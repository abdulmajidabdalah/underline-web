import React, { useState } from "react";
import { BsWhatsapp, BsPatchQuestionFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import ReactWhatsapp from "react-whatsapp";

const ContactIcon = () => {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setShowButton(!showButton);
  };
  return (
    <div>
      <div
        className="bg-green-400 px-2 py-2 rounded-[50%] lg:w-[70px] lg:h-[70px] flex justify-center items-center fixed z-50 bottom-5 right-5 cursor-pointer"
        onClick={handleClick}
      >
        {showButton ? (
          <IoMdCloseCircle size={40} className="text-light hover:rotate-180" />
        ) : (
          <BsPatchQuestionFill size={40} className="text-light" />
        )}
      </div>
      {showButton ? (
        <div className="bg-green-400 px-2 py-2 rounded-[50%] lg:w-[70px] lg:h-[70px] flex justify-center items-center fixed z-50 lg:bottom-[15%] bottom-[11%] right-5 cursor-pointer">
          <ReactWhatsapp number="+6385782189711" message="Hello World!!!">
            <BsWhatsapp size={40} className="text-light" />
          </ReactWhatsapp>
        </div>
      ) : null}
    </div>
  );
};

export default ContactIcon;
