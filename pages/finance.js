import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Text, Grid, Avatar, Card, Row } from "@nextui-org/react";
import { Partner } from "../components/Partner";

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
      <ParticlesHero img="/images/simple_finance.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className=" text-2xl md:text-5xl font-bold">
            {t("heroTitleFinance")}
          </div>
          <div className="text-xl md:text-4xl font-bold">
            {t("heroSubtitle1Finance")}
          </div>
          <div className="text-lg md:text-xl font-semibold tracking-widest">
            {t("heroSubtitle2Finance")}
          </div>
        </div>
      </ParticlesHero>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-semibold">{t("servicesTitle")}</h1>
        <p className=" mt-2 text-center lg:ml-64 lg:mr-64">
          {t("serviceSubtitle")}
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1">
            <Grid.Container gap={2}>
              <Grid>
                <Collapse.Group splitted>
                  <Collapse
                    title={t("accounting_title")}
                    contentLeft={
                      <Avatar
                        src="/images/acc_av.jpg"
                        size="xl"
                        className="  z-0"
                      />
                    }
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
                    contentLeft={
                      <Avatar
                        src="/images/jws.jpg"
                        size="xl"
                        className="  z-0"
                      />
                    }
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
                    contentLeft={
                      <Avatar
                        src="/images/jwstreet.jpg"
                        size="xl"
                        className="  z-0"
                      />
                    }
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
                    contentLeft={
                      <Avatar
                        src="/images/taxes.jpg"
                        size="xl"
                        className="  z-0"
                      />
                    }
                    title={t("tax_title")}
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
                    contentLeft={
                      <Avatar src="/images/valuation.jpg" size="xl" />
                    }
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
                    contentLeft={
                      <Avatar
                        src="/images/audit.jpg"
                        size="xl"
                        className="  z-0"
                      />
                    }
                  >
                    <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                      <li className="mt-1">{t("audit1")}</li>
                      <li className="mt-1">{t("audit2")}</li>
                      <li className="mt-1">{t("audit3")}</li>
                    </ul>
                  </Collapse>
                  <Collapse
                    title={t("hr")}
                    contentLeft={
                      <Avatar
                        src="/images/ppl.jpg"
                        size="xl"
                        className="  z-0"
                      />
                    }
                  >
                    <Text>
                      <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                        <li className="mt-1">{t("hr1")}</li>
                        <li className="mt-1">{t("hr2")}</li>
                        <li className="mt-1">{t("hr3")}</li>
                        <li className="mt-1">{t("hr4")}</li>
                        <li className="mt-1">{t("hr5")}</li>
                      </ul>
                    </Text>
                  </Collapse>
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold	mt-10 mb-3">{t("our_works")}</h1>
          <p>{t("our_works_desc")}</p>
          <Grid.Container gap={2} justify="flex-start">
            {services_list.map((item, index) => (
              <Grid xs={16} sm={3} key={index}>
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
                      <div className="flex flex-col">
                        <Text className="text-lg font-semibold">
                          {item.category}
                        </Text>
                      </div>
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
                        <ul className="list-disc ml-5 mt-5 marker:text-orange-500">
                          <li className="mt-1">{item.desc1}</li>
                          <li className="mt-1">{item.desc2}</li>
                          <li className="mt-1">{item.desc3}</li>
                        </ul>
                      </Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </div>
      </div>
      <form class="mt-5 rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
        <div className=" flex items-center justify-center">
          <h1 class="text-3xl font-bold dark:text-gray-50 text-center">
            {t("contact")}
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="hidden lg:flex lg:flex-1 lg:flex-col">
            <h1 className=" ml-36 mt-6 font-semibold text-lg">
              {t("address_title")}
            </h1>
            <p className="ml-36 mt-1 w-72">{t("address")}</p>
            <h1 className="ml-36 mt-6 font-semibold text-lg">E-mail:</h1>
            <p className="ml-36 mt-1">office@simplefinance.net</p>
            <h1 className="ml-36 mt-6 font-semibold text-lg">
              {t("phone_title")}
            </h1>
            <p className="ml-36 mt-1">+ 359 2 427 99 99</p>
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
    </Layout>
  );
}
