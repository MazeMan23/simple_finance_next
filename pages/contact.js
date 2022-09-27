import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Pagination } from "@nextui-org/react";
import { Partner } from "../components/Partner";

export async function getStaticProps({ locale }) {
  const index = (await import(`../translations/index/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;

  const final = { ...index, ...header, ...footer };

  return {
    props: {
      messages: final,
    },
  };
}

export default function Index() {
  const t = useTranslations("index");
  const h = useTranslations("header");
  const f = useTranslations("footer");

  const services_list = [
    {
      category: t("accounting_title"),
      banner: "/images/acc.jpg",
      desc1: t("acc1"),
      desc2: t("acc2"),
      desc3: t("acc3"),
    },
    {
      category: t("finance_tile"),
      banner: "/images/fin.jpg",
      desc1: t("fin1"),
      desc2: t("fin2"),
      desc3: t("fin3"),
    },
    {
      category: t("consulting_title"),
      banner: "/images/cons.jpg",
      desc1: t("con1"),
      desc2: t("con2"),
      desc3: t("con3"),
    },
    {
      category: t("business_title"),
      banner: "/images/business.jpg",
      desc1: t("bus1"),
      desc2: t("bus2"),
      desc3: t("bus3"),
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/contacts.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className=" text-2xl md:text-5xl font-bold">
            {t("heroTitleContact")}
          </div>
          <div className="text-lg md:text-xl font-semibold tracking-widest">
            {t("heroSubtitleContact")}
          </div>
        </div>
      </ParticlesHero>
      <form class="mt-5 rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
        <div className="flex flex-row mt-8">
          <div className="hidden lg:flex lg:flex-1 lg:flex-col">
            <h1 className=" ml-36 mt-6 font-semibold text-lg">
              {t("address_title")}
            </h1>
            <p className="ml-36 mt-1 w-72">{t("address")}</p>
            <h1 className="ml-36 mt-6 font-semibold text-lg">E-mail:</h1>
            <p className="ml-36 mt-1">office@simplefinance.net</p>
            <h1 className="ml-36 mt-6 font-semibold text-lg">
              {t("phone_title")}
            </h1>
            <p className="ml-36 mt-1">+ 359 2 427 99 99</p>
          </div>
          <div className="flex flex-col flex-2">
            <div className="flex flex-2 flex-col flex-2">
              <label
                for="fullname"
                class="text-gray-500 font-light mt-8 dark:text-gray-50"
              >
                {t("name")}
                <span class="text-red-500 dark:text-gray-50">*</span>
              </label>
              <input
                type="text"
                name="fullname"
                class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              />

              <label
                for="email"
                class="text-gray-500 font-light mt-4 dark:text-gray-50"
              >
                E-mail<span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              />

              <label
                for="subject"
                class="text-gray-500 font-light mt-4 dark:text-gray-50"
              >
                {t("subject")}
                <span class="text-red-500">*</span>
              </label>
              <select className="mt-2 bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">
                <option>{h("finance")}</option>
                <option>{h("legal")}</option>
                <option>{h("it")}</option>
                <option>{h("marketing")}</option>
              </select>
              <label
                for="message"
                class="text-gray-500 font-light mt-4 dark:text-gray-50"
              >
                {t("message")}
                <span class="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              ></textarea>
              <div class="flex flex-row items-center justify-end">
                <button class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                  {t("send")}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="text-cyan-500 ml-2"
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
          </div>
        </div>
      </form>
      <div className="flex flex-col mb-16">
        <div className="flex flex-col md:flex-row md:mt-8 md:mb-8">
          <Partner className="flex flex-1" />
          <Partner className="flex flex-1" />
          <Partner className="flex flex-1" />
          <Partner className="flex flex-1 ml-8 mr-8" />
        </div>
        <Pagination
          className="self-center"
          shadow
          color="warning"
          onlyDots
          total={8}
          loop
          initialPage={1}
        />
      </div>
    </Layout>
  );
}
