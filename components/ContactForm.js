import React, { useState } from "react";

export default function ContactForm({ t, h }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  return (
    <form
      className="flex flex-col px-8 py-8 bg-white"
      onSubmit={async (e) => {
        e.preventDefault();

        const fullname = e.target.fullname.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        if (!fullname || !email || !subject | !message) {
          setError("Please fill out all the fields!");
          return;
        }

        if (
          !String(email)
            .toLowerCase()
            .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          setError("Please fill out a valid email!");
          return;
        }

        const body = { fullname, email, subject, message };
        const bodyJSON = JSON.stringify(body);

        let result;
        result = await fetch("/api/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodyJSON,
        });
        const content = await result.json();
        if (result.status !== 200) {
          setError(content.message);
          return;
        }

        setSuccess("Thanks! We'll be in touch shortly.");
      }}
    >
      <div className=" flex justify-center">
        <h1 className="text-3xl font-bold text-center">{t("contact")}</h1>
      </div>
      <div className="flex flex-row justify-between gap-8">
        <div className="hidden lg:flex lg:flex-1 lg:flex-col justify-start items-end">
          <h1 className="mt-6 font-semibold text-lg">{t("address_title")}</h1>
          <p className="mt-1">{t("address")}</p>
          <h1 className="mt-6 font-semibold text-lg">E-mail:</h1>
          <p className="mt-1">office@simplefinance.net</p>
          <h1 className="mt-6 font-semibold text-lg">{t("phone_title")}</h1>
          <p className="mt-1">+ 359 2 427 99 99</p>
        </div>
        <div className="flex flex-col flex-2">
          <div className="flex flex-2 flex-col flex-2">
            <label htmlFor="fullname" className="font-light mt-8 ">
              {t("name")}
              <span className="text-red-500">&nbsp;*</span>
            </label>
            <input
              type="text"
              name="fullname"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 font-light "
            />
            <label htmlFor="email" className=" font-light mt-4">
              E-mail<span className="text-red-500">&nbsp;*</span>
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black"
            />
            <label htmlFor="subject" className=" font-light mt-4">
              {t("subject")}
              <span className="text-red-500">&nbsp;*</span>
            </label>
            <select
              name="subject"
              className="mt-2 bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
            >
              <option>{h("finance")}</option>
              <option>{h("legal")}</option>
              <option>{h("it")}</option>
              <option>{h("marketing")}</option>
            </select>
            <label htmlFor="message" className=" font-light mt-4">
              {t("message")}
              <span className="text-red-500">&nbsp;*</span>
            </label>
            <textarea
              name="message"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
            ></textarea>
            <div className="flex flex-row items-center justify-end">
              <button className="px-10 mt-8 py-2 bg-[#130F49] text-white font-light rounded-md text-lg flex flex-row items-center">
                {t("send")}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-cyan-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          {error ? (
            <div className="flex flex-row justify-center texte-center bg-red-400 my-4 rounded-xl text-white min-w-full">
              {error}
            </div>
          ) : (
            <></>
          )}
          {success ? (
            <div className="flex flex-row justify-center texte-center bg-green-400 my-4 rounded-xl text-white min-w-full">
              {success}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </form>
  );
}
