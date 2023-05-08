import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const index = (await import(`../translations/index/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;

  const final = { ...index, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: index.index.htmlTitle,
    },
  };
}

export default function Index() {
  const t = useTranslations("index");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services_list = [
    {
      title: h("finance"),
      img: "/images/service_finance.jpg",
      banner: "/images/simple_finance.png",
      desc: t("service_fin"),
      url: "finance",
    },
    {
      title: h("it"),
      img: "/images/service_it.png",
      banner: "/images/simple_it.jpg",
      desc: t("service_it"),
      url: "it",
    },
    {
      title: h("legal"),
      img: "/images/service_law.jpg",
      banner: "/images/simple_law.jpg",
      desc: t("service_law"),
      url: "legal",
    },
    {
      title: h("marketing"),
      img: "/images/service_market.png",
      banner: "/images/simple_marketing.jpg",
      desc: t("service_mar"),
      url: "marketing",
    },
    {
      title: h("hr"),
      img: "/images/hr.png",
      banner: "/images/hr-background.jpg",
      desc: t("service_hr"),
      url: "hr",
    },
    {
      title: h("standard"),
      img: "/images/standarts.png",
      banner: "/images/standards-background.jpg",
      desc: t("service_stand"),
      url: "standards",
    },
    {
      title: h("valuation"),
      img: "/images/service_value.png",
      banner: "/images/simple-value-dark-t.jpg",
      desc: t("service_val"),
      url: "value",
    },
    {
      title: h("translation"),
      img: "/images/SimpleTRANSLATE.png",
      banner: "/images/translate.jpg",
      desc: t("translate"),
      url: "translate",
    },
    {
      title: h("project"),
      img: "/images/service_project.png",
      banner: "/images/project-background.png",
      desc: t("project"),
      url: "project",
    },
    {
      title: h("insurance"),
      img: "/images/insurance-cut.png",
      banner: "/images/insurance-bg.jpg",
      desc: t("insurance"),
      url: "insurance",
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/main-bg.jpg">
        <div className="flex flex-col justify-center text-center tracking-tight text-white gap-4">
          <div className="text-2xl font-bold animate-slideToL">
            {t("heroTitle")}
          </div>
          <div className="text-2xl font-semibold tracking-widest animate-slideToL">
            {t("heroSubtitle")}
          </div>
          <div className="text-sm text-justify indent-5 font-semibold animate-slideToR mx-[5%] lg:text-xl 2xl:text-2xl">
            {t("whoAreWe")}
          </div>
        </div>
      </ParticlesHero>
      {/* <div style={{ backgroundColor: "#F8FCFD" }}>
        <div className="flex mr-3 ml-3 flex-row md:mr-20 md:ml-20">
          <div className="flex flex-col">
            <h1 className="mt-5 text-3xl font-semibold">
              {t("whoAreWeTitle")}
            </h1>
            <p className="mt-3">{t("whoAreWe")}</p>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <h2 className="text-xl font-bold text-black">
                {t("whatWeDoTitle")}
              </h2>
              <li className="mb-2 mt-2 ml-8">{t("whatWeDo")}</li>
              <h2 className="text-xl font-bold text-black">
                {t("ourMissionTitle")}
              </h2>
              <li className="mb-2 mt-2 ml-8">{t("ourMission")}</li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="bg-slate-100">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold	mt-10 mb-3">
            {t("servicesTitle")}
          </h1>
          <div className="flex flex-row justify-center gap-4 px-8 mb-4 flex-wrap">
            {services_list.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white active:bg-gray-200  w-full md:w-[48%] lg:w-[23%] shadow-xl hover:cursor-pointer hover:shadow-2xl scale-100 duration-150 hover:scale-105"
              >
                <Link href={`/${item.url}`}>
                  <div className="flex flex-col justify-between gap-2">
                    <Image
                      src={item.banner}
                      className="rounded-t-xl"
                      layout="intrinsic"
                      objectFit="cover"
                      width={1920}
                      height={697}
                    />
                    <div className="flex flex-row justify-start items-center mt-2 p-4 pb-0 h-[5rem]">
                      <div className="w-[15%] flex flex-col justify-center">
                        <Image
                          src={item.img}
                          className="rounded-lg bg-[#11213E]"
                          layout="intrinsic"
                          width={1000}
                          height={999}
                        />
                      </div>
                      <p className="ml-2 text-2xl w-[85%]">{item.title}</p>
                    </div>
                    <p className="text-gray-700 font-semibold text-sm mt-2 p-4">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
