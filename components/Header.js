import Image from "next/image";
import React from "react";
import { US, BG } from "country-flag-icons/react/3x2";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import SimpleLink from "./SimpleLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button, Navbar, Text } from "@nextui-org/react";

export default function Header({ t, bg }) {
  const list = ["finance", "it", "legal", "marketing"];
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [megaMenu, setMegaMenu] = React.useState(false);

  return (
    <>
      <div className="lg:flex-col hidden lg:flex">
        <Navbar
          css={{
            background: "#1c314d",
            padding: 0,
            $$navbarBlurBackgroundColor: "#1c314d",
          }}
          maxWidth="xl"
        >
          <Navbar.Brand className="w-48 h-48">
            <Link href="/">
              <div className="cursor-pointer">
                <Image src="/images/logo.png" width={2061} height={968} />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Content className="gap-8">
            <Link href="/">
              <p className="text-white duration-100 text-2xl font-thin hover:text-orange-400 hover:cursor-pointer">
                {t("home")}
              </p>
            </Link>
            {/* <Link isActive href="/about">
              <p className="text-white duration-100 text-2xl font-thin hover:text-orange-400">
                {t("about")}
              </p>
            </Link> */}
            <div
              href="/en"
              className="hover:cursor-pointer"
              onClick={() => {
                setMegaMenu(!megaMenu);
              }}
            >
              <p className="text-white duration-100 text-2xl font-thin hover:text-orange-400">
                {t("services")}
              </p>
            </div>
            <Link href="https://groupsimple.sharepoint.com/_layouts/15/sharepoint.aspx">
              <p className="text-white duration-100 text-2xl font-thin hover:text-orange-400 hover:cursor-pointer">
                {t("login")}
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-white duration-100 text-2xl font-thin hover:text-orange-400 hover:cursor-pointer">
                {t("contact")}
              </p>
            </Link>
          </Navbar.Content>
          <Navbar.Content>
            <US
              title="United States"
              className="cursor-pointer min-w-[3rem] rounded-sm hover:scale-110 duration-100"
              onClick={() => {
                setCookie("NEXT_LOCALE", "en");
                router.push(router.asPath, router.asPath, {
                  locale: "en",
                  scroll: false,
                });
              }}
            />
            <BG
              title="Bulgaria"
              className="cursor-pointer min-w-[3rem] rounded-sm hover:scale-110 duration-100"
              onClick={() => {
                setCookie("NEXT_LOCALE", "bg");
                router.push(router.asPath, router.asPath, {
                  locale: "bg",
                  scroll: false,
                });
              }}
            />
          </Navbar.Content>
        </Navbar>
        {megaMenu ? (
          <div className="w-full bg-[#021f41] h-48">
            <div className="mt-4 flex flex-col justify-center gap-8">
              <div className="flex flex-row w-full justify-center gap-16">
                <Link href="/finance">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/service_finance_cut.jpg"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple Finance
                      </p>
                      <p className="text-gray-400 font-semibold">
                        {t("finance")}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/legal">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/service_law_cut.jpg"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple LAW
                      </p>
                      <p className="text-gray-400 font-semibold">
                        {t("legal")}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/marketing">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image
                        src="/images/service_market_cut.png"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple Marketing
                      </p>
                      <p className="text-gray-400 font-semibold">
                        {t("marketing")}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/translate">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/service_finance_cut.jpg"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple Translate
                      </p>
                      <p className="text-gray-400 font-semibold">
                        {t("translation")}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/hr">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/service_finance_cut.jpg"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple HR
                      </p>
                      <p className="text-gray-400 font-semibold">{t("hr")}</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-row w-full justify-center gap-16">
                <Link href="/contac">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/service_finance_cut.jpg"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple Value
                      </p>
                      <p className="text-gray-400 font-semibold">
                        {t("valuation")}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/contac">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/service_finance_cut.jpg"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple Standards
                      </p>
                      <p className="text-gray-400 font-semibold">
                        {t("standard")}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/contac">
                  <div className=" hover:cursor-pointer flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/service_it_cut.png"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#e98f2f] text-xl font-bold">
                        Simple IT
                      </p>
                      <p className="text-gray-400 font-semibold">{t("it")}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* <nav
        className="lg:flex hidden fixed flex-row justify-evenly p-4 !z-[999]"
        style={{ backgroundColor: `#091E42${bg}` }}
      >
        <div className="w-[10%]">
          <Link href="/">
            <div className="cursor-pointer">
              <Image src="/images/logo.png" width={2061} height={968} />
            </div>
          </Link>
        </div>
        <div className="flex flex-row justify-evenly w-[90%]">
          {list.map((name) => (
            <SimpleLink
              href={`/${name}`}
              key={name}
              className="justify-center text-center"
            >
              {t(name)}
            </SimpleLink>
          ))}
          <SimpleLink
            href="/contact"
            className="justify-center w-[15%] text-center"
          >
            {t("contact")}
          </SimpleLink>
          <SimpleLink
            href="https://groupsimple.sharepoint.com/_layouts/15/sharepoint.aspx"
            className="justify-center w-[14%] text-center"
          >
            {t("login")}
          </SimpleLink>
        </div>

        <div className="flex flex-row min-w-[15%]">
          <div className="flex flex-col justify-center min-h-full min-w-full">
            <div className="flex flex-row justify-evenly">
              <US
                title="United States"
                className="max-w-[2rem] cursor-pointer min-w-[12.5%]"
                onClick={() => {
                  setCookie("NEXT_LOCALE", "en");
                  router.push(router.asPath, router.asPath, {
                    locale: "en",
                    scroll: false,
                  });
                }}
              />
              <BG
                title="Bulgaria"
                className="max-w-[2rem] cursor-pointer min-w-[12.5%]"
                onClick={() => {
                  setCookie("NEXT_LOCALE", "bg");
                  router.push(router.asPath, router.asPath, {
                    locale: "bg",
                    scroll: false,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      <nav className="flex lg:hidden flex-col justify-evenly p-4 bg-[#091E42]">
        <div className="flex flex-row justify-evenly min-w-full">
          <div className="w-[25%]" />
          <div className="w-[50%]">
            <Link href="/">
              <Image src="/images/logo.png" width={2061} height={968} />
            </Link>
          </div>
          <div className="w-[25%]" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex flex-col justify-center min-h-full">
              <div className="flex flex-row justify-center min-w-full">
                <div className="w-[2rem] h-[2rem]">
                  <FontAwesomeIcon
                    icon={faBars}
                    color="rgba(255,255,255,.6)"
                    size="1x"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="w-full flex flex-col justify-center gap-8">
            {list.map((name) => (
              <div className="w-full" key={name}>
                <SimpleLink href={`/${name}`} className="text-lg">
                  {t(name)}
                </SimpleLink>
              </div>
            ))}
            <div className="w-full">
              <SimpleLink href="/contact" className="text-lg">
                {t("contact")}
              </SimpleLink>
            </div>
            <div className="w-full">
              <SimpleLink
                href="https://groupsimple.sharepoint.com/_layouts/15/sharepoint.aspx"
                className="text-lg"
              >
                {t("login")}
              </SimpleLink>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col justify-center min-h-full min-w-full">
                <div className="flex flex-row justify-evenly">
                  <US
                    title="United States"
                    className="w-[2rem] max-w-[2rem]"
                    onClick={() => {
                      setCookie("NEXT_LOCALE", "en");
                      router.push(router.asPath, router.asPath, {
                        locale: "en",
                      });
                    }}
                  />
                  <BG
                    title="Bulgaria"
                    className="w-[2rem] max-w-[2rem]"
                    onClick={() => {
                      setCookie("NEXT_LOCALE", "bg");
                      router.push(router.asPath, router.asPath, {
                        locale: "bg",
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav> */}
    </>
  );
}
