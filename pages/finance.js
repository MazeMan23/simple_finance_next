import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Grid, Avatar } from "@nextui-org/react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const finance = (await import(`../translations/finance/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;

  const final = { ...finance, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: finance.finance.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("finance");
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
      <ParticlesHero img="/images/simple_finance.png">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className=" text-2xl md:text-5xl font-bold">{t("heroTitle")}</div>
          <div className="text-xl md:text-4xl font-bold">{t("heroSubtitle1")}</div>
          <div className="text-lg md:text-xl font-semibold tracking-widest">{t("heroSubtitle2")}</div>
        </div>
      </ParticlesHero>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-semibold">{t("servicesTitle")}</h1>
        <p className=" mt-2 text-center lg:ml-64 lg:mr-64">{t("serviceSubtitle")}</p>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1">
            <Grid.Container gap={2}>
              <Grid>
                <Collapse.Group splitted>
                  <Collapse
                    title={t("accounting_title")}
                    contentLeft={<Avatar src="/images/acc_av.jpg" size="xl" className="!z-0" />}
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
                    contentLeft={<Avatar src="/images/jws.jpg" size="xl" className="!z-0" />}
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
                  <Collapse
                    title={t("legal_title")}
                    contentLeft={<Avatar src="/images/jwstreet.jpg" size="xl" className="!z-0" />}
                  >
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <li className="mt-1">{t("legal1")}</li>
                      <li className="mt-1">{t("legal2")}</li>
                      <li className="mt-1">{t("legal3")}</li>
                      <li className="mt-1">{t("legal4")}</li>
                      <li className="mt-1">{t("legal5")}</li>
                      <li className="mt-1">{t("legal6")}</li>
                      <li className="mt-1">{t("legal7")}</li>
                      <li className="mt-1">{t("legal8")}</li>
                    </ul>
                  </Collapse>
                  <Collapse
                    contentLeft={<Avatar src="/images/taxes.jpg" size="xl" className="!z-0" />}
                    title={t("tax_title")}
                    size="xl"
                  >
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <li className="mt-1">{t("tax1")}</li>
                      <li className="mt-1">{t("tax2")}</li>
                      <li className="mt-1">{t("tax3")}</li>
                      <li className="mt-1">{t("tax4")}</li>
                      <li className="mt-1">{t("tax5")}</li>
                      <li className="mt-1">{t("tax6")}</li>
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
                    contentLeft={<Avatar src="/images/valuation.jpg" size="xl" className="!z-0" />}
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
                    contentLeft={<Avatar src="/images/audit.jpg" size="xl" className="!z-0" />}
                  >
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <li className="mt-1">{t("audit1")}</li>
                      <li className="mt-1">{t("audit2")}</li>
                      <li className="mt-1">{t("audit3")}</li>
                    </ul>
                  </Collapse>
                  <Collapse title={t("hr")} contentLeft={<Avatar src="/images/ppl.jpg" size="xl" className="!z-0" />}>
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <li className="mt-1">{t("hr1")}</li>
                      <li className="mt-1">{t("hr2")}</li>
                      <li className="mt-1">{t("hr3")}</li>
                      <li className="mt-1">{t("hr4")}</li>
                      <li className="mt-1">{t("hr5")}</li>
                    </ul>
                  </Collapse>
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold	mt-10">{t("our_works")}</h1>
          <p className="my-4">{t("our_works_desc")}</p>
          <div className="flex flex-row justify-center gap-4 px-8 mb-4 flex-wrap">
            {services_list.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white active:bg-gray-200  w-full md:w-[48%] lg:w-[23%] shadow-xl"
              >
                <div className="flex flex-col justify-between gap-2">
                  <Image src={item.banner} className="rounded-t-xl" layout="intrinsic" width={317} height={369} />
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
      </div>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
