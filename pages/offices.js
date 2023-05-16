import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import { Image, Collapse, Avatar } from "@nextui-org/react";

export async function getStaticProps({ locale }) {
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;
  const offices = (await import(`../translations/offices/${locale}.json`)).default;

  const final = { ...offices, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: offices.offices.htmlTitle,
    },
  };
}

export default function Translate() {
  const t = useTranslations("offices");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/offices.png">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className="h-48 w-48 self-center">
            <Image
              src="/images/offices_logo.png"
              width={250}
              height={250}
              alt="Simple Offices Logo"
            />
          </div>
          <div className=" text-2xl md:text-4xl max-w-4xl font-bold tracking-tight">{t("heroTitle")}</div>
        </div>
      </ParticlesHero>
      <div className="flex flex-col items-center text-xl px-[6%] pt-12 pb-6 gap-2 text-justify tracking-tight">
        <div className="font-semibold">{t("textTitle")}</div>
        <div className="">{t("text")}</div>
        <div className="font-semibold">{t("finalText")}</div>
      </div>


      <ContactForm t={c} h={h} />
    </Layout>
  );
}
