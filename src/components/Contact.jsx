import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u12a29p",
        "template_1hjr7pp",
        form.current,
        "0-gblegitiFe5HGnc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="bg-dark-secondary lg:h-screen py-4" id="contact">
      <h1 className="text-center text-2xl text-gold-primary fontPoppins py-10">
        Contact Us
      </h1>
      <div className="bg-transparent border border-light lg:mx-20 mx-3 px-4 py-4">
        <h1 className="text-center fontPoppins text-3xl font-bold text-light capitalize">
          how can i help?
        </h1>
        <p className="text-center fontPoppins text-lg text-light">
          Do you have a question or are you interested in working with my team
          and me?
        </p>
        <p className="text-center fontPoppins text-lg text-light">
          Just fill out the form fields below.
        </p>
        <form
          className="grid grid-cols-2 gap-x-10 gap-y-3 w-full"
          onSubmit={sendEmail}
          ref={form}
        >
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            className="border lg:col-span-1 col-span-2 border-light focus:outline-none focus:ring-transparent focus:border focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-light border-t-0 border-l-0 border-r-0 border-b-1 bg-transparent text-light placeholder-light px-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border lg:col-span-1 col-span-2 border-light focus:outline-none focus:ring-transparent focus:border focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-light border-t-0 border-l-0 border-r-0 border-b-1 bg-transparent text-light placeholder-light px-1"
          />
          <input
            type="number"
            name="nope"
            placeholder="No. Hp"
            className="col-span-2 border border-light focus:outline-none focus:ring-transparent focus:border focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-light border-t-0 border-l-0 border-r-0 border-b-1 bg-transparent text-light placeholder-light px-1"
          />
          <textarea
            name="pesan"
            id=""
            rows="7"
            placeholder="Message"
            className="col-span-2 bg-transparent border border-light focus:ring-0 px-1 focus:outline-none focus:border focus:border-light placeholder-light text-light"
          ></textarea>
          <div className="flex justify-end items-center w-full col-span-2">
            <button className="lg:w-[200px] w-[100px] bg-white tracking-widest text-dark-secondary font-bold fontPoppins text-lg lg:px-2 lg:py-2 py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
