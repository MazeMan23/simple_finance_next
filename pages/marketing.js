import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;
  const marketing = (await import(`../translations/marketing/${locale}.json`)).default;

  const final = { ...marketing, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: marketing.marketing.htmlTitle,
    },
  };
}

export default function Marketing() {
  const t = useTranslations("marketing");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const projects = [
    {
      url: "/images/acc.jpg",
      title: t("seo_title"),
      subtitle: t("seo_sub"),
      desc1: t("seo_desc1"),
      desc2: t("seo_desc2"),
    },
    {
      url: "/images/fin.jpg",
      title: t("fb_title"),
      subtitle: t("fb_sub"),
      desc1: t("fb_desc1"),
      desc2: t("fb_desc2"),
    },
    {
      url: "/images/cons.jpg",
      title: t("ga_title"),
      subtitle: t("ga_sub"),
      desc1: t("ga_desc1"),
      desc2: t("ga_desc2"),
    },
    {
      url: "/images/business.jpg",
      title: t("sm_title"),
      subtitle: t("sm_sub"),
      desc1: t("sm_desc1"),
      desc2: t("sm_desc2"),
    },
  ];

  const services = [
    {
      url: "/images/m1.png",
      title: t("soc"),
      desc: t("soc_desc"),
    },
    {
      url: "/images/m2.png",
      title: t("fb"),
      desc: t("fb_desc"),
    },
    {
      url: "/images/m3.png",
      title: t("ig"),
      desc: t("ig_desc"),
    },
    {
      url: "/images/m4.png",
      title: t("li"),
      desc: t("li_desc"),
    },
    {
      url: "/images/m5.png",
      title: t("ga"),
      desc: t("ga_desc"),
    },
    {
      url: "/images/m6.png",
      title: t("email"),
      desc: t("email_desc"),
    },
    {
      url: "/images/m7.png",
      title: t("seo"),
      desc: t("seo_desc"),
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/simple_marketing.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-2xl md:text-5xl max-w-4xl font-bold">{t("heroTitle")}</div>
          <div className="text-xl font-bold max-w-3xl">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <div className="bg-slate-100 pb-8">
        <div className="flex mr-3 ml-3 mt-3 flex-row md:mr-20 md:ml-20 md:mt-20">
          <div className="flex flex-col">
            <div className="flex lg:hidden self-center max-w-[90vw]">
              <img src="/images/marketing.png" />
            </div>
            <h1 className="mt-5 text-3xl font-semibold">{t("about")}</h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("about_1")}</li>
              <li className="mb-2">{t("about_2")}</li>
              <li className="mb-2">{t("about_3")}</li>
              <li className="mb-2">{t("about_4")}</li>
            </ul>
            <div className="flex flex-row items-center justify-start">
              <button className="px-10 mt-8 py-2 bg-[#f28123] text-white font-light rounded-md text-lg flex flex-row items-center">
                {t("learnMore")}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white ml-2"
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
            <h1 className="mt-5 text-3xl font-semibold">{t("what")}</h1>
            <h1 className="mt-5 text-2xl text-gray-700 font-semibold">{t("consultative")}</h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("consultative_desc")}</li>
            </ul>
            <h1 className="mt-5 text-2xl text-gray-700 font-semibold">{t("precise")}</h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("precise_desc")}</li>
            </ul>
            <h1 className="mt-5 text-2xl text-gray-700 font-semibold">{t("customer")}</h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("customer_desc")}</li>
            </ul>
          </div>
          <div className="hidden self-center lg:flex justify-center">
            <img src="/images/marketing.png" className="ml-10 mb-10 max-w-3xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center my-8 gap-8">
        <h1 className="my-5 text-5xl font-semibold">{t("services")}</h1>
        {services.map((value, index) => (
          <div key={index} className="flex flex-row flex-wrap-reverse w-[60%] gap-8">
            <div className="flex flex-col justify-start w-[45%]">
              <p className="font-semibold text-4xl mb-4">{value.title}</p>
              <p className="text-gray-700 text-lg">{value.desc}</p>
            </div>
            <div className="flex flex-col justify-center w-[45%] ">
              <Image src={value.url} width={969} height={723} className="rounded-xl" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold	mt-10">{t("aboutTitle")}</h1>
        <p className="mt-4">{t("aboutSubtitle1")}</p>
        <p className="mb-4">{t("aboutSubtitle2")}</p>
        <div className="flex flex-row justify-center gap-4 px-8 mb-4 flex-wrap">
          {projects.map((item, index) => (
            <div key={index} className="rounded-xl bg-white active:bg-gray-200  w-full md:w-[48%] lg:w-[23%] shadow-xl">
              <div className="flex flex-col justify-between gap-2">
                <Image src={item.url} className="rounded-t-xl" layout="intrinsic" width={315} height={369} />
                <div className="p-4">
                  <p className="text-gray-700">{item.subtitle}</p>
                  <p className="text-2xl">{item.title}</p>
                  <ul className="mb-4 ml-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{item.desc1}</li>
                    <li className="mt-1">{item.desc2}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
