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

  const supportedLanguages = [
    { key: "BG", value: t("bulgarian") },
    { key: "ZH", value: t("chinese") },
    { key: "CS", value: t("czech") },
    { key: "DA", value: t("danish") },
    { key: "NL", value: t("dutch") },
    { key: "EN", value: t("english") },
    { key: "ET", value: t("estonian") },
    { key: "FI", value: t("finnish") },
    { key: "FR", value: t("french") },
    { key: "DE", value: t("german") },
    { key: "EL", value: t("greek") },
    { key: "HU", value: t("hungarian") },
    { key: "ID", value: t("indonesian") },
    { key: "IT", value: t("italian") },
    { key: "JA", value: t("japanese") },
    { key: "LV", value: t("latvian") },
    { key: "LT", value: t("lithuanian") },
    { key: "PL", value: t("polish") },
    { key: "PT", value: t("portugese") },
    { key: "RO", value: t("romanian") },
    { key: "RU", value: t("russian") },
    { key: "SK", value: t("slovak") },
    { key: "SL", value: t("slovenian") },
    { key: "SV", value: t("swedish") },
    { key: "ES", value: t("spanish") },
    { key: "TR", value: t("turkish") },
    { key: "UK", value: t("ukranian") },
  ];

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
        <form method="post" action="/api/translate-text">
          <div className="flex flex-col">
            <div className="mt-4 ml-4 md:ml-16 mr-4 md:mr-16 flex flex-col md:flex-row">
              <div className="flex flex-1 mr-1 flex-col">
                <div className="flex self-start">
                  <Dropdown
                    className="flex self-start"
                    id="inputLang"
                    name="inputLang"
                  >
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
                      items={supportedLanguages}
                      id="inputLang"
                      name="inputLang"
                    >
                      {(item) => (
                        <Dropdown.Item
                          key={item.key}
                          id="inputLang"
                          name="inputLang"
                        >
                          {item.value}
                        </Dropdown.Item>
                      )}
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
                  <Dropdown
                    className="flex self-start"
                    id="outputLang"
                    name="outputLang"
                  >
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
                      id="outputLang"
                      name="outputLang"
                      items={supportedLanguages}
                    >
                      {(item) => (
                        <Dropdown.Item key={item.key}>
                          {item.value}
                        </Dropdown.Item>
                      )}
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
                type="submit"
              >
                {t("submitButton")}
              </Button>
            </div>
          </div>
        </form>
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
                    id="outputLang"
                    items={supportedLanguages}
                  >
                    {(item) => (
                      <Dropdown.Item key={item.key}>{item.value}</Dropdown.Item>
                    )}
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
              onPress={() => sendTranslate(t)}
            >
              {t("submitButton")}
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}
