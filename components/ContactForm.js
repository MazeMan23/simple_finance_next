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
                  <g class="cls-2">
                    <path d="M18,19H6a4,4,0,0,1-4-4V7A4,4,0,0,1,6,3H18a4,4,0,0,1,4,4v8A4,4,0,0,1,18,19ZM6,5A2,2,0,0,0,4,7v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2Z" />
                    <path d="M12,14.08a.86.86,0,0,1-.32-.05L2.68,11a1,1,0,1,1,.64-1.9L12,12l8.68-2.81A1,1,0,0,1,22,9.86a1,1,0,0,1-.64,1.26l-9,2.91A.84.84,0,0,1,12,14.08Z" />
                    <path d="M3.92,18.16a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L8.3,11.37a1,1,0,0,1,1.41,1.41L4.63,17.87A1,1,0,0,1,3.92,18.16Z" />
                    <path d="M20.08,18.16a1,1,0,0,1-.71-.29L14.31,12.8a1,1,0,0,1,1.41-1.41l5.07,5.06a1,1,0,0,1,0,1.42A1,1,0,0,1,20.08,18.16Z" />
                  </g>
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
