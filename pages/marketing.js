import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Grid, Avatar } from "@nextui-org/react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;
  const it = (await import(`../translations/marketing/${locale}.json`)).default;

  const final = { ...it, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
    },
  };
}

export default function Marketing() {
  const t = useTranslations("marketing");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services_list = [
    {
      category: t("erpTitle"),
      banner: "/images/it4.jpg",
      desc1: t("erp1"),
      desc2: t("erp2"),
      desc3: t("erp3"),
    },
    {
      category: t("ba_title"),
      banner: "/images/it2.jpg",
      desc1: t("ba1"),
      desc2: t("ba2"),
      desc3: t("ba3"),
    },
    {
      category: t("business_services"),
      banner: "/images/it3.jpg",
      desc1: t("bs1"),
      desc2: t("bs2"),
      desc3: t("bs3"),
    },
    {
      category: t("consulting"),
      banner: "/images/it1.jpg",
      desc1: t("consulting1"),
      desc2: t("consulting2"),
      desc3: t("consulting3"),
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/simple_marketing.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-2xl md:text-5xl max-w-4xl font-bold">
            {t("title")}
          </div>
          <div className="text-xl font-bold max-w-3xl">{t("subtitle")}</div>
        </div>
      </ParticlesHero>
      <div className="bg-slate-100">
        <div className="flex mr-3 ml-3 mt-3 flex-row md:mr-20 md:ml-20 md:mt-20">
          <div className="flex flex-col">
            <div className="flex lg:hidden self-center max-w-[90vw]">
              <img src="/images/marketing.png" />
            </div>
            <h1 className="mt-5 text-3xl font-semibold">
              {t("whoAreWeTitle")}
            </h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("whatWeDo")}</li>
              <li className="mb-2">{t("ourMission")}</li>
              <li className="mb-2">{t("whatWeDo")}</li>
              <li className="mb-2">{t("ourMission")}</li>
            </ul>
            <h1 className="mt-5 text-3xl font-semibold">
              {t("whoAreWeTitle")}
            </h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("whatWeDo")}</li>
              <li className="mb-2">{t("ourMission")}</li>
              <li className="mb-2">{t("whatWeDo")}</li>
            </ul>
          </div>
          <div className="hidden self-center lg:flex justify-center">
            <img
              src="/images/marketing.png"
              className="ml-10 mb-10 max-w-3xl"
            />
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-row">
          <Image
            src="/images/m1.png"
            width={969}
            height={723}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold mt-10 text-center">
          {t("works")}
        </h1>
        <div className="mt-8 flex flex-row justify-center gap-4 px-8 mb-4 flex-wrap">
          {services_list.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white active:bg-gray-200  w-full md:w-[48%] lg:w-[23%] shadow-xl"
            >
              <div className="flex flex-col justify-between gap-2">
                <div className=" w-fit">
                  <Image
                    src={item.banner}
                    className="rounded-t-xl"
                    layout="intrinsic"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h1 className=" mt-4 ml-4 text-lg font-semibold">
                  {item.category}
                </h1>
                <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
                  <li className="mt-1">{item.desc1}</li>
                  <li className="mt-1">{item.desc2}</li>
                  <li className="mt-1">{item.desc3}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
