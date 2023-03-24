import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Grid, Avatar } from "@nextui-org/react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const simpleValue = (await import(`../translations/value/${locale}.json`))
    .default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;

  const final = { ...simpleValue, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: simpleValue.value.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("value");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  const services_list = [
    {
      category: t("accounting_title"),
      banner: "/images/value-prop.jpg",
      desc1: t("acc1"),
      desc2: t("acc2"),
      desc3: t("acc3"),
    },
    {
      category: t("finance_tile"),
      banner: "/images/value-car.jpg",
      desc1: t("fin1"),
      desc2: t("fin2"),
      desc3: t("fin3"),
    },
    {
      category: t("consulting_title"),
      banner: "/images/value-nonmat.jpg",
      desc1: t("con1"),
      desc2: t("con2"),
      desc3: t("con3"),
    },
    {
      category: t("business_title"),
      banner: "/images/value-fin.jpg",
      desc1: t("bus1"),
      desc2: t("bus2"),
      desc3: t("bus3"),
    },
    {
      category: t("business_title"),
      banner: "/images/value-land.jpg",
      desc1: t("bus1"),
      desc2: t("bus2"),
      desc3: t("bus3"),
    },
  ];

  return (
    <Layout
      h={h}
      f={f}
    >
      <ParticlesHero img="/images/simple-value.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className=" text-2xl md:text-5xl font-bold text-orange-400">
            {t("heroTitle")}
          </div>
          <div className="text-lg md:text-2xl font-semibold tracking-widest">
            {t("heroSubtitle")}
          </div>
        </div>
      </ParticlesHero>
      <h1 className="flex justify-center text-4xl font-bold	mt-10 my-12">
        {t("our_works")}
      </h1>
      <div className="flex flex-row justify-center gap-12 px-8 mb-10 flex-wrap">
        {services_list.map((item, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="flex justify-start rounded-xl bg-white active:bg-gray-200 w-full md:w-[82%] lg:w-[63%] shadow-xl "
            >
              <div className="flex">
                <img
                  className="rounded-l-lg"
                  src={item.banner}
                  width={437}
                  height={369}
                />
              </div>
              <div>
                <div className="ml-24 my-12">
                  <h1 className="font-bold text-2xl ">Valuation on property</h1>
                  <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{item.desc1}</li>
                    <li className="mt-1">{item.desc2}</li>
                    <li className="mt-1">{item.desc3}</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between rounded-xl bg-white active:bg-gray-200 w-full md:w-[82%] lg:w-[63%] shadow-xl ">
              <div>
                <div className="ml-24 my-12">
                  <h1 className="font-bold text-2xl ">Valuation on property</h1>
                  <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
                    <li className="mt-1">{item.desc1}</li>
                    <li className="mt-1">{item.desc2}</li>
                    <li className="mt-1">{item.desc3}</li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <img
                  className="rounded-r-lg"
                  src={item.banner}
                  width={437}
                  height={369}
                />
              </div>
            </div>
          )
        )}
      </div>
      <ContactForm
        t={c}
        h={h}
      />
    </Layout>
  );
}

{
  /* <div className="flex flex-row justify-center gap-12 px-8 mb-10 flex-wrap">
            {services_list.map((item, index) => (
              <div
                key={index}
                className="flex justify-start rounded-xl bg-white active:bg-gray-200 w-full md:w-[82%] lg:w-[63%] shadow-xl "
              >
                <div>
                  <img
                    className="rounded-l-lg"
                    src={item.banner}
                    width={437}
                    height={369}
                  />
                </div>
                <div>
                  <div className="ml-24 my-12">
                    <h1 className="font-bold text-2xl ">
                      Valuation on property
                    </h1>
                    <ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
                      <li className="mt-1">{item.desc1}</li>
                      <li className="mt-1">{item.desc2}</li>
                      <li className="mt-1">{item.desc3}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))} */
}

//left-right img
// 1<div className="flex justify-start rounded-xl bg-white active:bg-gray-200 w-full md:w-[82%] lg:w-[63%] shadow-xl ">
// <div>
// 	<img
// 		className="rounded-l-lg"
// 		src={services_list[0].banner}
// 		width={437}
// 		height={369}
// 	/>
// </div>
// <div>
// 	<div className="ml-24 my-12">
// 		<h1 className="font-bold text-2xl ">Valuation on property</h1>
// 		<ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
// 			<li className="mt-1">{services_list[0].desc1}</li>
// 			<li className="mt-1">{services_list[0].desc2}</li>
// 			<li className="mt-1">{services_list[0].desc3}</li>
// 		</ul>
// 	</div>
// </div>
// </div>
// 2 <div className="flex justify-between rounded-xl bg-white active:bg-gray-200 w-full md:w-[82%] lg:w-[63%] shadow-xl ">
// <div>
// 	<div className="ml-24 my-12">
// 		<h1 className="font-bold text-2xl ">Valuation on property</h1>
// 		<ul className="px-8 mb-4 list-disc text-gray-700 font-semibold text-smml-5 mt-5 marker:text-orange-500">
// 			<li className="mt-1">{services_list[1].desc1}</li>
// 			<li className="mt-1">{services_list[1].desc2}</li>
// 			<li className="mt-1">{services_list[1].desc3}</li>
// 		</ul>
// 	</div>
// </div>
// <div>
// 	<img
// 		className="rounded-r-lg"
// 		src={services_list[1].banner}
// 		width={437}
// 		height={369}
// 	/>
// </div>
// </div>
