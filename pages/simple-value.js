import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const simpleValue = (await import(`../translations/value/${locale}.json`))
    .default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;

  const final = { ...simpleValue, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: simpleValue.value.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("value");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services_list = [
    {
      category: t("property_title"),
      banner: "/images/value-prop.jpg",
      info: [t("prop1"), t("prop2"), t("prop3"), t("prop4")],
    },
    {
      category: t("movable_title"),
      banner: "/images/value-car.jpg",
      info: [t("mov1"), t("mov2"), t("mov3"), t("mov4"), t("mov5"), t("mov6")],
    },
    {
      category: t("intangible_title"),
      banner: "/images/value-nonmat.jpg",
      info: [t("intg1"), t("intg2"), t("intg3"), t("intg4"), t("intg5")],
    },
    {
      category: t("company_title"),
      banner: "/images/value-fin.jpg",
      info: [t("com1"), t("com2"), t("com3"), t("com4")],
    },
    {
      category: t("agricultur_title"),
      banner: "/images/value-land.jpg",
      info: [t("agr")],
    },
  ];

  return (
    <Layout
      h={h}
      f={f}
    >
      <ParticlesHero img="/images/simple-value.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className=" text-2xl md:text-5xl font-bold text-orange-400">
            {t("heroTitle")}
          </div>
          <div className="text-lg md:text-2xl font-semibold tracking-widest">
            {t("heroSubtitle")}
          </div>
        </div>
      </ParticlesHero>
      <h1 className="flex justify-center text-4xl font-bold	mt-10 my-12">
        {t("our_works")}
      </h1>
      <div className="flex flex-col items-center gap-12 px-8 mb-10">
        {services_list.map((item, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="flex justify-center items-stretch rounded-xl bg-white active:bg-gray-200 w-full max-w-5xl md:w-[82%] lg:w-[63%] shadow-xl "
            >
              <Image
                className="rounded-l-lg"
                src={item.banner}
                layout="intrinsic"
                width={437}
                height={320}
              />
              <div className="mx-auto max-w-md my-6">
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-2xl text-center">
                    {item.category}
                  </h1>
                  <ul className=" mx-8 mb-2 mt-3 list-disc text-gray-700 font-semibold text-smml-5 marker:text-orange-500">
                    {item.info.map((x) => (
                      <li className="mt-1">{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex justify-between items-stretch rounded-xl bg-white active:bg-gray-200 max-w-5xl md:w-[82%] lg:w-[63%] shadow-xl "
            >
              <div className="mx-auto max-w-md my-6">
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-2xl text-center">
                    {item.category}
                  </h1>
                  <ul className="mx-8 mb-2 list-disc text-gray-700 font-semibold text-smml-5 mt-3 marker:text-orange-500">
                    {item.info.map((x) => (
                      <li className="mt-1">{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Image
                className="rounded-r-lg"
                src={item.banner}
                layout="intrinsic"
                width={437}
                height={320}
              />
            </div>
          )
        )}
      </div>
      <ContactForm
        t={c}
        h={h}
      />
    </Layout>
  );
}
