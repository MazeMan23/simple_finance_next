import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import { Image, Card, Text } from "@nextui-org/react";

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

  const offices_list = [
    {
      title: t("grafix"),
      img: "/images/grafix.jpeg",
      location: t("grafixLocation")
    },
    {
      title: t("europark"),
      img: "/images/europark.jpeg",
      location: t("europarkLocation")
    },
    {
      title: t("tetrix"),
      img: "/images/tetrix.jpeg",
      location: t("tetrixLocation")
    },
    {
      title: t("tower"),
      img: "/images/iztok_tower.jpeg",
      location: t("towerLocation")
    },
  ]

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

      <div className="grid grid-cols-2 gap-12 justify-center mx-[18%] my-16">
        {offices_list.map((office, index) =>
          <Card key={index}>
            <Card.Image
              src={office.img}
              objectFit="cover"
              width="100%"
              height={340}
              alt="Office image"
            />
            <div className="absolute bottom-[51px] w-screen py-2 bg-blue-900/70">
              <Text size={26} className="uppercase font-bold text-slate-100 ml-4">
                {office.title}
              </Text>
            </div>
            <div className="flex py-3 bg-orange-400">
              <div className="ml-3">
                <Image
                  src="/images/location-pin.png"
                  width={25}
                  height={25} />
              </div>
              <div className="text-lg font-semibold ml-2 text-white">
                {office.location}
              </div>
            </div>
          </Card>
        )}
      </div>

      <ContactForm t={c} h={h} />
    </Layout >
  );
}
