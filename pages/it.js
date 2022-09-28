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
  const it = (await import(`../translations/it/${locale}.json`)).default;

  const final = { ...it, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
    },
  };
}

export default function Finance() {
  const t = useTranslations("it");
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
      <ParticlesHero img="/images/simple_it.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-2xl md:text-5xl max-w-4xl font-bold">
            {t("title")}
          </div>
          <div className="text-xl font-bold max-w-3xl">{t("subtitle")}</div>
        </div>
      </ParticlesHero>
      <section className="py-5  sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-2xl text-center self-center font-bold">
            {t("servicesTitle")}
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-2">
            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  src="/images/icons/rocket.png"
                  className="text-blue-100"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Roadmap</h3>
              <p className="mt-4 text-base text-gray-600">{t("service1")}</p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  src="/images/icons/chat.png"
                  className="text-blue-100"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Customer Experience
              </h3>
              <p className="mt-4 text-base text-gray-600">{t("service2")}</p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  src="/images/icons/chart.png"
                  className="text-blue-100"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Operational excellence
              </h3>
              <p className="mt-4 text-base text-gray-600">{t("service3")}</p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  src="/images/icons/boy.png"
                  className="text-blue-100"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Trust & Compliance
              </h3>
              <p className="mt-4 text-base text-gray-600">{t("service4")}</p>
            </div>
          </div>
        </div>
      </section>
      <div></div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-1">
          <Grid.Container gap={2}>
            <Grid>
              <Collapse.Group splitted>
                <Collapse
                  title={t("roadmap")}
                  contentLeft={
                    <Avatar className="!z-0" src="/images/it4.jpg" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("roadmap1")}</li>
                    <li className="mt-1">{t("roadmap2")}</li>
                    <li className="mt-1">{t("roadmap3")}</li>
                    <li className="mt-1">{t("roadmap4")}</li>
                  </ul>
                </Collapse>
                <Collapse
                  title={t("innovation")}
                  contentLeft={
                    <Avatar className="!z-0" src="/images/it2.jpg" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("innovation1")}</li>
                    <li className="mt-1">{t("innovation2")}</li>
                    <li className="mt-1">{t("innovation3")}</li>
                    <li className="mt-1">{t("innovation4")}</li>
                  </ul>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </div>
        <div className="flex flex-1">
          <Grid.Container gap={2}>
            <Grid>
              <Collapse.Group splitted>
                <Collapse
                  title={t("relations")}
                  contentLeft={
                    <Avatar className="!z-0" src="/images/it1.jpg" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("relations1")}</li>
                    <li className="mt-1">{t("relations2")}</li>
                  </ul>
                </Collapse>
                <Collapse
                  title={t("tc")}
                  contentLeft={
                    <Avatar className="!z-0" src="/images/it3.jpg" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("tc1")}</li>
                    <li className="mt-1">{t("tc2")}</li>
                  </ul>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
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
