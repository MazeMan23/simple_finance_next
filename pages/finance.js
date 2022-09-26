import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Collapse, Text, Grid, Avatar } from "@nextui-org/react";

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

  return (
    <Layout h={h} f={f}>
      <ParticlesHero img="/images/simple_finance.jpg">
        <div className="flex flex-col justify-center text-center text-white gap-4">
          <div className=" text-6xl font-bold">{t("heroTitleFinance")}</div>
          <div className="text-4xl font-bold">{t("heroSubtitle1Finance")}</div>
          <div className="text-xl font-semibold tracking-widest">
            {t("heroSubtitle2Finance")}
          </div>
        </div>
      </ParticlesHero>
      <div className="flex flex-row">
        <div className="flex flex-1">
          <Grid.Container gap={2}>
            <Grid>
              <Collapse.Group splitted>
                <Collapse title="Option A">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
                <Collapse title="Option B">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
                <Collapse title="Option C">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
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
                  title="Option A"
                  contentLeft={<Avatar src="images/simple_law.jpg" size="xl" />}
                >
                  <img src="images/simple_law.jpg" />
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
                <Collapse title="Option B">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
                <Collapse title="Option C">
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </Layout>
  );
}
