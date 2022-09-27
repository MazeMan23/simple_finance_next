import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Card, Grid, Row, Text } from "@nextui-org/react";

export async function getStaticProps({ locale }) {
  const index = (await import(`../translations/index/${locale}.json`)).default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;

  const final = { ...index, ...header, ...footer };

  return {
    props: {
      messages: final,
    },
  };
}

export default function Index() {
  const t = useTranslations("index");
  const h = useTranslations("header");
  const f = useTranslations("footer");

  const services_list = [
    {
      title: h("finance"),
      img: "/images/service_finance.jpg",
      banner: "/images/simple_finance.jpg",
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
  ];

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/main-bg.jpeg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className="text-4xl font-bold">{t("heroTitle")}</div>
          <div className="text-2xl font-semibold tracking-widest">
            {t("heroSubtitle")}
          </div>
        </div>
      </ParticlesHero>
      <div className="bg-slate-100">
        <div className="flex flex-col mr-3 ml-3 mt-3 lg:flex-row md:mr-20 md:ml-20 md:mt-20">
          <div className="flex flex-1 lg:hidden">
            <img src="images/growth.svg" />
          </div>
          <div className="flex flex-col flex-1">
            <h1 className="mt-5 text-3xl font-semibold	">
              {t("whoAreWeTitle")}
            </h1>
            <p className="mt-3">{t("whoAreWe")}</p>
            <ul className="list-disc ml-5 mt-5  marker:text-orange-500">
              <li className="mb-2">{t("whatWeDo")}</li>
              <li className="mb-2">{t("ourMission")}</li>
            </ul>
          </div>
          <div className="hidden self-center lg:flex lg:flex-1 lg:justify-center">
            <img src="images/growth.svg" className="ml-10 max-w-3xl" />
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold	mt-10 mb-3">
            {t("servicesTitle")}
          </h1>{" "}
          <Grid.Container gap={2} justify="flex-start">
            {services_list.map((item, index) => (
              <Grid xs={16} sm={3} key={index}>
                <a href={"/" + item.url}>
                  <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={item.banner}
                        objectFit="cover"
                        width="100%"
                        height={300}
                        alt={item.url}
                      />
                      <div className="flex flex-row ml-3 mt-3">
                        <img
                          className=" h-12 w-12 circle_image"
                          src={item.img}
                          alt={item.title}
                        />
                        <Text className="mt-2 ml-2">{item.title}</Text>
                      </div>
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                      <Row
                        wrap="wrap"
                        justify="space-between"
                        align="center"
                        className=" items-center"
                      >
                        <Text
                          css={{
                            color: "$accents7",
                            fontWeight: "$semibold",
                            fontSize: "$sm",
                          }}
                        >
                          {item.desc}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid.Container>{" "}
        </div>
        <form class="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
          <div className=" flex items-center justify-center">
            <h1 class="text-3xl font-bold dark:text-gray-50 text-center">
              {t("contact")}
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="hidden lg:flex lg:flex-1 lg:flex-col">
              <h1 className="ml-48 mt-6 font-semibold text-lg">
                {t("address_title")}
              </h1>
              <p className="ml-48 mt-1">{t("address")}</p>
              <h1 className="ml-48 mt-6 font-semibold text-lg">E-mail:</h1>
              <p className="ml-48 mt-1">office@simplefinance.net</p>
              <h1 className="ml-48 mt-6 font-semibold text-lg">
                {t("phone_title")}
              </h1>
              <p className="ml-48 mt-1">+ 359 2 427 99 99</p>
            </div>
            <div className="flex flex-col flex-2">
              <div className="flex flex-2 flex-col flex-2">
                <label
                  for="fullname"
                  class="text-gray-500 font-light mt-8 dark:text-gray-50"
                >
                  {t("name")}
                  <span class="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />

                <label
                  for="email"
                  class="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                  E-mail<span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />

                <label
                  for="subject"
                  class="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                  {t("subject")}
                  <span class="text-red-500">*</span>
                </label>
                <select className="mt-2 bg-transparent border-b py-2 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500">
                  <option>{h("finance")}</option>
                  <option>{h("legal")}</option>
                  <option>{h("it")}</option>
                  <option>{h("marketing")}</option>
                </select>
                <label
                  for="message"
                  class="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                  {t("message")}
                  <span class="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                ></textarea>
                <div class="flex flex-row items-center justify-end">
                  <button class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                    {t("send")}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="text-cyan-500 ml-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
