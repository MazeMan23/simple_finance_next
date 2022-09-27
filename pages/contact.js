import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
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

  const partners = [
    {
      name: "AllDigital",
      image: "/images/partners/ad.png",
    },
    {
      name: "Check Point",
      image: "/images/partners/checkpoint.png",
    },
    {
      name: "Crayon",
      image: "/images/partners/crayon.png",
    },
    {
      name: "Navtech",
      image: "/images/partners/navtech.png",
    },
    {
      name: "PolyComp",
      image: "/images/partners/polycomp.png",
    },
    {
      name: "TUV Rheinland",
      image: "/images/partners/tuv.png",
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
        <div className="text-center mb-8 text-2xl md:text-3xl font-bold">{t("partnerTitle")}</div>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {partners.map((p, i) => (
            <Partner image={p.image} text={p.name} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
