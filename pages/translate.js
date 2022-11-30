import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import {
  Textarea,
  Dropdown,
  Button,
  Text,
  useModal,
  Modal,
} from "@nextui-org/react";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const header = (await import(`../translations/header/${locale}.json`))
    .default;
  const footer = (await import(`../translations/footer/${locale}.json`))
    .default;
  const contact = (await import(`../translations/contact/${locale}.json`))
    .default;
  const translate = (await import(`../translations/translate/${locale}.json`))
    .default;

  const final = { ...translate, ...header, ...footer, ...contact };

  return {
    props: {
      messages: final,
      title: translate.translate.htmlTitle,
    },
  };
}

export default function Translate() {
  const t = useTranslations("translate");
  const h = useTranslations("header");
  const f = useTranslations("footer");

  const translator = require("deepl");

  const [selectedInput, setSelectedInput] = React.useState(
    new Set([t("selectLanguage")])
  );

  const selectedValueInput = React.useMemo(
    () => Array.from(selectedInput).join(", ").replaceAll("_", " "),
    [selectedInput]
  );

  const [selectedOutput, setSelectedOutput] = React.useState(
    new Set([t("selectLanguage")])
  );

  const selectedValueOutput = React.useMemo(
    () => Array.from(selectedOutput).join(", ").replaceAll("_", " "),
    [selectedOutput]
  );

  const [translationType, setTranslationType] =
    React.useState("textTranslation");

  const { setVisible, bindings } = useModal();

  const closeHandler = () => {
    setVisible(false);
  };

  const translate = async () => {
    const input = document.querySelector("#input").value;
    if (
      selectedValueInput == t("selectLanguage") ||
      selectedValueOutput == t("selectLanguage") ||
      selectedValueInput == selectedValueOutput ||
      input.length == 0
    ) {
      setVisible(true);
    } else {
      let inLang = "";
      let outLang = "";
      switch (selectedValueInput) {
        case t("bulgarian"):
          inLang = "BG";
          break;
        case t("chinese"):
          inLang = "ZH";
          break;
        case t("czech"):
          inLang = "CS";
          break;
        case t("danish"):
          inLang = "DA";
          break;
        case t("dutch"):
          inLang = "NL";
          break;
        case t("english"):
          inLang = "EN";
          break;
        case t("estonian"):
          inLang = "ET";
          break;
        case t("finnish"):
          inLang = "FI";
          break;
        case t("french"):
          inLang = "FR";
          break;
        case t("hungarian"):
          inLang = "HU";
          break;
        case t("german"):
          inLang = "DE";
          break;
        case t("greek"):
          inLang = "EL";
          break;
        case t("indonesian"):
          inLang = "ID";
          break;
        case t("italian"):
          inLang = "IT";
          break;
        case t("japanese"):
          inLang = "JA";
          break;
        case t("latvian"):
          inLang = "LV";
          break;
        case t("lithuanian"):
          inLang = "LT";
          break;
        case t("polish"):
          inLang = "PL";
          break;
        case t("portugese"):
          inLang = "PT";
          break;
        case t("romanian"):
          inLang = "RO";
          break;
        case t("russian"):
          inLang = "RU";
          break;
        case t("slovak"):
          inLang = "SK";
          break;
        case t("slovenian"):
          inLang = "SL";
          break;
        case t("swedish"):
          inLang = "SV";
          break;
        case t("spanish"):
          inLang = "ES";
          break;
        case t("turkish"):
          inLang = "TR";
          break;
        case t("ukranian"):
          inLang = "UK";
          break;
        default:
          inLang = undefined;
          break;
      }
      switch (selectedValueOutput) {
        case t("bulgarian"):
          outLang = "BG";
          break;
        case t("chinese"):
          outLang = "ZH";
          break;
        case t("czech"):
          outLang = "CS";
          break;
        case t("danish"):
          outLang = "DA";
          break;
        case t("dutch"):
          outLang = "NL";
          break;
        case t("english"):
          outLang = "EN";
          break;
        case t("estonian"):
          outLang = "ET";
          break;
        case t("finnish"):
          outLang = "FI";
          break;
        case t("french"):
          outLang = "FR";
          break;
        case t("hungarian"):
          outLang = "HU";
          break;
        case t("german"):
          outLang = "DE";
          break;
        case t("greek"):
          outLang = "EL";
          break;
        case t("indonesian"):
          outLang = "ID";
          break;
        case t("italian"):
          outLang = "IT";
          break;
        case t("japanese"):
          outLang = "JA";
          break;
        case t("latvian"):
          outLang = "LV";
          break;
        case t("lithuanian"):
          outLang = "LT";
          break;
        case t("polish"):
          outLang = "PL";
          break;
        case t("portugese"):
          outLang = "PT";
          break;
        case t("romanian"):
          outLang = "RO";
          break;
        case t("russian"):
          outLang = "RU";
          break;
        case t("slovak"):
          outLang = "SK";
          break;
        case t("slovenian"):
          outLang = "SL";
          break;
        case t("swedish"):
          outLang = "SV";
          break;
        case t("spanish"):
          outLang = "ES";
          break;
        case t("turkish"):
          outLang = "TR";
          break;
        case t("ukranian"):
          outLang = "UK";
          break;
        default:
          outLang = undefined;
          break;
      }
      translator({
        free_api: true,
        text: input,
        source_lang: inLang,
        target_lang: outLang,
        auth_key: "1595754f-3030-9c84-088b-43a925753bb9:fx",
      })
        .then((result) => {
          document.querySelector("#output").value =
            result.data.translations[0].text;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Layout h={h} f={f}>
      <Modal
        blur
        width="50%"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <div className="text-xl font-bold">{t("errorTitle")}</div>
        </Modal.Header>
        <Modal.Body>
          <div className="self-center">{t("errorMessage")}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            {t("closeButton")}
          </Button>
        </Modal.Footer>{" "}
      </Modal>
      <ParticlesHero img="/images/translate.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-2xl md:text-5xl max-w-4xl font-bold">
            {t("heroTitle")}
          </div>
          <div className="text-xl font-bold max-w-3xl">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <div className="flex flex-row mt-16 ml-4 md:ml-16">
        <Button
          shadow
          color="success"
          auto
          className="bg-green-500"
          onPress={() => setTranslationType("textTranslation")}
        >
          <Image
            src="/images/icons/text.png"
            width={30}
            height={30}
            className="!z-[30]"
          />
          {t("translateText")}
        </Button>
        <Button
          shadow
          color="warning"
          auto
          className="bg-yellow-500 ml-8"
          onPress={() => {
            setTranslationType("fileTranslation");
          }}
        >
          <Image src="/images/icons/file.png" width={30} height={30} />
          {t("translateFile")}
        </Button>
      </div>
      {translationType == "textTranslation" ? (
        <div className="flex flex-col">
          <div className="mt-4 ml-4 md:ml-16 mr-4 md:mr-16 flex flex-col md:flex-row">
            <div className="flex flex-1 mr-1 flex-col">
              <div className="flex self-start">
                <Dropdown className="flex self-start">
                  <Dropdown.Button flat color="primary">
                    {selectedValueInput}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedInput}
                    onSelectionChange={setSelectedInput}
                  >
                    <Dropdown.Section>
                      <Dropdown.Item key={t("selectLanguage")}>
                        {t("selectLanguage")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("bulgarian")}>
                        {t("bulgarian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("chinese")}>
                        {t("chinese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("czech")}>
                        {t("czech")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("danish")}>
                        {t("danish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("dutch")}>
                        {t("dutch")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("english")}>
                        {t("english")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("estonian")}>
                        {t("estonian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("finnish")}>
                        {t("finnish")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>
                      <Dropdown.Item key={t("french")}>
                        {t("french")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("german")}>
                        {t("german")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("greek")}>
                        {t("greek")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("hungarian")}>
                        {t("hungarian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("indonesian")}>
                        {t("indonesian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("italian")}>
                        {t("italian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("japanese")}>
                        {t("japanese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("latvian")}>
                        {t("latvian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("lithuanian")}>
                        {t("lithuanian")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>
                      <Dropdown.Item key={t("polish")}>
                        {t("polish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("portugese")}>
                        {t("portugese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("romanian")}>
                        {t("romanian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("russian")}>
                        {t("russian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("slovak")}>
                        {t("slovak")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("slovenian")}>
                        {t("slovenian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("spanish")}>
                        {t("spanish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("swedish")}>
                        {t("swedish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("turkish")}>
                        {t("turkish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("ukranian")}>
                        {t("ukranian")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="mt-4">
                <Textarea
                  className=""
                  shadow
                  name="input"
                  id="input"
                  bordered
                  rows={18}
                  width="100%"
                  color="primary"
                  placeholder={t("placeholderInput")}
                  status="default"
                  onchan
                />
              </div>
            </div>
            <div className="flex flex-1 ml-1 flex-col">
              <div className="flex self-start">
                <Dropdown className="flex self-start">
                  <Dropdown.Button flat color="primary">
                    {selectedValueOutput}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedOutput}
                    onSelectionChange={setSelectedOutput}
                  >
                    <Dropdown.Section>
                      <Dropdown.Item key={t("selectLanguage")}>
                        {t("selectLanguage")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("bulgarian")}>
                        {t("bulgarian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("chinese")}>
                        {t("chinese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("czech")}>
                        {t("czech")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("danish")}>
                        {t("danish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("dutch")}>
                        {t("dutch")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("english")}>
                        {t("english")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("estonian")}>
                        {t("estonian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("finnish")}>
                        {t("finnish")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>
                      <Dropdown.Item key={t("french")}>
                        {t("french")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("german")}>
                        {t("german")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("greek")}>
                        {t("greek")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("hungarian")}>
                        {t("hungarian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("indonesian")}>
                        {t("indonesian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("italian")}>
                        {t("italian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("japanese")}>
                        {t("japanese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("latvian")}>
                        {t("latvian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("lithuanian")}>
                        {t("lithuanian")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>
                      <Dropdown.Item key={t("polish")}>
                        {t("polish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("portugese")}>
                        {t("portugese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("romanian")}>
                        {t("romanian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("russian")}>
                        {t("russian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("slovak")}>
                        {t("slovak")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("slovenian")}>
                        {t("slovenian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("spanish")}>
                        {t("spanish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("swedish")}>
                        {t("swedish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("turkish")}>
                        {t("turkish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("ukranian")}>
                        {t("ukranian")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="mt-4">
                <Textarea
                  id="output"
                  name="output"
                  className="flex flex-1"
                  shadow
                  placeholder={t("placeholderOutput")}
                  bordered
                  width="100%"
                  rows={18}
                  readOnly
                  status="default"
                />
              </div>
            </div>
          </div>
          <div className="self-center mt-4  mb-16">
            <Button
              shadow
              color="primary"
              auto
              className="bg-blue-800"
              onPress={() => translate()}
            >
              {t("submitButton")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="mt-4 ml-4 md:ml-16 mr-4 md:mr-16 flex flex-col md:flex-row">
            <div className="flex flex-1 mr-1 flex-col">
              <div className="flex self-start">
                <Dropdown className="flex self-start w-96">
                  <Dropdown.Button flat disabled color="primary">
                    {t("detectLanguage")}
                  </Dropdown.Button>
                </Dropdown>
              </div>
              <div
                className="mt-4 border-2 rounded-lg w-fill h-full flex justify-center"
                style={{ borderColor: "#d9d9d9" }}
              >
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row self-center">
                    <img
                      className=" self-center"
                      width={320}
                      height={180}
                      src="/images/icons/files.png"
                    />
                  </div>
                  <Text className="text-blue-800 text-center" weight="bold">
                    {t("uploadText")}
                  </Text>
                  <Button
                    shadow
                    color="gradient"
                    auto
                    className="bg-blue-800 mt-4 mb-4 ml-4 mr-4"
                  >
                    {t("attachFile")}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 ml-1 flex-col mt-4 md:mt-0">
              <div className="flex self-start">
                <Dropdown className="flex self-start w-96">
                  <Dropdown.Button flat color="primary">
                    {selectedValueOutput}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedOutput}
                    onSelectionChange={setSelectedOutput}
                  >
                    <Dropdown.Section>
                      <Dropdown.Item key={t("selectLanguage")}>
                        {t("selectLanguage")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("bulgarian")}>
                        {t("bulgarian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("chinese")}>
                        {t("chinese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("czech")}>
                        {t("czech")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("danish")}>
                        {t("danish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("dutch")}>
                        {t("dutch")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("english")}>
                        {t("english")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("estonian")}>
                        {t("estonian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("finnish")}>
                        {t("finnish")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>
                      <Dropdown.Item key={t("french")}>
                        {t("french")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("german")}>
                        {t("german")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("greek")}>
                        {t("greek")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("hungarian")}>
                        {t("hungarian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("indonesian")}>
                        {t("indonesian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("italian")}>
                        {t("italian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("japanese")}>
                        {t("japanese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("latvian")}>
                        {t("latvian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("lithuanian")}>
                        {t("lithuanian")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>
                      <Dropdown.Item key={t("polish")}>
                        {t("polish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("portugese")}>
                        {t("portugese")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("romanian")}>
                        {t("romanian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("russian")}>
                        {t("russian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("slovak")}>
                        {t("slovak")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("slovenian")}>
                        {t("slovenian")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("spanish")}>
                        {t("spanish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("swedish")}>
                        {t("swedish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("turkish")}>
                        {t("turkish")}
                      </Dropdown.Item>
                      <Dropdown.Item key={t("ukranian")}>
                        {t("ukranian")}
                      </Dropdown.Item>
                    </Dropdown.Section>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="mt-4">
                <Textarea
                  className="flex flex-1"
                  shadow
                  placeholder={t("placeholderOutput")}
                  bordered
                  width="100%"
                  readOnly
                  rows={18}
                  status="default"
                />
              </div>
            </div>
          </div>
          <div className="self-center mt-4  mb-16">
            <Button
              shadow
              color="primary"
              auto
              className="bg-blue-800"
              onPress={() => translate()}
            >
              {t("submitButton")}
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}
