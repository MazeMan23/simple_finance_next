import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const simpleValue = (await import(`../translations/value/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;

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
      banner: "/images/plants.jpg",
      info: [t("agr")],
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/simple-value-dark-t.jpg">
        <div className="flex flex-col justify-center items-center text-center text-white">
          <div className="text-lg md:text-2xl font-semibold max-w-4xl mx-5">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <h1 className="text-center text-3xl font-bold my-10 mx-5 md:text-4xl">{t("our_works")}</h1>
      <div className="flex flex-col items-center justify-center flex-wrap gap-5 px-5 mb-10 lg:flex-row">
        {services_list.map((item, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center rounded-xl bg-white shadow-xl w-[82%] lg:w-[80%] xl:w-[49%] xl:min-h-[428px] 2xl:min-h-[356px]"
            >
              <div className="flex flex-col md:flex-row">
                <Image
                  className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  src={item.banner}
                  objectFit="cover"
                  layout="intrinsic"
                  width={412}
                  height={320}
                />
              </div>
              <div className="md:mx-auto md:max-w-[48%] my-auto">
                <h1 className="font-bold text-2xl text-center">{item.category}</h1>
                <div className="flex flex-col justify-center">
                  <ul className="mx-8 mb-2 mt-3 text-gray-700 font-semibold text-smml-5 list-none">
                    {item.info.map((x, index) => (
                      <li className="mt-1" key={index}>
                        &#x2705; {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex flex-col-reverse md:flex-row md:justify-between rounded-xl bg-white shadow-xl w-[82%] lg:w-[80%] xl:w-[49%] xl:min-h-[428px] 2xl:min-h-[356px]"
            >
              <div className="ml-5 md:mx-auto md:max-w-[48%] my-auto">
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-2xl text-center">{item.category}</h1>
                  <ul className="mx-8 mb-2 text-gray-700 font-semibold text-smml-5 mt-3 list-none">
                    {item.info.map((x, index) => (
                      <li className="mt-1" key={index}>
                        &#x2705; {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <Image
                  className="rounded-b-xl md:rounded-l-none md:rounded-r-xl"
                  src={item.banner}
                  objectFit="cover"
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
