import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const simpleProject = (await import(`../translations/project/${locale}.json`))
    .default;
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;

  const final = { ...simpleProject, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: simpleProject.project.htmlTitle,
    },
  };
}

export default function Finance() {
  const t = useTranslations("project");
  const h = useTranslations("header");
  const f = useTranslations("footer");
  const c = useTranslations("contact");

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/project-background.png">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className="text-2xl md:text-5xl font-bold text-orange-400 mx-3">
            {t("heroTitle")}
          </div>
          <div className="text-lg md:text-2xl font-semibold tracking-normal mx-5 max-w-4xl mb-8 lg:mb-0 md:mx-auto">
            {t("heroSubtitle")}
          </div>
        </div>
      </ParticlesHero>

      <div className="flex flex-col items-center justify-center gap-4 w-11/12 mt-16 mx-auto lg:flex-row">
        <Image
          src="/images/projects-image.jpg"
          objectFit="cover"
          className="rounded-lg"
          width={600}
          height={400}
        />
        <div className="flex flex-col mt-6 lg:ml-4 lg:mr-4 lg:w-1/2 gap-4">
          <div className="text-justify font-semibold indent-4 text-lg tracking-tight">
            {t("heroText")}
          </div>
        </div>
      </div>

      <h1 className="text-center text-3xl lg:text-4xl font-bold my-10">
        {t("our_works")}
      </h1>

      <div className="flex flex-col w-[95%] max-w-[95%] mx-auto mb-16 lg:w-11/12 lg:max-w-[1300px]">
        <div className="flex flex-col-reverse rounded-xl shadow-2xl mb-16 lg:flex-row ">
          <div className="mx-3 mb-6 self-center lg:ml-8 lg:w-[45%] tracking-tight ">
            <h1 className="text-center mt-2 text-2xl font-bold mb-4">
              {t("researchTitle")}
            </h1>
            <div className="text-justify indent-4 font-semibold">
              {t("researchText")}
            </div>
          </div>
          <div className="xl:mx-auto lg:my-8 lg:mr-6 flex">
            <Image
              src="/images/pexels-lukas.jpg"
              objectFit="cover"
              width={600}
              height={400}
              className="rounded-t-lg lg:rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col rounded-xl shadow-2xl lg:flex-row">
          <div className="lg:my-8 lg:ml-8 flex">
            <Image
              src="/images/pexels-andrea-piacquadio-3760529.jpg"
              objectFit="cover"
              width={600}
              height={400}
              className="rounded-t-lg lg:rounded-lg"
            />
          </div>
          <div className="self-center mx-6 mb-6 lg:mr-8 lg:ml-6 lg:w-[60%] tracking-tight">
            <h1 className="text-center mt-2 text-2xl font-bold mb-4">
              {t("projectManagementTitle")}
            </h1>
            <div className="text-justify indent-4 font-semibold">
              {t("projectManagementText")}
            </div>
            <div className="text-justify indent-4 font-semibold">
              {t("projectManagementText2")}
            </div>
            <div className="text-justify indent-4 font-semibold">
              {t("projectManagementText3")}
            </div>
          </div>
        </div>
      </div>

      <ContactForm t={c} h={h} />
    </Layout>
  );
}
