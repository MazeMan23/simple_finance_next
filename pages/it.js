import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Text, Grid, Avatar, Card, Row } from "@nextui-org/react";
import ContactForm from "../components/ContactForm";

export async function getStaticProps({ locale }) {
  const index = (await import(`../translations/finance/${locale}.json`))
    .default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;
  const it = (await import(`../translations/contact/${locale}.json`)).default;

  const final = { ...index, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
    },
  };
}
