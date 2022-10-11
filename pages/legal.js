import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Grid, Avatar } from "@nextui-org/react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const legal = (await import(`../translations/legal/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;

  const final = { ...legal, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: legal.legal.htmlTitle,
    },
  };
}

export default function Legal() {
  const t = useTranslations("legal");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services = [
    {
      url: "/images/icons/chart.png",
      title: t("companies"),
      points: new Array(13)
        .fill(undefined)
        .map((val, index) => t(`companies_${index + 1}`)),
    },
    {
      url: "/images/icons/file.png",
      title: t("transactions"),
      points: new Array(3)
        .fill(undefined)
        .map((val, index) => t(`transactions_${index + 1}`)),
    },
    {
      url: "/images/icons/dollar.png",
      title: t("banks"),
      points: new Array(6)
        .fill(undefined)
        .map((val, index) => t(`banks_${index + 1}`)),
    },
    {
      url: "/images/icons/boy.png",
      title: t("procurement"),
      points: new Array(4)
        .fill(undefined)
        .map((val, index) => t(`procurement_${index + 1}`)),
    },
    {
      url: "/images/icons/tools.png",
      title: t("labour"),
      points: new Array(7)
        .fill(undefined)
        .map((val, index) => t(`labour_${index + 1}`)),
    },
    {
      url: "/images/icons/shield.png",
      title: t("law"),
      points: new Array(5)
        .fill(undefined)
        .map((val, index) => t(`law_${index + 1}`)),
    },
  ];

  const projects = [
    {
      url: "/images/legal1.jpg",
      title: t("acc_title"),
      subtitle: t("acc_sub"),
      desc1: t("acc_desc1"),
      desc2: t("acc_desc2"),
    },
    {
      url: "/images/legal2.jpg",
      title: t("fin_title"),
      subtitle: t("fin_sub"),
      desc1: t("fin_desc1"),
      desc2: t("fin_desc2"),
    },
    {
      url: "/images/legal3.jpg",
      title: t("con_title"),
      subtitle: t("con_sub"),
      desc1: t("con_desc1"),
      desc2: t("con_desc2"),
    },
    {
      url: "/images/legal4.jpg",
      title: t("bus_title"),
      subtitle: t("bus_sub"),
      desc1: t("bus_desc1"),
      desc2: t("bus_desc2"),
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/law_hero.jpeg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className=" text-2xl md:text-5xl font-bold">
            {t("heroTitle")}
          </div>
          <div className="text-xl md:text-4xl font-bold">
            {t("heroSubtitle1")}
          </div>
          <div className="text-lg md:text-xl font-semibold tracking-widest">
            {t("heroSubtitle2")}
          </div>
        </div>
      </ParticlesHero>
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-row justify-center gap-10 flex-wrap mx-auto p-10 pt-5">
          <p className="lg:max-w-[30%]">{t("text1")}</p>
          <p className="lg:max-w-[30%]">{t("text2")}</p>
        </div>
        <h1 className="text-2xl font-semibold">{t("servicesTitle")}</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1">
            <Grid.Container gap={2}>
              <Grid>
                <Collapse.Group splitted>
                  {services.slice(0, 3).map((value, index) => (
                    <Collapse
                      key={index}
                      title={value.title}
                      contentLeft={
                        <Avatar src={value.url} size="xl" className="!z-0" />
                      }
                    >
                      <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                        {value.points.map((value, index) => (
                          <li key={index} className="mt-1">
                            {value}
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ))}
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </div>
          <div className="flex flex-1">
            <Grid.Container gap={2}>
              <Grid>
                <Collapse.Group splitted>
                  {services.slice(3, 6).map((value, index) => (
                    <Collapse
                      key={index}
                      title={value.title}
                      contentLeft={
                        <Avatar src={value.url} size="xl" className="!z-0" />
                      }
                    >
                      <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                        {value.points.map((value, index) => (
                          <li key={index} className="mt-1">
                            {value}
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ))}
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold	mt-10">{t("aboutTitle")}</h1>
          <p className="mt-4">{t("aboutSubtitle1")}</p>
          <p className="mb-4">{t("aboutSubtitle2")}</p>
          <div className="flex flex-row justify-center gap-4 px-8 mb-4 flex-wrap">
            {projects.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white active:bg-gray-200  w-full md:w-[48%] lg:w-[23%] shadow-xl"
              >
                <div className="flex flex-col justify-between gap-2">
                  <Image
                    src={item.url}
                    className="rounded-t-xl"
                    layout="intrinsic"
                    width={1000}
                    height={1000}
                  />
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
      </div>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
