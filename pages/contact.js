import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Pagination } from "@nextui-org/react";
import { Partner } from "../components/Partner";
import ContactForm from "../components/ContactForm";

export async function getStaticProps({ locale }) {
  const contact = (await import(`../translations/contact/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;

  const final = { ...contact, ...header, ...footer };

  return {
    props: {
      messages: final,
    },
  };
}

export default function Index() {
  const t = useTranslations("contact");
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
          <div className=" text-2xl md:text-5xl font-bold">{t("heroTitle")}</div>
          <div className="text-lg md:text-xl font-semibold tracking-widest">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <ContactForm t={t} h={h} />
      <div className="flex flex-col mb-16">
        <div className="flex flex-col md:flex-row md:mt-8 md:mb-8">
          <Partner className="flex flex-1" />
          <Partner className="flex flex-1" />
          <Partner className="flex flex-1" />
          <Partner className="flex flex-1 ml-8 mr-8" />
        </div>
        <Pagination className="self-center" shadow color="warning" onlyDots total={8} loop initialPage={1} />
      </div>
    </Layout>
  );
}
