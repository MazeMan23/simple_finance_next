import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Text, Grid, Avatar, Card, Row } from "@nextui-org/react";
import ContactForm from "../components/ContactForm";

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
      <ParticlesHero img="/images/simple_it.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-xl md:text-5xl max-w-4xl font-bold">
            {t("title")}
          </div>
          <div className="text-xl font-bold max-w-3xl">{t("subtitle")}</div>
        </div>
      </ParticlesHero>
      <section class="py-5  sm:py-8 lg:py-12">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-2xl text-center self-center font-bold">
            {t("servicesTitle")}
          </h1>

          <div class="mt-8 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-2">
            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  src="/images/icons/rocket.png"
                  class="text-blue-100"
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">Roadmap</h3>
              <p class="mt-4 text-base text-gray-600">{t("service1")}</p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  src="/images/icons/chat.png"
                  class="text-blue-100"
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Customer Experience
              </h3>
              <p class="mt-4 text-base text-gray-600">{t("service2")}</p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  src="/images/icons/chart.png"
                  class="text-blue-100"
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Operational excellence
              </h3>
              <p class="mt-4 text-base text-gray-600">{t("service3")}</p>
            </div>

            <div>
              <div class="relative flex items-center justify-center mx-auto">
                <img
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  src="/images/icons/boy.png"
                  class="text-blue-100"
                />
              </div>
              <h3 class="mt-8 text-lg font-semibold text-black">
                Trust & Compliance
              </h3>
              <p class="mt-4 text-base text-gray-600">{t("service4")}</p>
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
                  contentLeft={<Avatar src="/images/acc_av.jpg" size="xl" />}
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("accounting2")}</li>
                    <li className="mt-1">{t("accounting3")}</li>
                    <li className="mt-1">{t("accounting4")}</li>
                    <li className="mt-1">{t("accounting5")}</li>
                    <li className="mt-1">{t("accounting6")}</li>
                    <li className="mt-1">{t("accounting7")}</li>
                    <li className="mt-1">{t("accounting8")}</li>
                    <li className="mt-1">{t("accounting1")}</li>
                  </ul>
                </Collapse>
                <Collapse
                  title={t("financial_title")}
                  contentLeft={<Avatar src="/images/jws.jpg" size="xl" />}
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("financial1")}</li>
                    <li className="mt-1">{t("financial2")}</li>
                    <li className="mt-1">{t("financial3")}</li>
                    <li className="mt-1">{t("financial4")}</li>
                    <li className="mt-1">{t("financial5")}</li>
                    <li className="mt-1">{t("financial6")}</li>
                    <li className="mt-1">{t("financial7")}</li>
                    <li className="mt-1">{t("financial8")}</li>
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
                  title={t("business_val_title")}
                  contentLeft={<Avatar src="/images/valuation.jpg" size="xl" />}
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("business_val1")}</li>
                    <li className="mt-1">{t("business_val2")}</li>
                    <li className="mt-1">{t("business_val3")}</li>
                    <li className="mt-1">{t("business_val4")}</li>
                    <li className="mt-1">{t("business_val5")}</li>
                    <li className="mt-1">{t("business_val6")}</li>
                    <li className="mt-1">{t("business_val7")}</li>
                  </ul>
                </Collapse>
                <Collapse
                  title={t("audit")}
                  contentLeft={<Avatar src="/images/audit.jpg" size="xl" />}
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{t("audit1")}</li>
                    <li className="mt-1">{t("audit2")}</li>
                    <li className="mt-1">{t("audit3")}</li>
                  </ul>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </Layout>
  );
}
