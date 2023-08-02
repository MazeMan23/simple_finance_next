import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import { Collapse, Avatar } from "@nextui-org/react";

export async function getStaticProps({ locale }) {
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;
  const insurance = (await import(`../translations/insurance/${locale}.json`)).default;

  const final = { ...insurance, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: insurance.insurance.htmlTitle,
    },
  };
}

export default function Translate() {
  const t = useTranslations("insurance");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services_list = [
    {
      title: t("insurancePortfolioTitle"),
      text: t("insurancePortfolioText"),
      textArgs: [
        t("insurancePortfolioTextArg"),
        t("insurancePortfolioTextArg1"),
        t("insurancePortfolioTextArg2"),
        t("insurancePortfolioTextArg3"),
        t("insurancePortfolioTextArg4"),
      ],
      img: "/images/investment-portfolio.jpg",
    },
    {
      title: t("materialBaseTitle"),
      text: t("materialBaseText"),
      img: "/images/analysis.jpg",
    },
    {
      title: t("propInsuranceTitle"),
      text: t("propInsuranceText"),
      service: t("propInsuranceService"),
      args: [t("propInsuranceArg"), t("propInsuranceArg1")],
      img: "/images/property-insurance.jpg",
    },
    {
      title: t("financialRisksTitle"),
      text: t("financialRisksText"),
      textArgs: [t("financialRisksTextArg"), t("financialRisksTextArg1"), t("financialRisksTextArg2")],
      service: t("financialRisksService"),
      args: [
        t("financialRisksArg"),
        t("financialRisksArg1"),
        t("financialRisksArg2"),
        t("financialRisksArg3"),
        t("financialRisksArg4"),
        t("financialRisksArg5"),
      ],
      img: "/images/financial-risk.jpg",
    },
    {
      title: t("responsibilitiesTitle"),
      text: t("responsibilitiesText"),
      textArgs: [
        t("responsibilitiesTextArg"),
        t("responsibilitiesTextArg1"),
        t("responsibilitiesTextArg2"),
        t("responsibilitiesTextArg3"),
        t("responsibilitiesTextArg4"),
      ],
      img: "/images/liability-insurance.jpg",
    },
    {
      title: t("healthInsuranceTitle"),
      text: t("healthInsuranceText"),
      text2: t("healthInsuranceText2"),
      service: t("healthInsuranceService"),
      addit: t("healthInsuranceAddit"),
      img: "/images/health-insurance.jpg",
    },
    {
      title: t("lawsuitsTitle"),
      text: t("lawsuitsText"),
      service: t("lawsuitsService"),
      args: [t("lawsuitsArg"), t("lawsuitsArg1"), t("lawsuitsArg2"), t("lawsuitsArg3"), t("lawsuitsArg4")],
      img: "/images/lawsuit.jpg",
    },
    {
      title: t("constructionRisksTitle"),
      text: t("constructionRisksText"),
      service: t("constructionRisksService"),
      args: [
        t("constructionRisksArg"),
        t("constructionRisksArg1"),
        t("constructionRisksArg2"),
        t("constructionRisksArg3"),
        t("constructionRisksArg4"),
      ],
      img: "/images/workers.jpg",
    },
    {
      title: t("agriculturalInsuranceTitle"),
      text: t("agriculturalInsuranceText"),
      textArgs: [t("agriculturalInsuranceTextArg"), t("agriculturalInsuranceTextArg1")],
      service: t("agriculturalInsuranceService"),
      args: [
        t("agriculturalInsuranceArg"),
        t("agriculturalInsuranceArg1"),
        t("agriculturalInsuranceArg2"),
        t("agriculturalInsuranceArg3"),
        t("agriculturalInsuranceArg4"),
        t("agriculturalInsuranceArg5"),
        t("agriculturalInsuranceArg6"),
        t("agriculturalInsuranceArg7"),
        t("agriculturalInsuranceArg8"),
      ],
      img: "/images/AGRICULTURE-INSURANCE.png",
    },
    {
      title: t("marineInsuranceTitle"),
      text: t("marineInsuranceText"),
      img: "/images/marine-insurance.jpg",
    },
    {
      title: t("cargoInsuranceTitle"),
      text: t("cargoInsuranceText"),
      img: "/images/cargo.jpg",
    },
    {
      title: t("insurancePolicyTitle"),
      text: t("insurancePolicyText"),
      img: "/images/insurance-policy.jpg",
    },
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/insurance-bg.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-2xl md:text-5xl max-w-4xl font-bold">{t("heroTitle")}</div>
          <div className="text-xl font-bold max-w-3xl">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <Collapse.Group splitted>
        <div className="text-center text-xl tracking-tight lg:text-2xl py-6 px-[15%] bg-slate-100 mx-[-20px]">
          {t("our_services")}
        </div>
        <div className="grid grid-cols-1 gap-x-12 mt-2 pb-12 px-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10">
          {services_list.map((item, index) => (
            <div key={index} className="scale-100 hover:scale-105 duration-200 drop-shadow-xl">
              <Collapse
                title={item.title}
                className="text-lg font-semibold"
                contentLeft={<Avatar src={item.img} css={{ size: "$20" }} />}
              >
                <div className="mb-2">{item.text}</div>
                {item.textArgs ? (
                  <ul className="mb-2">
                    {item.textArgs.map((arg, index) => (
                      <li key={index} className="ml-5">
                        &#x2705; {arg}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
                {item.text2 ? <div className="mb-2">{item.text2}</div> : <></>}
                {item.service ? <p className="mb-2">{item.service}</p> : <></>}
                {item.args ? (
                  <ul className="list-disc marker:text-orange-500">
                    {item.args.map((arg, index) => (
                      <li key={index} className="ml-5">
                        {arg}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
                {item.addit ? <p className="mt-2">{item.addit}</p> : <></>}
              </Collapse>
            </div>
          ))}
        </div>
      </Collapse.Group>
      <ContactForm t={c} h={h} />
    </Layout>
  );
}
