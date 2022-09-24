import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";

export async function getStaticProps({ locale }) {
  const index = (await import(`../translations/index/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;

  const final = { ...index, ...header, ...footer };

  return {
    props: {
      messages: final,
    },
  };
}

export default function Home() {
  const t = useTranslations("index");
  const h = useTranslations("header");
  const f = useTranslations("footer");

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/main-bg.jpeg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className="text-4xl font-bold">{t("heroTitle")}</div>
          <div className="text-2xl font-semibold tracking-widest">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
    </Layout>
  );
}
