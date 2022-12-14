import React from "react";
import { useTranslations } from "use-intl";
import Layout from "../components/Layout";
import ParticlesHero from "../components/ParticlesHero";
import { Textarea, Dropdown, Button, Text, useModal, Modal, Loading } from "@nextui-org/react";
import Image from "next/image";
import { Form } from "react-bootstrap";

export async function getStaticProps({ locale }) {
  const header = (await import(`../translations/header/${locale}.json`)).default;
  const footer = (await import(`../translations/footer/${locale}.json`)).default;
  const contact = (await import(`../translations/contact/${locale}.json`)).default;
  const translate = (await import(`../translations/translate/${locale}.json`)).default;

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

  const [selectedInput, setSelectedInput] = React.useState(supportedLanguages[0]);
  const [selectedOutput, setSelectedOutput] = React.useState(supportedLanguages[5]);

  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [translationType, setTranslationType] = React.useState("textTranslation");

  const { setVisible, bindings } = useModal();

  const [downloaded, setDownloaded] = React.useState(false);

  const closeHandler = () => {
    setVisible(false);
  };

  const [file, setFile] = React.useState(null);

  return (
    <Layout h={h} f={f}>
      <Modal blur width="50%" aria-labelledby="modal-title" aria-describedby="modal-description" {...bindings}>
        <Modal.Header>
          <div className="text-xl font-bold">{t("errorTitle")}</div>
        </Modal.Header>
        <Modal.Body>
          <div className="self-center">{errorText}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            {t("closeButton")}
          </Button>
        </Modal.Footer>{" "}
      </Modal>
      <ParticlesHero img="/images/translate.jpg">
        <div className="flex flex-col justify-center text-center items-center text-white gap-4">
          <div className=" text-2xl md:text-5xl max-w-4xl font-bold">{t("heroTitle")}</div>
          <div className="text-xl font-bold max-w-3xl">{t("heroSubtitle")}</div>
        </div>
      </ParticlesHero>
      <div className="lg:h-[80vh]">
        <div className="flex flex-row mt-16 ml-4 md:ml-16">
          <Button
            shadow
            color="success"
            auto
            className="bg-green-500"
            onPress={() => setTranslationType("textTranslation")}
          >
            <Image src="/images/icons/text.png" width={30} height={30} className="!z-[30]" />
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
          <form
            onSubmit={async (e) => {
              // don't actually do traditional-style HTML from submission that redirects
              e.preventDefault();

              // set loading on button
              setLoading(true);

              // don't waste API calls on empty input
              const trimmed_input = input.trim();
              if (trimmed_input.length === 0 || input.length > 5000) {
                setErrorText(t("textLength"));
                setVisible(true);
                setLoading(false);
                return;
              }

              // don't try to translate the same language
              if (selectedInput.key === selectedOutput.key) {
                setErrorText(t("errorMessage"));
                setVisible(true);
                setLoading(false);
                return;
              }

              // generate body
              const bodyJSON = JSON.stringify({
                input,
                inputLanguage: selectedInput.key,
                outputLanguage: selectedOutput.key,
              });

              // send request to backend and get reponse
              const response = await fetch("/api/translate-text", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: bodyJSON,
              });
              const response_json = await response.json();

              // if something went wrong
              if (response.status !== 200) {
                // show error: response_json.error
                setErrorText(response_json.error);
                setVisible(true);
                setLoading(false);
                setLoading(false);
                return;
              }

              // set output
              setOutput(response_json.output);
              setLoading(false);
              // set loading to false
              // TODO
            }}
          >
            <div className="flex flex-col">
              <div className="mt-4 ml-4 md:ml-16 mr-4 md:mr-16 flex flex-col md:flex-row">
                <div className="flex flex-1 mr-1 flex-col">
                  <div className="flex self-start">
                    <Dropdown className="flex self-start">
                      <Dropdown.Button flat color="primary">
                        {selectedInput.value}
                      </Dropdown.Button>
                      <Dropdown.Menu
                        aria-label="Input language"
                        color="primary"
                        disallowEmptySelection
                        selectionMode="single"
                        onAction={(selected) => {
                          setSelectedInput(supportedLanguages.find((language) => language.key == selected));
                        }}
                      >
                        {supportedLanguages.map((language) => (
                          <Dropdown.Item key={language.key}>{language.value}</Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="mt-4">
                    <Textarea
                      className=""
                      shadow
                      bordered
                      rows={18}
                      width="100%"
                      color="primary"
                      placeholder={t("placeholderInput")}
                      status="default"
                      value={input}
                      onChange={(v) => {
                        setInput(v.target.value);
                      }}
                    />
                    <div className="font-bold text-gray-400 text-sm ml-2 mt-2">{input.length}/5000</div>
                  </div>
                </div>
                <div className="flex flex-1 ml-1 flex-col">
                  <div className="flex self-start">
                    <Dropdown className="flex self-start" id="outputLang" name="outputLang">
                      <Dropdown.Button flat color="primary">
                        {selectedOutput.value}
                      </Dropdown.Button>
                      <Dropdown.Menu
                        aria-label="Output Language"
                        color="primary"
                        disallowEmptySelection
                        selectionMode="single"
                        onAction={(selected) => {
                          setSelectedOutput(supportedLanguages.find((language) => language.key == selected));
                        }}
                      >
                        {supportedLanguages.map((language) => (
                          <Dropdown.Item key={language.key}>{language.value}</Dropdown.Item>
                        ))}{" "}
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
                      value={output}
                    />
                  </div>
                </div>
              </div>
              <div className="self-center mt-4  mb-16">
                {!loading ? (
                  <Button shadow color="primary" auto className="bg-blue-800" type="submit">
                    {t("submitButton")}
                  </Button>
                ) : (
                  <Button disabled auto bordered color="success" css={{ px: "$13" }}>
                    <Loading type="points" color="currentColor" size="sm" />
                  </Button>
                )}
              </div>
            </div>
          </form>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              setLoading(true);

              if (!file) {
                // TODO: error no file
                setErrorText(t("errorNoFile"));
                setVisible(true);
                setLoading(false);
                return;
              }

              // don't try to translate the same language
              if (selectedInput.key === selectedOutput.key) {
                // show error
                setErrorText(t("errorMessage"));
                setVisible(true);
                setLoading(false);
                return;
              }

              let formData = new FormData();
              formData.append("file", file);
              formData.append("inputLanguage", selectedInput.key);
              formData.append("outputLanguage", selectedOutput.key);

              let result = await fetch("/api/translate-file", {
                method: "POST",
                body: formData,
              });

              if (result.status !== 200) {
                const result_json = await result.json();
                // TODO: error in result_json.error
                setErrorText(result_json.error);
                setVisible(true);
                setLoading(false);
                return;
              }

              const blob = await result.blob();
              const f = window.URL.createObjectURL(blob);
              window.location.assign(f);

              setLoading(false);
              setDownloaded(true);
            }}
          >
            <div className="flex flex-col">
              <div className="mt-4 ml-4 md:ml-16 mr-4 md:mr-16 flex flex-col md:flex-row">
                <div className="flex flex-1 mr-1 flex-col">
                  <div className="flex flex-row mt-4 lg:w-1/3 self-center justify-between">
                    <div className="flex self-start">
                      <Dropdown className="flex self-start">
                        <Dropdown.Button flat color="primary">
                          {selectedInput.value}
                        </Dropdown.Button>
                        <Dropdown.Menu
                          aria-label="Input language"
                          color="primary"
                          disallowEmptySelection
                          selectionMode="single"
                          onAction={(selected) => {
                            setSelectedInput(supportedLanguages.find((language) => language.key == selected));
                          }}
                        >
                          {supportedLanguages.map((language) => (
                            <Dropdown.Item key={language.key}>{language.value}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="flex self-end">
                      <Dropdown className="flex self-start" id="outputLang" name="outputLang">
                        <Dropdown.Button flat color="primary">
                          {selectedOutput.value}
                        </Dropdown.Button>
                        <Dropdown.Menu
                          aria-label="Output Language"
                          color="primary"
                          disallowEmptySelection
                          selectionMode="single"
                          onAction={(selected) => {
                            setSelectedOutput(supportedLanguages.find((language) => language.key == selected));
                          }}
                        >
                          {supportedLanguages.map((language) => (
                            <Dropdown.Item key={language.key}>{language.value}</Dropdown.Item>
                          ))}{" "}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div
                    className="mt-4 border-2 rounded-lg md:w-2/3 lg:w-1/3 self-center h-full flex justify-center"
                    style={{ borderColor: "#d9d9d9" }}
                  >
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row self-center">
                        <img className=" self-center" width={320} height={180} src="/images/icons/files.png" />
                      </div>
                      <Text className="text-blue-800 text-center" weight="bold">
                        {t("uploadText")}
                      </Text>
                      <Form.Group
                        className="self-center mt-8 mb-8"
                        controlId="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      >
                        <Form.Control type="file" accept=".pdf, .docx, .pptx" />
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-center mt-8  mb-16">
                {downloaded == false ? (
                  !loading ? (
                    <div className="flex flex-col self-center justify-center items-center">
                      <div className="mb-2">{t("disclaimer")}</div>
                      <Button shadow color="primary" auto className="bg-blue-800" type="submit">
                        {t("submitButton")}
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col self-center justify-center items-center">
                      <div className="mb-2">{t("disclaimer")}</div>
                      <Button disabled auto bordered color="success" css={{ px: "$13" }}>
                        <Loading type="points" color="currentColor" size="sm" />
                      </Button>
                    </div>
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}
