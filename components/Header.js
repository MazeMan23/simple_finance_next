import Image from "next/image";
import React, { useEffect } from "react";
import { US, BG } from "country-flag-icons/react/3x2";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import SimpleLink from "./SimpleLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Dropdown, Navbar } from "@nextui-org/react";

export default function Header({ t }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [megaMenu, setMegaMenu] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState({});

  useEffect(() => {
    router.push(selectedKey);
  }, [selectedKey]);

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
          <Navbar.Brand className="w-48">
            <Link href="/">
              <div className="cursor-pointer">
                <Image src="/images/logo.png" width={2061} height={968} />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Content className="gap-8 cursor-pointer">
            <Link href="/">
              <p className="text-white duration-100 text-2xl font-thin  ">{t("home")}</p>
            </Link>
            {/* <Link isActive href="/about">
              <p className="text-white duration-100 text-2xl font-thin ">
                {t("about")}
              </p>
            </Link> */}
            <div
              href="/en"
              className=""
              onClick={() => {
                setMegaMenu(!megaMenu);
              }}
            >
              <p className="text-white duration-100 text-2xl font-thin ">{t("services")}</p>
            </div>
            <Link href="https://groupsimple.sharepoint.com/_layouts/15/sharepoint.aspx">
              <p className="text-white duration-100 text-2xl font-thin  ">{t("login")}</p>
            </Link>
            <Link href="/contact">
              <p className="text-white duration-100 text-2xl font-thin  ">{t("contact")}</p>
            </Link>
          </Navbar.Content>
          <Navbar.Content>
            <US
              title="United States"
              className="cursor-pointer min-w-[3rem] rounded-sm  duration-100"
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
              className="cursor-pointer min-w-[3rem] rounded-sm  duration-100"
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
          <div className="w-full bg-[#021f41]">
            <div className="pt-4 pb-6 mx-4 flex flex-col">
              <div className="grid grid-cols-5 gap-2 xl:gap-4 cursor-pointer">
                <Link href="/finance">
                  <div className="  flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image src="/images/service_finance_cut.jpg" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">Simple Finance</p>
                      <p className="text-gray-400 font-semibold">{t("finance")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/legal">
                  <div className="  flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image src="/images/service_law_cut.jpg" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">LAW</p>
                      <p className="text-gray-400 font-semibold">{t("legal")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/marketing">
                  <div className="  flex flex-row items-center">
                    <div className="w-16 h-16 mr-1">
                      <Image src="/images/service_market_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">Marketing</p>
                      <p className="text-gray-400 font-semibold">{t("marketing")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/translate">
                  <div className="  flex flex-row items-center">
                    <div className="w-14 h-14 mr-2">
                      <Image src="/images/service_translate.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">Translate</p>
                      <p className="text-gray-400 font-semibold">{t("translate")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/hr">
                  <div className="  flex flex-row items-center">
                    <div className="w-14 h-14 mr-2">
                      <Image src="/images/hr_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">HR</p>
                      <p className="text-gray-400 font-semibold">{t("hr")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/projects">
                  <div className=" flex flex-row items-center">
                    <div className="w-14 h-14 ml-1">
                      <Image src="/images/service_project.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%] ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Projects</p>
                      <p className="text-gray-400 font-semibold">{t("projects")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/standards">
                  <div className="  flex flex-row items-center">
                    <div className="w-14 h-14 ml-1">
                      <Image src="/images/standards_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%] ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Standards</p>
                      <p className="text-gray-400 font-semibold">{t("standards")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/it">
                  <div className="  flex flex-row items-center">
                    <div className="w-16 h-16 mr-1">
                      <Image src="/images/service_it_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">IT</p>
                      <p className="text-gray-400 font-semibold">{t("it")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/insurance">
                  <div className="  flex flex-row items-center ml-[-2px]">
                    <div className="w-14 h-14 mr-1">
                      <Image src="/images/insurance_crop.png" width={560} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">Insurance</p>
                      <p className="text-gray-400 font-semibold">{t("insurance")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/value">
                  <div className="  flex flex-row items-center ml-[-2px]">
                    <div className="w-14 h-14 mr-1">
                      <Image src="/images/logo-value_cut.png" width={560} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%]">
                      <p className="text-[#e98f2f] text-xl font-bold">Value</p>
                      <p className="text-gray-400 font-semibold">{t("value")}</p>
                    </div>
                  </div>
                </Link>
                <Link href="/offices">
                  <div className="  flex flex-row items-center ml-1">
                    <div className="w-14 h-14">
                      <Image src="/images/cut_offices_logo.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col w-[80%] ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Offices</p>
                      <p className="text-gray-400 font-semibold">{t("offices")}</p>
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
                  <FontAwesomeIcon icon={faBars} color="rgba(255,255,255,.6)" size="1x" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="w-full flex flex-col justify-center items-start gap-8">
            <div className="w-full">
              <SimpleLink href="/" className="text-lg">
                {t("home")}
              </SimpleLink>
            </div>
            <Dropdown isBordered>
              <Dropdown.Button
                auto
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                // iconRight={icons.chevron}
                ripple={false}
              >
                <p className="text-[rgba(255,255,255,.6)] focus:text-[#ffffff] [#ffffff] active:text-[#ffffff] text-xl font-semibold">
                  {t("services")}
                </p>
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Услуги finacne"
                onAction={setSelectedKey}
                className="bg-[#091E42]"
                css={{
                  $$dropdownMenuWidth: "370px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "#021f41",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
                <Dropdown.Item
                  showFullDescription
                  key="/finance"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/finance")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-16 h-16">
                      <Image src="/images/service_finance_cut.jpg" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[#e98f2f] text-xl font-bold">Simple Finance</p>
                      <p className="text-gray-400 font-semibold">{t("finance")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/legal"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/legal")} > */}
                  <div className="flex flex-row items-center">
                    <div className="w-[74px] h-16 ml-[-8px]">
                      <Image src="/images/service_law_cut.jpg" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[#e98f2f] text-xl font-bold">LAW</p>
                      <p className="text-gray-400 font-semibold">{t("legal")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/marketing"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/marketing")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-[71px] h-16 ml-[-6px]">
                      <Image src="/images/service_market_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[#e98f2f] text-xl font-bold">Marketing</p>
                      <p className="text-gray-400 font-semibold">{t("marketing")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/translate"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/translate")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image src="/images/service_translate.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Translate</p>
                      <p className="text-gray-400 font-semibold">{t("translate")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/hr"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/hr")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image src="/images/hr_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">HR</p>
                      <p className="text-gray-400 font-semibold">{t("hr")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/projects"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/projects")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image src="/images/service_project.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Projects</p>
                      <p className="text-gray-400 font-semibold">{t("projects")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/standards"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/standards")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image src="/images/standards_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Standards</p>
                      <p className="text-gray-400 font-semibold">{t("standards")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/it"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/it")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-16 h-16 ml-[-4px]">
                      <Image src="/images/service_it_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-1">
                      <p className="text-[#e98f2f] text-xl font-bold">IT</p>
                      <p className="text-gray-400 font-semibold">{t("it")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/insurance"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/insurance")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image src="/images/insurance_crop.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Insurance</p>
                      <p className="text-gray-400 font-semibold">{t("insurance")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/value"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/value")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image src="/images/logo-value_cut.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <p className="text-[#e98f2f] text-xl font-bold">Value</p>
                      <p className="text-gray-400 font-semibold">{t("value")}</p>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
                <Dropdown.Item
                  showFullDescription
                  key="/offices"
                  className="active:bg-[#021f41] focus:bg-[#021f41] [#021f41]"
                >
                  {/* <button onClick={() => router.push("/offices")}> */}
                  <div className="flex flex-row items-center">
                    <div className="w-14 h-14">
                      <Image src="/images/cut_offices_logo.png" width={500} height={500} />
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <div className="text-[#e98f2f] text-xl font-bold">Offices</div>
                      <div className="text-gray-400 font-semibold">{t("offices")}</div>
                    </div>
                  </div>
                  {/* </button> */}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="w-full">
              <SimpleLink href="/contact" className="text-lg">
                {t("contact")}
              </SimpleLink>
            </div>
            <div className="w-full">
              <SimpleLink href="https://groupsimple.sharepoint.com/_layouts/15/sharepoint.aspx" className="text-lg">
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
      </nav>
    </>
  );
}
