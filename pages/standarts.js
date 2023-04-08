import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { Collapse } from "@nextui-org/react";

export async function getStaticProps({ locale }) {
  const simpleStandarts = (await import(`../translations/standarts/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;

  const final = { ...simpleStandarts, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: simpleStandarts.standarts.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("standarts");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services_list = [
    {
      our_services: [t("our_service_desc"), t("our_service_desc1"), t("our_service_desc2")],
      banner: "/images/staff-search.jpg",
      desc: t("staffSearch_desc"),
    },
    {
      category: t("staffLeasing_title"),
      banner: "/images/staff-leasing.jpg",
      desc: t("leasing_desc"),
      info: [t("leasing_info1"), t("leasing_info2")],
      args: [t("leasing_info1_arg1"), t("leasing_info1_arg2"), t("leasing_info1_arg3"), t("leasing_info1_arg4")],
      args1: [t("leasing_info1_arg5"), t("leasing_info1_arg6"), t("leasing_info1_arg7"), t("leasing_info1_arg8")],
    },
    {
      category: t("staffEvaluation_title"),
      banner: "/images/staff-evaluation.jpg",
      desc: t("staffEvaluation_desc"),
    },
    {
      category: t("marketResearch_title"),
      banner: "/images/market-research.jpg",
      desc: t("marketResearch_desc"),
    },
    {
      category: t("staffAdministration_title"),
      banner: "/images/staff-administration.jpg",
      desc: t("staffAdministration_desc"),
      info: [t("staffAdministration_info")],
      args: [t("administration_arg1"), t("administration_arg2"), t("administration_arg3"), t("administration_arg4"), t("administration_arg5"), t("administration_arg6"), t("administration_arg7"), t("administration_arg8"), t("administration_arg9"), t("administration_arg10")],
    },
    {
      category: t("compStructuring_title"),
      banner: "/images/comp-structuring.jpg",
      info: [t("compStructuring_desc")],
      args: [t("compStructuring_arg1"), t("compStructuring_arg2"), t("compStructuring_arg3"), t("compStructuring_arg4"), t("compStructuring_arg5"), t("compStructuring_arg6"), t("compStructuring_arg7")],
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/standarts-background.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className="text-2xl md:text-5xl font-bold text-orange-400">{t("heroTitle")}</div>
          <div className="text-lg md:text-2xl font-semibold tracking-widest mx-auto max-w-4xl">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mt-16 mb-10">{t("our_works")}</h1>
        {services_list[0].our_services.map((desc, index) => (
          <p key={index} className="text-2xl font-semibold mx-[10%] mb-6">{desc}</p>
        ))}
        <ul className="mb-16 text-2xl font-semibold mx-[12%]">
          <li>&#9658; {t("our_service_desc3")}</li>
          <li>&#9658; {t("our_service_desc4")}</li>
        </ul>
      </div>
      {/* <Collapse.Group>
        <div className="flex flex-row justify-center gap-10 px-8 mb-8 flex-wrap">
          {services_list.map((item, index) => (
            <div key={index} className="rounded-xl bg-white active:bg-gray-200 w-full md:w-[68%] lg:w-[43%] xl:w-[41%] 2xl:w-[610px] scale-100 duration-150 hover:scale-105">
              <div className="flex flex-col">
                <Image src={item.banner} className="rounded-t-xl" layout="intrinsic" width={412} height={360} objectFit="cover" />
              </div>
              <Collapse className="font-bold text-2xl" title={item.category} shadow="true">
                <p className="indent-5 font-bold text-gray-700 text-left">{item.desc}</p>
                {item["info"] && item["info"].length > 1 ? (
                  <div>
                    <p className="indent-5 font-bold text-gray-700">{item.info[0]}</p>
                    <ul className="font-semibold text-gray-700 list-disc marker: marker:text-orange-500">
                      {item.args.map((arg, index) => (
                        <li className="ml-12" key={index}>
                          {arg}
                        </li>
                      ))}
                    </ul>
                    <p className="indent-5 font-bold text-gray-700">{item.info[1]}</p>
                    <ul className="font-semibold text-gray-700 list-disc marker: marker:text-orange-500">
                      {item.args.map((arg, index) => (
                        <li className="ml-12" key={index}>
                          {arg}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : item["args"] ? (
                  <div>
                    <p className="indent-5 font-bold text-gray-700">{item.info[0]}</p>
                    <ul className="font-semibold text-gray-700 list-disc marker: marker:text-orange-500">
                      {item.args.map((arg, index) => (
                        <li className="ml-12" key={index}>
                          {arg}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </Collapse>
            </div>
          ))}
        </div>
      </Collapse.Group> */}
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
