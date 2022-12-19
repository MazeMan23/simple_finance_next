import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { Avatar, Card, Collapse, Grid, Modal } from "@nextui-org/react";

export async function getStaticProps({ locale }) {
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;
  const marketing = (await import(`../translations/marketing/${locale}.json`))
    .default;

  const final = { ...marketing, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: marketing.marketing.htmlTitle,
    },
  };
}

export default function Marketing() {
  const [research, setResearch] = React.useState(false);
  const [strategy, setStrategy] = React.useState(false);
  const [analysis, setAnalysis] = React.useState(false);

  const t = useTranslations("marketing");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const projects = [
    {
      url: "/images/marketing1.jpg",
      title: t("seo_title"),
      subtitle: t("seo_sub"),
      desc1: t("seo_desc1"),
      desc2: t("seo_desc2"),
    },
    {
      url: "/images/marketing2.jpg",
      title: t("fb_title"),
      subtitle: t("fb_sub"),
      desc1: t("fb_desc1"),
      desc2: t("fb_desc2"),
    },
    {
      url: "/images/marketing3.jpg",
      title: t("ga_title"),
      subtitle: t("ga_sub"),
      desc1: t("ga_desc1"),
      desc2: t("ga_desc2"),
    },
    {
      url: "/images/marketing4.jpg",
      title: t("sm_title"),
      subtitle: t("sm_sub"),
      desc1: t("sm_desc1"),
      desc2: t("sm_desc2"),
    },
  ];

  const services = [
    {
      url: "/images/m1.png",
      title: "Social Media",
      desc: t("soc_desc2"),
    },
    {
      url: "/images/pexels-andrea-piacquadio-840996.jpg",
      title: t("ga"),
      desc: t("ga_desc"),
    },
    {
      url: "/images/m5.png",
      title: t("blog"),
      desc: t("blog_desc"),
    },
    {
      url: "/images/pexels-dominika-roseclay-905.jpg",
      title: t("web_content"),
      desc: t("web_desc"),
    },
  ];

  const services2 = [
    {
      url: "/images/m2.png",
      title: "YouTube",
      desc: t("yt_desc"),
    },
    {
      url: "/images/pexels-liza-summer-6347919.jpg",
      title: t("email_campaign"),
      desc: t("email_campaign_desc"),
    },
    {
      url: "/images/m6.png",
      title: t("email_campaign2"),
      desc: t("email_campaign_desc2"),
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/simple_marketing.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-2xl md:text-5xl max-w-4xl font-bold">
            {t("heroTitle")}
          </div>
          <div className="text-xl font-bold max-w-3xl">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <div className="bg-slate-100 pb-8">
        <div className="flex mr-3 ml-3 mt-3 flex-col md:flex-row md:mr-20 md:ml-20 md:mt-20 md:gap-12">
          <video autoPlay muted loop className="lg:w-1/2 rounded-xl">
            <source src="/images/marketing.mp4" />
          </video>
          <div className="flex flex-col">
            <h1 className="mt-5 text-3xl font-semibold">{t("what")}</h1>
            <h1 className="mt-5 text-2xl text-gray-700 font-semibold">
              {t("consultative")}
            </h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("consultative_desc")}</li>
            </ul>
            <h1 className="mt-5 text-2xl text-gray-700 font-semibold">
              {t("precise")}
            </h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("precise_desc")}</li>
            </ul>
            <h1 className="mt-5 text-2xl text-gray-700 font-semibold">
              {t("customer")}
            </h1>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("customer_desc")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center my-8 gap-8">
        <h1 className="my-5 text-5xl font-semibold">{t("services")}</h1>
        <div className="flex flex-col lg:flex-row gap-8 ml-8 mr-8">
          <Modal
            blurred
            open={strategy}
            onClose={() => setStrategy(false)}
            width="90%"
          >
            <Modal.Header>
              <span className=" text-xl font-bold">
                {t("marketing_strategy")}
              </span>
            </Modal.Header>
            <Modal.Body>
              <span className=" text-sm md:text-lg  text-center">
                {t("marketing_strategy_desc")}
              </span>
            </Modal.Body>
          </Modal>
          <Card isHoverable isPressable onPress={() => setStrategy(true)}>
            <Card.Header>
              <span className=" text-xl font-bold">
                {t("marketing_strategy")}
              </span>
            </Card.Header>
            <Card.Body>
              <img
                className=" rounded-xl lg:flex self-center"
                src="/images/marketing_start.jpg"
                height={200}
                width={600}
              />
            </Card.Body>
            <Card.Footer className="font-bold text-md">
              {t("moreInfo")}
            </Card.Footer>
          </Card>
          <Modal
            blurred
            open={research}
            onClose={() => setResearch(false)}
            width="90%"
          >
            <Modal.Header>
              <span className=" text-xl font-bold">{t("market_research")}</span>
            </Modal.Header>
            <Modal.Body>
              <span className=" text-sm md:text-lg ">
                {t("market_research_desc")}
              </span>
              <br />
              <ul>
                <li className="text-sm md:text-lg">
                  ❖ {t("market_research_desc_desc")}
                </li>
                <br />
                <li className="text-sm md:text-lg">
                  ❖ {t("customer_research")}
                </li>
                <br />
                <li className="text-sm md:text-lg">
                  ❖ {t("product_research")}
                </li>
                <br />
                <li className="text-sm md:text-lg">❖ {t("user_research")}</li>
              </ul>
            </Modal.Body>
          </Modal>
          <Card isHoverable isPressable onPress={() => setResearch(true)}>
            <Card.Header>
              <span className=" text-xl font-bold">{t("market_research")}</span>
            </Card.Header>
            <Card.Body>
              <img
                className="rounded-xl lg:flex self-center"
                src="/images/market_research.jpg"
                height={200}
                width={600}
              />
            </Card.Body>
            <Card.Footer className="font-bold text-md">
              {t("moreInfo")}
            </Card.Footer>
          </Card>
          <Modal
            blurred
            open={analysis}
            onClose={() => setAnalysis(false)}
            width="90%"
          >
            <Modal.Header>
              <span className=" text-xl font-bold">{t("pest")}</span>
            </Modal.Header>
            <Modal.Body>
              <span className=" text-sm md:text-lg text-center">
                {t("pest_desc")}
              </span>
            </Modal.Body>
          </Modal>
          <Card isHoverable isPressable onPress={() => setAnalysis(true)}>
            <Card.Header>
              <span className=" text-xl font-bold">{t("pest")}</span>
            </Card.Header>
            <Card.Body>
              <img
                className="rounded-xl lg:flex self-center"
                src="/images/pest.jpg"
                height={200}
                width={600}
              />
            </Card.Body>
            <Card.Footer className="font-bold text-md">
              {t("moreInfo")}
            </Card.Footer>
          </Card>
        </div>
        <br />
        <h1 className="my-5 text-5xl font-semibold ml-5 text-center">
          {t("digital_marketing")}
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1">
            <Grid.Container gap={2}>
              <Grid>
                <Collapse.Group splitted>
                  <Collapse
                    title="Digital Marketing Strategy"
                    contentLeft={
                      <Avatar className="!z-0" src="/images/m1.jpg" size="xl" />
                    }
                  >
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <p>{t("digital_marketing_desc")}</p>
                      <br />
                      <li className="mt-1">{t("online_presence")}</li>
                      <li className="mt-1">{t("digital_space")}</li>
                      <li className="mt-1">{t("keyword")}</li>
                    </ul>
                  </Collapse>
                  <Collapse
                    title="Web Design"
                    contentLeft={
                      <Avatar className="!z-0" src="/images/m2.jpg" size="xl" />
                    }
                  >
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <p>{t("web_design")}</p>
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
                    title="Branding and Brand Identity"
                    contentLeft={
                      <Avatar className="!z-0" src="/images/m3.jpg" size="xl" />
                    }
                  >
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <p>{t("branding")}</p>
                    </ul>
                  </Collapse>
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </div>
        </div>
        <h1 className="my-5 text-4xl font-semibold ml-5 mr-5">
          Content Marketing
        </h1>
        <p className="self-center md:w-1/2 text-center ml-5 mr-5">
          {t("content_marketing")}
        </p>
        <br />
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <Grid.Container gap={2}>
              <Grid className="flex flex-col gap-12 lg:gap-2 lg:flex-row">
                <Collapse.Group splitted className="gap-8 ml-8 mr-8">
                  {services.map((item, index) => (
                    <Collapse
                      key={index}
                      title={
                        <span className="font-semibold">{item.title}</span>
                      }
                      contentLeft={
                        <Avatar className="!z-0" src={item.url} size="xl" />
                      }
                    >
                      {item.desc}
                    </Collapse>
                  ))}
                </Collapse.Group>
                <Collapse.Group splitted className="gap-8 ml-8 mr-8">
                  {services2.map((item, index) => (
                    <Collapse
                      key={index}
                      title={
                        <span className="font-semibold">{item.title}</span>
                      }
                      contentLeft={
                        <Avatar className="!z-0" src={item.url} size="xl" />
                      }
                    >
                      {item.desc}
                    </Collapse>
                  ))}
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </div>
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
              className="rounded-xl flex flex-1 bg-white active:bg-gray-200 shadow-xl"
            >
              <div className="flex flex-col gap-2">
                <Image
                  src={item.url}
                  className="rounded-t-xl"
                  layout="intrinsic"
                  objectFit="cover"
                  width={1000}
                  height={500}
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
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
