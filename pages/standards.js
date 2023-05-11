import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { Collapse } from "@nextui-org/react";

export async function getStaticProps({ locale }) {
  const simpleStandards = (await import(`../translations/standards/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;

  const final = { ...simpleStandards, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: simpleStandards.standards.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("standards");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const ourWorks_info = {
    our_services: [t("our_service_desc"), t("our_service_desc1")],
  };

  const certificates_list = [
    {
      category: t("title_9001"),
      banner: "/images/ISO_9001-2015.jpg",
      desc: t("9001_desc"),
      benefit: t("9001_benefit"),
      args: [t("9001_arg"), t("9001_arg1"), t("9001_arg2")],
    },
    {
      category: t("title_14001"),
      banner: "/images/ISO-14001.png",
      desc: t("14001_desc"),
      benefit: t("14001_benefit"),
      args: [
        t("14001_arg"),
        t("14001_arg1"),
        t("14001_arg2"),
        t("14001_arg3"),
        t("14001_arg4"),
        t("14001_arg5"),
        t("14001_arg6"),
        t("14001_arg7"),
        t("14001_arg8"),
        t("14001_arg9"),
        t("14001_arg10"),
        t("14001_arg11"),
      ],
    },
    {
      category: t("title_45001"),
      banner: "/images/Iso-45001.png",
      desc: t("45001_desc"),
      benefit: t("45001_benefit"),
      args: [t("45001_arg"), t("45001_arg1"), t("45001_arg2"), t("45001_arg3"), t("45001_arg4")],
    },
    {
      category: t("title_20000"),
      banner: "/images/ISO-20000.png",
      desc: t("20000_desc"),
    },
    {
      category: t("title_27001"),
      banner: "/images/ISO-27001.png",
      desc: t("27001_desc"),
      benefit: t("27001_benefit"),
      args: [
        t("27001_arg"),
        t("27001_arg1"),
        t("27001_arg2"),
        t("27001_arg3"),
        t("27001_arg4"),
        t("27001_arg5"),
        t("27001_arg6"),
      ],
    },
    {
      category: t("title_39001"),
      banner: "/images/ISO-39001.png",
      benefit: t("39001_benefit"),
      desc: t("39001_desc"),
      args: [
        t("39001_arg"),
        t("39001_arg1"),
        t("39001_arg2"),
        t("39001_arg3"),
        t("39001_arg4"),
        t("39001_arg5"),
        t("39001_arg6"),
        t("39001_arg7"),
        t("39001_arg8"),
        t("39001_arg9"),
        t("39001_arg10"),
        t("39001_arg11"),
      ],
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/ISO-Certification.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className="text-2xl md:text-5xl font-bold text-orange-400 mx-3">{t("heroTitle")}</div>
          <div className="text-lg md:text-2xl font-semibold tracking-normal mx-5 max-w-4xl md:mx-auto">
            {t("heroSubtitle")}
          </div>
        </div>
      </ParticlesHero>
      <div className="flex flex-col justify-center text-center my-5 md:my-10">
        {ourWorks_info.our_services.map((desc, index) => (
          <p key={index} className="text-xs font-semibold mx-[10%] mb-6 md:text-xl xl:text-2xl">
            {desc}
          </p>
        ))}
      </div>
      <Collapse.Group>
        <div className="flex flex-row justify-center gap-10 px-8 mb-8 flex-wrap">
          {certificates_list.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white active:bg-gray-200 w-full md:w-[68%] lg:w-[47%] xl:w-[45%] 2xl:w-[47%]"
            >
              <Collapse
                className="font-semibold text-xs md:text-xl scale-100 hover:scale-105"
                title={item.category}
                shadow="true"
                contentLeft={
                  <Image src={item.banner} className="rounded-t-xl" objectFit="cover" width={180} height={180} />
                }
              >
                <p className="mb-3 indent-5 text-xs font-bold text-gray-700 text-justify md:text-xl">{item.desc}</p>
                {item["benefit"] ? (
                  <div>
                    <p className="indent-5 text-xs font-bold text-gray-700 md:text-xl">{item.benefit}</p>
                    <ul className="font-semibold text-xs text-gray-700 list-disc marker:text-orange-500 md:text-xl">
                      {item.args.map((arg, index) => (
                        <li className="ml-10" key={index}>
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
      </Collapse.Group>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
