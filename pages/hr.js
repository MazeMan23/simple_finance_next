import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const simpleHr = (await import(`../translations/hr/${locale}.json`))
    .default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;

  const final = { ...simpleHr, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: simpleHr.hr.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("hr");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services_list = [
    {
      category: t("staffSearch_title"),
      banner: "/images/staff-search.jpg",
      info: t("search"),
    },
    {
      category: t("staffLeasing_title"),
      banner: "/images/staff-leasing.jpg",
      info: t("leasing"),
    },
    {
      category: t("staffEvaluation_title"),
      banner: "/images/staff-evaluation.jpg",
      info: t("evaluation"),
    },
    {
      category: t("marketResearch_title"),
      banner: "/images/market-research.jpg",
      info: t("market"),
    },
    {
      category: t("staffAdministration_title"),
      banner: "/images/staff-administration.jpg",
      info: t("administration"),
    },
    {
      category: t("compStructuring_title"),
      banner: "/images/comp-structuring.jpg",
      info: t("structuring"),
    },
  ];


  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/hr-background.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className="text-2xl md:text-5xl font-bold text-orange-400">
            {t("heroTitle")}
          </div>
          <div className="text-lg md:text-2xl font-semibold tracking-widest mx-20">
            {t("heroSubtitle")}
          </div>
        </div>
      </ParticlesHero>
      <h1 className="flex justify-center text-4xl font-bold mt-10 my-12 text-orange-400">
        {t("our_works")}
      </h1>
      <div className="flex flex-col items-center justify-center flex-wrap gap-5 px-5 mb-10 lg:flex-row ">
        {services_list.map((item, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="flex justify-center rounded-xl bg-white shadow-xl w-[82%] lg:w-[76%] xl:w-[49%] xl:h-[396px]"
            >
              <div className="flex max-w-[378px]">
                <Image
                  className="rounded-l-lg object-cover"
                  src={item.banner}
                  layout="intrinsic"
                  width={412}
                  height={320}
                />
              </div>
              <div className="mx-auto max-w-[48%] my-6">
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-2xl text-center">
                    {item.category}
                  </h1>
                  <p className="my-6 mx-4 text-justify font-semibold">{item.info}</p>
                  {/* <ul className="mx-8 mb-2 mt-3 list-disc text-gray-700 font-semibold text-smml-5 marker:text-orange-500">
                    {item.info.map((x, index) => (
                      <li className="mt-1" key={index}>
                        {x}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex justify-between rounded-xl bg-white shadow-xl w-[82%] lg:w-[76%] xl:w-[49%] xl:h-[396px]"
            >
              <div className="mx-auto max-w-[48%] my-6">
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-2xl text-center">
                    {item.category}
                  </h1>
                  <p className="my-6 mx-4 text-justify font-semibold">{item.info}</p>
                  {/* <ul className="mx-8 mb-2 list-disc text-gray-700 font-semibold text-smml-5 mt-3 marker:text-orange-500">
                    {item.info.map((x, index) => (
                      <li className="mt-1" key={index}>
                        {x}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
              <div className="flex max-w-[378px]">
                <Image
                  className="rounded-r-lg object-cover"
                  src={item.banner}
                  layout="intrinsic"
                  width={412}
                  height={320}
                />
              </div>
            </div>
          )
        )}
      </div>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
