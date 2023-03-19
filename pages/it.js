import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Grid, Avatar, Modal } from "@nextui-org/react";
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
      title: it.it.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("it");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");
  const [erpOpen, setErpOpen] = React.useState(false);
  const [baOpen, setBaOpen] = React.useState(false);
  const [bsOpen, setBsOpen] = React.useState(false);

  const services_list = [
    {
      category: t("erpTitle"),
      banner: "/images/microsoft.avif",
      desc1: t("erpTitle1"),
      desc2: t("erpTitle2"),
      desc3: t("erpTitle3"),
      desc4: t("erpTitle4"),
      desc5: t("erpTitle5"),
      desc6: t("erpTitle6"),
      desc7: t("erpTitle7"),
    },
    {
      category: t("baTitle"),
      banner: "/images/office.png",
      desc1: t("ba1_title"),
      desc2: t("ba2_title"),
      desc3: t("ba3_title"),
      desc4: t("ba4_title"),
      desc5: t("ba5_title"),
      desc6: t("ba6_title"),
      desc7: t("ba7_title"),
      desc8: t("ba8_title"),
      desc9: t("ba9_title"),
    },
    {
      category: t("business_services"),
      banner: "/images/3cx.jpg",
      desc1: t("bs1_title"),
      desc2: t("bs2_title"),
      desc3: t("bs3_title"),
      desc4: t("bs4_title"),
      desc5: t("bs5_title"),
      desc6: t("bs6_title"),
      desc7: t("bs7_title"),
      desc8: t("bs8_title"),
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
        <div className="flex flex-col slef-center items-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="w-1/4 hidden lg:flex">
              <Image
                src="/images/it.jpg"
                width={6144}
                height={4069}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col items-center ml-4 mr-4 lg:w-1/2 gap-4">
              <h1 className="text-2xl md:text-4xl font-bold text-center">
                {t("services")}
              </h1>
              <p className="text-center text-lg">{t("general")}</p>
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
                    <Avatar className="!z-0" src="/images/it4.png" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-white">
                    <li className="mt-1">{t("roadmap1")}</li>
                    <br />
                    <li className="mt-1">{t("roadmap2")}</li>
                    <br />
                    <li className="mt-1">{t("roadmap3")}</li>
                  </ul>
                </Collapse>
                <Collapse
                  title={t("innovation")}
                  contentLeft={
                    <Avatar className="!z-0" src="/images/3cx.png" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-white">
                    <li className="mt-1">{t("innovation1")}</li>
                    <br />
                    <li className="mt-1">{t("innovation2")}</li>
                  </ul>
                </Collapse>
                <Collapse
                  title={t("mobile")}
                  contentLeft={
                    <Avatar
                      className="!z-0"
                      src="/images/mobile.jpg"
                      size="xl"
                    />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-white">
                    <li className="mt-1">{t("mobile1")}</li>
                    <br />
                    <li className="mt-1">{t("mobile2")}</li>
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
                    <Avatar className="!z-0" src="/images/it3.png" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-white">
                    <li className="mt-1">{t("relations1")}</li>
                    <br />
                    <li className="mt-1">{t("relations2")}</li>
                    <br />
                    <li className="mt-1">{t("relations3")}</li>
                    <br />
                    <li className="mt-1">{t("relations4")}</li>
                    <br />
                    <li className="mt-1">{t("relations5")}</li>
                  </ul>
                </Collapse>
                <Collapse
                  title={t("tc")}
                  contentLeft={
                    <Avatar className="!z-0" src="/images/web.webp" size="xl" />
                  }
                >
                  <ul className="list-disc ml-5 mt-5 marker:text-white">
                    <li className="mt-1">{t("tc1")}</li>
                  </ul>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <Modal
        open={erpOpen}
        width="95%"
        onClose={() => {
          setErpOpen(false);
        }}
      >
        <Modal.Header>
          <p className="text-xl font-bold">{t("erpTitle")}</p>
        </Modal.Header>
        <Modal.Body>
          <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
            <li className="mt-1">{t("erp1")}</li>
            <br />
            <li className="mt-1">{t("erp2")}</li>
            <br />
            <li className="mt-1">{t("erp3")}</li>
            <br />
            <li className="mt-1">{t("erp4")}</li>
            <br />
            <li className="mt-1">{t("erp5")}</li>
            <br />
            <li className="mt-1">{t("erp6")}</li>
            <br />
            <li className="mt-1">{t("erp7")}</li>
          </ul>
        </Modal.Body>
      </Modal>
      <Modal
        open={baOpen}
        width="95%"
        onClose={() => {
          setBaOpen(false);
        }}
      >
        <Modal.Header>
          <p className="text-xl font-bold">{t("baTitle")}</p>
        </Modal.Header>
        <Modal.Body>
          <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-white">
            <li className="mt-1">{t("ba1")}</li>
            <br />
            <li className="mt-1">{t("ba2")}</li>
            <br />
            <li className="mt-1">{t("ba3")}</li>
            <br />
            <li className="mt-1">{t("ba4")}</li>
            <br />
            <li className="mt-1">{t("ba5")}</li>
            <br />
            <li className="mt-1">{t("ba6")}</li>
            <br />
            <li className="mt-1">{t("ba7")}</li>
            <br />
            <li className="mt-1">{t("ba8")}</li>
            <br />
            <li className="mt-1">{t("ba9")}</li>
          </ul>
        </Modal.Body>
      </Modal>
      <Modal
        open={bsOpen}
        width="95%"
        onClose={() => {
          setBsOpen(false);
        }}
      >
        <Modal.Header>
          <p className="text-xl font-bold">{t("business_services")}</p>
        </Modal.Header>
        <Modal.Body>
          <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
            <li className="mt-1">{t("bs1")}</li>
            <br />
            <li className="mt-1">{t("bs2")}</li>
            <br />
            <li className="mt-1">{t("bs3")}</li>
            <br />
            <li className="mt-1">{t("bs4")}</li>
            <br />
            <li className="mt-1">{t("bs5")}</li>
            <br />
            <li className="mt-1">{t("bs6")}</li>
            <br />
            <li className="mt-1">{t("bs7")}</li>
            <br />
            <li className="mt-1">{t("bs8")}</li>
          </ul>
        </Modal.Body>
      </Modal>
      <div className="flex flex-col items-center">
        <div className="mt-8 flex flex-row items-center justify-center gap-4 px-8 mb-4 flex-wrap">
          {services_list.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white w-full md:w-[90%] lg:w-[30%] lg:h-[56rem] shadow-xl hover:cursor-pointer"
            >
              <div
                className="flex flex-col justify-between gap-2"
                onClick={() => {
                  if (item.category == t("erpTitle")) {
                    setErpOpen(true);
                  } else if (item.category == t("baTitle")) {
                    setBaOpen(true);
                  } else {
                    setBsOpen(true);
                  }
                }}
              >
                <div className="w-fit">
                  <Image
                    src={item.banner}
                    className="rounded-t-xl"
                    layout="intrinsic"
                    width={1920}
                    height={720}
                  />
                </div>
                <h1 className=" mt-4 ml-4 text-lg font-semibold">
                  {item.category}
                </h1>
                <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
                  <li className="mt-1">{item.desc1}</li>
                  <br />
                  <li className="mt-1">{item.desc2}</li>
                  <br />
                  <li className="mt-1">{item.desc3}</li>
                  <br />
                  <li className="mt-1">{item.desc4}</li>
                  <br />
                  <li className="mt-1">{item.desc5}</li>
                  <br />
                  <li className="mt-1">{item.desc6}</li>
                  <br />
                  {item.category == "Предимства на Microsoft Office 365" ||
                  item.category == t("business_services") ? (
                    <li className="mt-1">{item.desc7}</li>
                  ) : null}
                  <br />
                  {item.category == "Предимства на Microsoft Office 365" ||
                  item.category == t("business_services") ? (
                    <li className="mt-1">{item.desc8}</li>
                  ) : null}
                  <br />
                  {item.category == "Предимства на Microsoft Office 365" ? (
                    <li className="mt-1">{item.desc9}</li>
                  ) : null}
                </ul>
                <p className="font-bold ml-8">{t("learnMore")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
