import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SimpleLink from "./SimpleLink";

export default function Footer({ t, h }) {
  const list = ["finance", "it", "legal", "marketing"];

  return (
    <footer className="flex flex-col justify-center  bg-[#091E42]">
      <div className="flex flex-row justify-center min-w-full">
        <div className="flex lg:flex-row flex-col justify-evenly p-10 gap-8 lg:w-[75%]">
          <div className="flex flex-col justify-start lg:max-w-[30%]">
            <div className="text-white text-lg">{t("title")}</div>
            <div className="text-[rgba(255,255,255,.6)]">{t("description")}</div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="text-white text-lg">{t("services")}</div>
            <div className="flex flex-col justify-start min-w-full">
              {list.map((service) => (
                <SimpleLink href={`/${service}`} key={service}>
                  {h(service)}
                </SimpleLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="text-white text-lg">{t("contact")}</div>
            <div className="text-[rgba(255,255,255,.6)]">{t("address")}</div>
            <div className="text-[rgba(255,255,255,.6)]">{t("phone")}</div>
            <div className="text-[rgba(255,255,255,.6)]">{t("email")}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-[#132844] py-5">
        <div className="flex flex-row justify-between flex-wrap lg:w-[75%] w-[90%]">
          <div className="text-[rgba(255,255,255,.6)]">
            <a
              href="https://euipo.europa.eu/eSearch/#details/trademarks/018575197"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              2022 © Simple Finance
            </a>
          </div>
          <div className="flex flex-row justify-end gap-4">
            <div className="flex flex-col justify-center min-h-full">
              <a href="https://www.facebook.com/people/Simple-Finance/100065641413166/">
                <FontAwesomeIcon icon={faFacebook} color={"rgba(255,255,255,.6)"} />
              </a>
            </div>
            <a href="https://www.linkedin.com/company/simple-finance-ltd/">
              <div className="flex flex-col justify-center min-h-full">
                <FontAwesomeIcon icon={faLinkedin} color={"rgba(255,255,255,.6)"} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
