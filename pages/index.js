import Head from "next/head"
import Particles from "react-particles-js"
import { useMediaQuery } from "react-responsive"
import { useEffect, useState, useRef, Fragment } from "react"
import Collapsible from "react-collapsible"
import Sidebar from "react-sidebar"
import FadeIn from "react-fade-in"
import Carousel from "react-elastic-carousel"
import ScrollIntoView from "react-scroll-into-view"
import {
  FaMedium,
  FaFacebookSquare,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa"

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })

  const [isDesktopSize, setIsDesktopSize] = useState(true)

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setIsDesktopSize(true)
    } else {
      setIsDesktopSize(false)
    }

    return () => {
      setSidebarOpen(false)
    }
  }, [isDesktopOrLaptop])
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  const [sidebarOpen, setSidebarOpen] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const list = [
    {
      src: "Picture-1.png",
      name: "ADDRAGON",
    },
    {
      src: "Picture-2.png",
      name: "AFFISE",
    },
    {
      src: "Picture-3.png",
      name: "CJ AFFILIATE",
    },
    {
      src: "Picture-4.png",
      name: "DMCA",
    },
    {
      src: "Picture-5.png",
      name: "DMS AFFILIATES",
    },
    {
      src: "Picture-6.png",
      name: "E-PRIVACY SEAL",
    },
    {
      src: "Picture-7.png",
      name: "EXPERT OPTION",
    },
    {
      src: "Picture-24.png",
      name: "WINGS CPA",
    },
  ]
  const handleSidebar = (open) => {
    setSidebarOpen(open)
  }

  const generateor = (array) => {
    if (!array || !array.length) return []

    return array.map((value) => {
      return (
        <div
          className='hoverEffect'
          key={value.src}
          style={
            isDesktopSize
              ? {
                  margin: "5px",
                  backgroundColor: "black",
                  display: "inline-block",
                  zIndex: 2,
                }
              : {
                  width: "45%",
                  margin: "5px",
                  textAlign: "center",
                  backgroundColor: "black",
                }
          }
        >
          <img width='100%' src={value.src} />
          <p>{value.name}</p>
        </div>
      )
    })
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ]

  const menus = [
    {
      name: "HOME",
      selector: "HOME",
      link: "",
    },
    {
      name: "WHITE PAPER",
      selector: "WHITEPAPER",
      link: "",
    },
    {
      name: "ROADMAP",
      selector: "ROADMAP",
      link: "",
    },
    {
      name: "TEAM",
      selector: "TEAM",
      link: "",
    },
    {
      name: "ABOUT SET",
      selector: "ABOUTSET",
      link: "",
    },
    {
      name: "DOWNLOAD",
      selector: "HOME",
      link: "",
    },
    {
      name: "REGULATION",
      selector: "HOME",
      link: "",
    },
  ]
  const menuGenerator = (array, isWeb) => {
    if (!array || !array.length) return []

    return array.map((value, key) => {
      if (isWeb) {
        return (
          <ScrollIntoView
            key={value.name}
            selector={`#${value.selector}`}
          >
            <li
              className="menu"
              // style={{ padding: "10px", color: "white", cursor: "pointer" }}
            >
              {value.name}
            </li>
          </ScrollIntoView>
        )
      } else {
        return (
          <ScrollIntoView key={value.name} selector={`#${value.selector}`}>
            <li
              className="menu"
              style={{
                cursor: "pointer",
                padding: "15px",
                color: "white",
                borderBottom: "0.5px solid lightgray",
              }}
            >
              {value.name}
            </li>
          </ScrollIntoView>
        )
      }
    })
  }

  const countryList = [
    {
      name: "한국어",
      src: "ko_KR.png",
    },
    {
      name: "Español",
      src: "es_ES.png",
    },
    {
      name: "Deutsch",
      src: "de_DE.png",
    },
    {
      name: "Français",
      src: "fr_FR.png",
    },
    {
      name: "Português",
      src: "pt_PT.png",
    },
    {
      name: "Русский",
      src: "ru_RU.png",
    },
    {
      name: "日本語",
      src: "ja.png",
    },
    {
      name: "English",
      src: "en_US.png",
    },
  ]

  return (
    <div >
      <div
        style={{
          position: "fixed",
          bottom: 30,
          left: isDesktopSize ? "80%" : "50%",
          color: "white",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", zIndex: 100 }}>
          <FaFacebookSquare
            style={{
              margin: "2px",
              padding: 0,
              borderRadius: "5px",
              width: isDesktopSize ? "50px" : "35px",
              height: isDesktopSize ? "50px" : "35px",
              color: "#3B5998",
              backgroundColor: "white",
            }}
          />
          <FaTwitter
            style={{
              margin: "2px",
              padding: 0,
              borderRadius: "5px",
              width: isDesktopSize ? "50px" : "35px",
              height: isDesktopSize ? "50px" : "35px",
              color: "#1DA1F2",
              backgroundColor: "white",
            }}
          />
          <FaTelegram
            style={{
              margin: "2px",
              padding: 0,
              borderRadius: "5px",
              width: isDesktopSize ? "50px" : "35px",
              height: isDesktopSize ? "50px" : "35px",
              color: "#2CA5E0",
              backgroundColor: "white",
            }}
          />
          <FaMedium
            style={{
              margin: "2px",
              padding: 0,
              borderRadius: "5px",
              width: isDesktopSize ? "50px" : "35px",
              height: isDesktopSize ? "50px" : "35px",
              color: "#00AB6B",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>
      <div
        id='trp-floater-ls'
        data-no-translation
        className='trp-language-switcher-container trp-floater-ls-names trp-bottom-left'
      >
        <div id='trp-floater-ls-current-language' className='trp-with-flags'>
          <a
            // href='#'
            className='trp-floater-ls-disabled-language trp-ls-disabled-language'
          >
            <img
              className='trp-flag-image'
              src='en_US.png'
              width='18'
              height='12'
              alt='en_US'
              title='English'
            />
            English
          </a>
        </div>
        <div id='trp-floater-ls-language-list' className='trp-with-flags'>
          {countryList.map((value, index) => {
            return (
              <a key={value.name} href='' title={value.name}>
                <img
                  className='trp-flag-image'
                  src={value.src}
                  width='18'
                  height='12'
                  alt={value.name}
                  title={value.name}
                />
                {value.name}
              </a>
            )
          })}
        </div>
      </div>
      <Head>
        <title>
          Second Earth Gaia Plan，Second Earth SET,Terra-2 ; By integrating
          cryptocurrency, VR, AI, and Elon Musk’s Starlink project, Second Earth
          allows anyone to acquire a ticket to become a new world citizen,
          participate in its exploration, develop their own territory, and
          become a master of the Second Earth virtual world!
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* 헤더시작 */}

      <div
        style={
          isDesktopSize
            ? {
                zIndex: 2,
                position: "fixed",
                height: "12%",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-around",
                display: "flex",
                backgroundColor: scrollPosition === 0 ? "" : "#232A37",
                transitionDuration: "0.2s",
                padding: 0,
                margin: 0,
                zIndex: 5,
              }
            : {
                zIndex: 2,
                position: "fixed",
                height: "8%",
                width: "100%",
                display: "flex",
                backgroundColor: scrollPosition === 0 ? "" : "#232A37",
                transitionDuration: "0.2s",
                padding: 0,
                margin: 0,
                zIndex: 5,
              }
        }
      >
        {isDesktopSize ? (
          <>
            <img src={"logo.png"} alt='logo' />
            <ul
              style={{
                zIndex: 5,
                color: "white",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-around",
                width: "40%",
              }}
            >
              {menuGenerator(menus, true)}
            </ul>
          </>
        ) : (
          <>
            <img
              width='50px'
              style={{ position: "fixed", zIndex: 2 }}
              src={"logo.png"}
              alt='logo'
            />
            <Sidebar
              pullRight={true}
              sidebar={
                <>
                  <div
                    onClick={() => {
                      handleSidebar(false)
                    }}
                    style={{
                      right: 0,
                      padding: "10px",
                      cursor: "pointer",
                      position: "absolute",
                    }}
                  >
                    <img
                      style={{
                        maxWidth: "15px",
                        float: "right",
                        filter: "invert(100%) brightness(100%) contrast(100%)",
                      }}
                      src={"close.svg"}
                      alt='close'
                    />
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      float: "right",
                      padding: "10px 0px 0px 0px",
                      width: "100%",
                    }}
                  >
                    {menuGenerator(menus, false)}
                  </ul>
                </>
              }
              open={sidebarOpen}
              onSetOpen={handleSidebar}
              styles={{
                sidebar: {
                  backgroundColor:
                    "linear-gradient(180deg,#8C00A1 0%, #232A35 100%)",
                  zIndex: 5,
                  background:
                    "linear-gradient(180deg,#8C00A1 0%, #232A35 100%)",
                  position: "fixed",
                  right: 0,
                  top: 0,
                },
              }}
            >
              <div
                onClick={() => {
                  handleSidebar(true)
                }}
                style={{
                  padding: "10px",
                  position: "fixed",
                  right: 0,
                  top: 0,
                  zIndex: 4,
                }}
              >
                <img
                  style={{
                    filter: "invert(100%) brightness(100%) contrast(100%)",
                  }}
                  src={"menu.svg"}
                />
              </div>
            </Sidebar>
          </>
        )}
      </div>
      {/* 헤더끝 */}
      {/* 메인시작 */}
      {/* 첫번째페이지 */}
      <div
        style={{
          minHeight: isDesktopSize?"100vh":"-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id='HOME'
      >
        <video
          style={{
            position: "absolute",
            zIndex: -1,
            right: 0,
            bottom: 0,
            minHeight: "100%",
            minWidth: "100%",
          }}
          id='video-bg-elem'
          preload='auto'
          autoPlay={true}
          loop='loop'
          muted={true}
        >
          <source src='video.webm' type='video/webm' />
        </video>
        <div
          style={{
            height: "40vh",
            width: "100%",
            padding: "3%",
            color: "white",
          }}
        >
          {/* 웹 */}
          <FadeIn transitionDuration={1000}>
            <Fragment>
              {isDesktopSize && (
                <>
                  <p style={{ fontSize: "3rem", margin: 0 }}>WELCOME TO</p>
                  <p style={{ fontSize: "5rem", margin: 0 }}>Second Earth</p>
                  <p>
                    future of tourism has arrived. Join our travelers community
                    and be one of the pioneers of Virtual Reality Travel!
                  </p>
                  <div style={{ display: "flex", margin: 0 }}>
                    <div
                      style={{
                        borderRadius: "10px 0px 0px 10px ",
                        fontSize: "1.25rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#8C00A1",
                        width: "25%",
                        textAlign: "center",
                        height: "60px",
                      }}
                    >
                      GET SET
                    </div>
                    <div
                      style={{
                        borderRadius: "0px 10px 10px 0px ",
                        fontSize: "1.25rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#232A35",
                        width: "25%",
                        textAlign: "center",
                        height: "60px",
                      }}
                    >
                      YOUTUBE CHANNEL
                    </div>
                  </div>{" "}
                </>
              )}
              {/* 웹 */}
              {/* 모바일 */}
              {!isDesktopSize && (
                <>
                  <p style={{ fontSize: "1.5rem", margin: 0 }}>WELCOME TO</p>
                  <p style={{ fontSize: "2.5rem", margin: 0 }}>Second Earth</p>
                  <p style={{ fontSize: "0.775rem" }}>
                    future of tourism has arrived. Join our travelers community
                    and be one of the pioneers of Virtual Reality Travel!
                  </p>
                  <div style={{ display: "flex", margin: 0 }}>
                    <div
                      style={{
                        borderRadius: "10px 0px 0px 10px ",
                        fontSize: "0.875rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#8C00A1",
                        width: "50%",
                        textAlign: "center",
                        height: "60px",
                      }}
                    >
                      GET SET
                    </div>
                    <div
                      style={{
                        borderRadius: "0px 10px 10px 0px ",
                        fontSize: "0.875rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#232A35",
                        width: "50%",
                        textAlign: "center",
                        height: "60px",
                      }}
                    >
                      YOUTUBE CHANNEL
                    </div>
                  </div>{" "}
                </>
              )}
              {/* 모바일 */}
            </Fragment>
          </FadeIn>
          <div
            className='elementor-shape elementor-shape-bottom'
            data-negative='false'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1000 100'
              preserveAspectRatio='none'
              style={{ fill: "#232A35" }}
              id={isDesktopSize ? "WHITEPAPER" : ""}
            >
              <path
                className='elementor-shape-fill'
                d='M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9'
              />
            </svg>
          </div>
        </div>
      </div>
      {/* 첫번째페이지 끝 */}
      {/* 두번쨰페이지 시작 */}
      <Particles
        style={{ position: "absolute", zIndex: 1 }}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
          },
        }}
      />
      <div
        style={{
          height: "200vh",
          backgroundColor: "#222B35",
          position: "relative",
          color: "white",
          width: "100%",
        }}
      >
        {/* 웹 */}
        {isDesktopSize && (
          <>
            <div
              style={{
                backgroundColor: "#232A37",
                height: "20%",
                paddingBottom: "50px",
              }}
            >
              {scrollPosition > 0 && (
                <FadeIn>
                  <>
                    <div style={{ textAlign: "center", paddingTop: "40px" }}>
                      <p style={{ fontSize: "1.75rem" }}>
                        SETCOIN PIONEERS THE VR TRAVEL REVOLUTION
                      </p>
                      <p>
                        The Second Earth Gaia Project is opening up a new world
                        of endless excitement and exploration. In times of
                        uncertainty and turmoil, safely travel all over the
                        world without ever leaving your home. Join our global
                        community and be one of the pioneers of virtual reality
                        travel. Fulfil your mission and earn your reward.
                        Virtually everything is possible!
                      </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ flexGrow: 1 }}>
                        <div
                          style={{
                            position: "sticky",
                            zIndex: 1,
                            backgroundColor: "#8C02A0",
                            display: "inline-block",
                            padding: "15px",
                            borderRadius: "5px",
                            width: "200px",
                            margin: "10px",
                          }}
                        >
                          WHITE PAPER
                        </div>
                        <div
                          style={{
                            position: "sticky",
                            zIndex: 1,
                            backgroundColor: "#8C02A0",
                            display: "inline-block",
                            padding: "15px",
                            borderRadius: "5px",
                            width: "200px",
                            margin: "10px",
                          }}
                        >
                          SET BUSINESS PLAN I
                        </div>
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <div
                          style={{
                            position: "sticky",
                            zIndex: 1,
                            backgroundColor: "#8C02A0",
                            display: "inline-block",
                            padding: "15px",
                            borderRadius: "5px",
                            width: "200px",
                            margin: "10px",
                          }}
                        >
                          OTHER DOCUMENT
                        </div>
                        <div
                          style={{
                            position: "sticky",
                            zIndex: 1,
                            backgroundColor: "#8C02A0",
                            display: "inline-block",
                            padding: "15px",
                            borderRadius: "5px",
                            width: "200px",
                            margin: "10px",
                          }}
                        >
                          SET BUSINESS PLAN II
                        </div>
                      </div>
                    </div>
                  </>
                </FadeIn>
              )}
            </div>
          </>
        )}
        <div
          style={{
            position: "relative",
            minHeight: "500px",
            backgroundImage:
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(image2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPositionX: isDesktopOrLaptop ? "" : "70%",
          }}
        >
          <div
            style={{ position: "absolute" }}
            className='elementor-shape elementor-shape-bottom'
            data-negative='false'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1000 100'
              preserveAspectRatio='none'
              style={{ fill: "#272056" }}
            >
              <path
                className='elementor-shape-fill'
                d='M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9'
              />
            </svg>
          </div>
        </div>
        {/* 웹 */}
        {/* 모바일 */}
        {!isDesktopSize && (
          <>
            <div
              id='WHITEPAPER'
              style={{ backgroundColor: "#232A37", minHeight: "45%" }}
            >
              <div style={{ textAlign: "center", paddingTop: "40px" }}>
                <p style={{ fontSize: "1.5rem" }}>
                  SETCOIN PIONEERS THE VR TRAVEL REVOLUTION
                </p>
                <p>
                  The Second Earth Gaia Project is opening up a new world of
                  endless excitement and exploration. In times of uncertainty
                  and turmoil, safely travel all over the world without ever
                  leaving your home. Join our global community and be one of the
                  pioneers of virtual reality travel. Fulfil your mission and
                  earn your reward. Virtually everything is possible!
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "sticky",
                      zIndex: 1,
                      backgroundColor: "#8C02A0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "15px",
                      borderRadius: "5px",
                      width: "125px",
                      height: "100px",
                      margin: "10px",
                    }}
                  >
                    WHITE PAPER
                  </div>
                  <div
                    style={{
                      position: "sticky",
                      zIndex: 1,
                      backgroundColor: "#8C02A0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "15px",
                      borderRadius: "5px",
                      width: "125px",
                      height: "100px",
                      margin: "10px",
                    }}
                  >
                    SET BUSINESS PLAN I
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "sticky",
                      zIndex: 1,
                      backgroundColor: "#8C02A0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "15px",
                      borderRadius: "5px",
                      width: "125px",
                      height: "100px",
                      margin: "10px",
                    }}
                  >
                    OTHER DOCUMENT
                  </div>
                  <div
                    style={{
                      position: "sticky",
                      zIndex: 1,
                      backgroundColor: "#8C02A0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "15px",
                      borderRadius: "5px",
                      width: "125px",
                      height: "100px",
                      margin: "10px",
                    }}
                  >
                    SET BUSINESS PLAN II
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "30%",
                backgroundImage:
                  "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(image2.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                position: "relative",
                backgroundPositionX: "70%",
              }}
            ></div>
          </>
        )}
        {/* 모바일 */}
        {/* 세번째페이지 시작 */}
        <section
          style={{
            backgroundImage:
              "linear-gradient(180deg, #272057 0%, #232A35 100%)",
          }}
        >
          <div
            style={{
              padding: isDesktopSize ? "2%" : "5%",
              position: "relative",
            }}
          >
            {scrollPosition > 20 && (
              <div
                style={{ position: "absolute" }}
                className='elementor-shape elementor-shape-bottom'
                data-negative='false'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1000 100'
                  preserveAspectRatio='none'
                  style={{ fill: "#8C02A0" }}
                >
                  <path
                    className='elementor-shape-fill'
                    d='M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9'
                  />
                </svg>
              </div>
            )}
            {scrollPosition > 400 && (
              <FadeIn>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: isDesktopSize ? "2rem" : "1.5rem" }}>
                    VISION
                  </p>
                  <p>
                    Travel and explore without boundaries. Virtually everything
                    is possible!
                  </p>
                </div>
              </FadeIn>
            )}
            {scrollPosition > 550 && (
              <FadeIn transitionDuration={1500}>
                <div
                  style={
                    isDesktopSize
                      ? { display: "flex", width: "100%" }
                      : { display: "flex", flexDirection: "column" }
                  }
                >
                  {isDesktopSize && (
                    <>
                      <div style={{ width: "50%", padding: "5%" }}>
                        <p style={{ fontSize: "2rem" }}>NOAH EXPLORER</p>
                        <p>
                          Within the Second Earth Gaia Project, Explorers lead
                          Pioneers to explore the territory of our virtual
                          second earth and provide content to new users to
                          obtain long-term benefits from fulfilling tasks and
                          watching advertisement (calculated by CPVS – cost per
                          view of the second earth).
                        </p>
                        <div
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <Collapsible
                            triggerStyle={{
                              padding: "10px",
                              border: "1px solid white",
                              width: "100%",
                              display: "block",
                              position: "relative",
                              zIndex: 3,
                            }}
                            trigger='+ Noah Explorer recruitment rules'
                            triggerWhenOpen='- Noah Explorer recruitment rules'
                          >
                            <p
                              style={{
                                borderWidth: "0px 1px 1px 1px",
                                padding: "15px",
                                margin: 0,
                                borderColor: "white",
                                borderStyle: "solid",
                              }}
                            >
                              Deposit: 5000USDT <br />
                              <br />
                              In the early stage (“Noah’s Landing” stage), the
                              Noah Explorer assists and guides Pioneers to help
                              publicize the project and obtain contribution
                              value, and then purchase the corresponding amount
                              of SET tokens in the following “Reshaping” stage.
                              In the mid-term, SET tokens can be mined through
                              the POM mission mining system and later through
                              the introduction of the ecosystem-wide mission
                              mining mechanism. Within the mission system, the
                              Explorer can supplement or improve AR/VR content
                              in his respective area to encourage the
                              involvement of users. Within the advertising
                              system, the interactive advertising customization
                              system can allow advertisers to utilize
                              interaction through virtual reality to communicate
                              with the audience. With the assistance of
                              artificial intelligence, their buying behavior
                              will be incentivized and product customization as
                              well as product personalization will be optimized
                              to the greatest extent. In summary, advertising
                              will become more accurate through user screening
                              and analysis, while at the same time blockchain
                              technology will ensure transparency and prevent
                              fraud. The greatest beneficiary of all the above
                              is the Explorer.
                            </p>
                          </Collapsible>
                        </div>
                      </div>

                      <div style={{ width: "50%", padding: "5%" }}>
                        <p style={{ fontSize: "2rem" }}>PIONEERS</p>
                        <p>
                          Under the oversight of Explorers, Pioneers can use
                          their mobile phones and other electronic equipment to
                          gather data (initially mainly photos, videos) for the
                          second world ecosystem and obtain revenue from sharing
                          this data.
                        </p>
                        <div
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <Collapsible
                            triggerStyle={{
                              padding: "10px",
                              border: "1px solid white",
                              width: "100%",
                              display: "block",
                              position: "relative",
                              zIndex: 3,
                            }}
                            trigger='+ Pioneers recruitement rules'
                            triggerWhenOpen='- Pioneers recruitement rules'
                          >
                            <p
                              style={{
                                borderWidth: "0px 1px 1px 1px",
                                padding: "15px",
                                margin: 0,
                                borderColor: "white",
                                borderStyle: "solid",
                              }}
                            >
                              Any user who has a mobile device or other suitable
                              devices for data gathering can become a Pioneer.
                              About Pioneer data gathering: Pioneers shall shoot
                              photos and videos in certain areas and upload
                              photos to the Gaia ecosystem. This data will
                              provide the most important building block for the
                              construction of the Gaia virtual world. Pioneers
                              will receive “missions” from their respective
                              Explorers and will obtain revenue according to
                              their contribution in fulfilling these missions.
                              By collecting data and fulfilling missions,
                              Pioneers may build their own networks up to a
                              point where they become Explorers themselves. The
                              student may well become the master!
                            </p>
                          </Collapsible>
                        </div>
                      </div>
                    </>
                  )}
                  {/* 웹끝 */}
                  {/* 모바일 */}
                  {!isDesktopSize && (
                    <>
                      <div style={{ width: "100%", padding: "5%" }}>
                        <p style={{ fontSize: "1.5rem" }}>NOAH EXPLORER</p>
                        <p>
                          Within the Second Earth Gaia Project, Explorers lead
                          Pioneers to explore the territory of our virtual
                          second earth and provide content to new users to
                          obtain long-term benefits from fulfilling tasks and
                          watching advertisement (calculated by CPVS – cost per
                          view of the second earth).
                        </p>
                        <div
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <Collapsible
                            triggerStyle={{
                              padding: "10px",
                              border: "1px solid white",
                              width: "100%",
                              display: "block",
                            }}
                            trigger='+ Noah Explorer recruitment rules'
                            triggerWhenOpen='- Noah Explorer recruitment rules'
                          >
                            <p
                              style={{
                                borderWidth: "0px 1px 1px 1px",
                                padding: "15px",
                                margin: 0,
                                borderColor: "white",
                                borderStyle: "solid",
                              }}
                            >
                              Deposit: 5000USDT <br />
                              <br />
                              In the early stage (“Noah’s Landing” stage), the
                              Noah Explorer assists and guides Pioneers to help
                              publicize the project and obtain contribution
                              value, and then purchase the corresponding amount
                              of SET tokens in the following “Reshaping” stage.
                              In the mid-term, SET tokens can be mined through
                              the POM mission mining system and later through
                              the introduction of the ecosystem-wide mission
                              mining mechanism. Within the mission system, the
                              Explorer can supplement or improve AR/VR content
                              in his respective area to encourage the
                              involvement of users. Within the advertising
                              system, the interactive advertising customization
                              system can allow advertisers to utilize
                              interaction through virtual reality to communicate
                              with the audience. With the assistance of
                              artificial intelligence, their buying behavior
                              will be incentivized and product customization as
                              well as product personalization will be optimized
                              to the greatest extent. In summary, advertising
                              will become more accurate through user screening
                              and analysis, while at the same time blockchain
                              technology will ensure transparency and prevent
                              fraud. The greatest beneficiary of all the above
                              is the Explorer.
                            </p>
                          </Collapsible>
                        </div>
                      </div>

                      <div style={{ width: "100%", padding: "5%" }}>
                        <p style={{ fontSize: "2rem" }}>PIONEERS</p>
                        <p>
                          Under the oversight of Explorers, Pioneers can use
                          their mobile phones and other electronic equipment to
                          gather data (initially mainly photos, videos) for the
                          second world ecosystem and obtain revenue from sharing
                          this data.
                        </p>
                        <div
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <Collapsible
                            triggerStyle={{
                              padding: "10px",
                              border: "1px solid white",
                              width: "100%",
                              display: "block",
                            }}
                            trigger='+ Pioneers recruitement rules'
                            triggerWhenOpen='- Pioneers recruitement rules'
                          >
                            <p
                              style={{
                                borderWidth: "0px 1px 1px 1px",
                                padding: "15px",
                                margin: 0,
                                borderColor: "white",
                                borderStyle: "solid",
                              }}
                            >
                              Any user who has a mobile device or other suitable
                              devices for data gathering can become a Pioneer.
                              About Pioneer data gathering: Pioneers shall shoot
                              photos and videos in certain areas and upload
                              photos to the Gaia ecosystem. This data will
                              provide the most important building block for the
                              construction of the Gaia virtual world. Pioneers
                              will receive “missions” from their respective
                              Explorers and will obtain revenue according to
                              their contribution in fulfilling these missions.
                              By collecting data and fulfilling missions,
                              Pioneers may build their own networks up to a
                              point where they become Explorers themselves. The
                              student may well become the master!
                            </p>
                          </Collapsible>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </FadeIn>
            )}
          </div>
        </section>
        {/* 세번째페이지 끝 */}
        {/* 네번째페이지 시작 */}
        {/* 웹시작 */}
        {isDesktopSize && (
          <section
            style={{
              height: "30%",
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(180deg,#8C00A1 0%, #232A35 100%)",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Particles
              style={{
                position: "absolute",
                left: 0,
              }}
              params={{
                particles: {
                  number: {
                    value: 100,
                    density: {
                      type: "inside",
                      enable: true,
                      value_area: 1500,
                    },
                  },
                },
              }}
            />
            <div
              style={{
                color: "#55595c",
                height: "100%",
                backgroundColor: "white",
                display: "inline-block",
                width: "40%",
                position: "relative",
                zIndex: 3,
                padding: "35px",
              }}
            >
              <img width='100%' src={"image4.jpg"} />
              <p style={{ fontWeight: 600, fontSize: "1.5em" }}>SET</p>
              <p>Noah's Landing Launches on Sep 03 2020</p>
              <div
                style={{
                  position: "sticky",
                  zIndex: 2,
                  cursor: "pointer",
                  border: "2px solid #55595c",
                  display: "inline-block",
                  padding: "12px 24px 12px 24px",
                }}
              >
                click Here
              </div>
            </div>
          </section>
        )}
        {/* 웹끝 */}
        {/* 모바일시작 */}
        {!isDesktopSize && (
          <section
            style={{
              minHeight: "50%",
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(180deg,#8C00A1 0%, #232A35 100%)",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#55595c",
                backgroundColor: "white",
                display: "inline-block",
                width: "90%",
                padding: "35px",
              }}
            >
              <img width='100%' src={"image4.jpg"} />
              <p style={{ fontWeight: 600, fontSize: "1.5em" }}>SET</p>
              <p>Noah's Landing Launches on Sep 03 2020</p>
              <div
                style={{
                  position: "sticky",
                  zIndex: 2,
                  cursor: "pointer",
                  border: "2px solid #55595c",
                  display: "inline-block",
                  padding: "12px 24px 12px 24px",
                }}
              >
                click Here
              </div>
            </div>
          </section>
        )}
        {/* 모바일끝 */}
        {/* 네번쨰페이지 끝 */}
        {/* 5번쨰페이지 */}
        <section
          style={{
            backgroundColor: "transparent",
            backgroundImage: "linear-gradient(180deg,#8C00A1 0%, #232A35 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: isDesktopSize ? "2000px" : "3800px",
          }}
        >
          <Particles
            style={{ position: "absolute", left: 0 }}
            params={{
              particles: {
                number: {
                  type: "inside",
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 2000,
                  },
                },
              },
            }}
          />
          <div
            style={
              isDesktopSize
                ? { display: "inline-block", width: "45%" }
                : {
                    width: "100%",
                    padding: "2%",
                  }
            }
          >
            {scrollPosition > 1500 && (
              <FadeIn>
                <div
                  style={
                    isDesktopSize
                      ? { padding: "50px", textAlign: "center" }
                      : { padding: "5px", textAlign: "centerm" }
                  }
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.7rem",
                      textAlign: "center",
                    }}
                  >
                    About Second Earth token (SET)
                  </p>
                  <p>
                    The Second Earth Gaia Project features a native
                    cryptographic token: SET (Second Earth Token). SET is the
                    core token of all economic actions within the Second Earth
                    virtual economy.
                  </p>
                </div>
              </FadeIn>
            )}

            {scrollPosition > 1600 && (
              <FadeIn>
                <div style={{ position: "relative", zIndex: 3 }}>
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Issuance mechanism'
                    triggerWhenOpen='- Issuance mechanism'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      The SET token will be issued on a public blockchain with
                      high throughput and smart contract capability. A fixed
                      amount of tokens will be mined every day and distributed
                      to users according to their token holdings (POS), plus
                      their share in the completion of missions of the entire
                      network (POM). This leads to a dynamic token issuance in
                      such a way that those who genuinely contribute to the
                      growth of the network (through data gathering and sharing
                      = accomplishment of missions) will receive more tokens
                      than those who only hold tokens but do not contribute.
                      Moreover, this issuance model will prevent unfair and
                      unbalanced accumulation by a few large holders.
                    </p>
                  </Collapsible>
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Token Metrics'
                    triggerWhenOpen='- Token Metrics'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      Maximum supply: 510.1 million (total surface area of the
                      earth in square kilometers)
                      <br />
                      <br />
                      Noah’s Landing stage initial circulating supply: 5.101
                      million SET
                      <br />
                      <br />
                      Initial price: 0.2 USDT
                      <br />
                      <br />
                      Revival stage initial circulating supply: 51.01 million
                      SET
                      <br />
                      <br />
                    </p>
                  </Collapsible>
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Mining Pool'
                    triggerWhenOpen='- Mining Pool'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      Tokens not initially distributed will remain in the mining
                      pool and are jointly held by all participants in the
                      entire economy. Tokens will be mined according to the
                      following model:
                    </p>
                  </Collapsible>
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Distribution model'
                    triggerWhenOpen='- Distribution model'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      Every day, users obtain newly mined tokens according to
                      the ratio of gross national product (GDP) to the GDP of
                      the entire referral network according to the POM mission
                      mining system.
                    </p>
                  </Collapsible>
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ National production value (GDP)'
                    triggerWhenOpen='- National production value (GDP)'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      The amount of tokens held by a Explorer’s group of
                      Pioneers combined with their share of the total amount of
                      missions completed in the ecosystem, form the GDP value.
                      Thus, an Explorer needs to make sure his group is holding
                      a sufficient amount of tokens as well as actively
                      participates in the ecosystem by fulfilling missions.
                    </p>
                  </Collapsible>
                </div>
              </FadeIn>
            )}
            {scrollPosition > 1900 && (
              <FadeIn>
                <div style={{ padding: "50px", textAlign: "center" }}>
                  <p style={{ margin: 0, fontSize: "1.5rem" }}>
                    SOURCE OF VALUE OF SET
                  </p>
                </div>
              </FadeIn>
            )}

            {scrollPosition > 2000 && (
              <FadeIn>
                <div style={{ zIndex: 4, position: "relative" }}>
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Mining'
                    triggerWhenOpen='- Mining'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      Data is mining. Every picture uploaded by the user in the
                      Gaia app will be used by artificial intelligence
                      algorithms to compose and enhance the virtual world. Data
                      is value. The user’s mining behavior is based on POM
                      consensus (“M” stands for media , message, memory,
                      mission). SET is the token reward obtained after the user
                      contributes data, and provides an incentive mechanism used
                      to encourage users to take part in the creation of the
                      second world.
                    </p>
                  </Collapsible>{" "}
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Advertising'
                    triggerWhenOpen='- Advertising'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      The advertising business, gaming and VR experience in the
                      virtual world of the Gaia project can be developed into a
                      full virtual economy with virtually unlimited commercial
                      value.
                    </p>
                  </Collapsible>{" "}
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Payments'
                    triggerWhenOpen='- Payments'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      SET will become the global transaction currency of VR
                      technology products and services worldwide, without
                      geographical constraints.
                    </p>
                  </Collapsible>{" "}
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Token Supply'
                    triggerWhenOpen='- Token Supply'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      The maximum supply of tokens is 510.1 million. The more
                      Explorers and Pioneers, the smaller the average holding
                      amount. The economic model, enhanced by the
                      Schröder–Bernstein theorem as its core function, limits
                      the concentration of tokens in the hands of a few major
                      players and effectively restricts the means of large
                      capital to harm the interests of small holders.
                    </p>
                  </Collapsible>{" "}
                  <Collapsible
                    triggerStyle={{
                      cursor: "pointer",
                      padding: "10px",
                      border: "1px solid white",
                      width: "100%",
                      display: "block",
                    }}
                    trigger='+ Starlink'
                    triggerWhenOpen='- Starlink'
                  >
                    <p
                      style={{
                        borderWidth: "0px 1px 1px 1px",
                        padding: "15px",
                        margin: 0,
                        borderColor: "white",
                        borderStyle: "solid",
                      }}
                    >
                      Starlink and the advancement path of the 5G era. When Elon
                      Musk’s Starlink project and the 5G infrastructure are
                      mature, full global internet coverage will be a reality
                      for the first time. Gaia will be the first project to
                      capitalize on the new possibilities offered by this new
                      era of global high-speed internet. The VR industry in
                      general will make a huge leap and Gaia will be at the
                      forefront of this development.
                    </p>
                  </Collapsible>
                  <div
                    style={
                      isDesktopSize
                        ? { padding: "50px", textAlign: "center" }
                        : {
                            padding: "10px",
                            marginTop: "40px",
                            textAlign: "center",
                          }
                    }
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: isDesktopSize ? "1.5rem" : "1.25rem",
                      }}
                    >
                      PROOF-OF-MISSION (POM)
                    </p>
                    <p>
                      Our mission is to bring virtual travelling to the global
                      masses. This can only be achieved with the help of a
                      strong community, just as Wikipedia, the most
                      comprehensive encyclopaedia in human history, could only
                      be built with the contribution of millions of people all
                      over the world. Therefore, the Gaia Project features a
                      revolutionary mission system to encourage community
                      members all over the world to join hands and build a
                      second world and bring it to life.
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
          {scrollPosition > 2650 && (
            <FadeIn>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  padding: "5%",
                  whiteSpace: "nowrap",
                }}
              >
                OFFICIAL PARTNERS
              </p>
            </FadeIn>
          )}
          <div
            style={
              isDesktopSize
                ? { padding: "20px", textAlign: "center", zIndex: 3 }
                : {
                    padding: "10px",
                    display: "flex",
                    width: "100%",
                    flexWrap: "wrap",
                    zIndex: 3,
                    justifyContent: "center",
                  }
            }
          >
            {generateor(list)}
            {generateor(list)}
            {generateor(list)}
          </div>
        </section>
        {/* 5번쨰페이지끝 */}
        {/* 6번째 시작 */}
        <Particles
          style={{ position: "absolute", zIndex: 1 }}
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 3000,
                },
              },
            },
          }}
        />
        <section
          style={{
            backgroundColor: "transparent",
            backgroundImage: "linear-gradient(180deg,#8C00A1 0%, #232A35 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5%",
            minHeight: "1000px",
          }}
          id='ROADMAP'
        >
          {scrollPosition > 3650 && (
            <FadeIn transitionDuration={800}>
              <div style={{ width: "100%" }}>
                <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
                  ROADMAP
                </h2>
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>December 2020</div>
                    <div className='timeLineDesc'>BLOCKCHAIN EXPLORER</div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>January 2021</div>
                    <div className='timeLineDesc'>ON-CHAIN WALLET</div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>January 2021</div>
                    <div className='timeLineDesc'>
                      IMPROVED BLOCKCHAIN SYNCHRONIZATION SPEED
                    </div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>January 2021</div>
                    <div className='timeLineDesc'>OPTIMIZED BLOCK STORAGE</div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>February 2021</div>
                    <div className='timeLineDesc'>PUBLIC CHAIN TESTNET</div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>February 2021</div>
                    <div className='timeLineDesc'>
                      SET PUBLIC CHAIN SMART CONTRACT
                    </div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>February 2021</div>
                    <div className='timeLineDesc'>
                      SET DEFI FRAMEWORK AND DAPP PROPOSAL
                    </div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>March 2021</div>
                    <div className='timeLineDesc'>
                      SET BLOCKCHAIN VISUALZATION ENGINE
                    </div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>March 2021</div>
                    <div className='timeLineDesc'>SET NET DAPP</div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>April 2021</div>
                    <div className='timeLineDesc'>MULTI-CURRENCY LEDGER</div>
                  </div>
                  <div className='timeLineContent'>
                    <div className='timeLineItem'>May 2021</div>
                    <div className='timeLineDesc'>SET DAO</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </section>
        {/* 6번쨰끝 */}
        {/* 7번째 시작 */}
        <section
          style={{
            height: "50%",
            backgroundImage:
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(image5.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPositionX: "50%",
            position: "relative",
          }}
        >
          <div
            className='elementor-shape elementor-shape-bottom'
            data-negative='false'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1000 100'
              preserveAspectRatio='none'
              style={{ fill: "#272056" }}
            >
              <path
                className='elementor-shape-fill'
                d='M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9'
              />
            </svg>
          </div>
          <div
            style={{
              textAlign: "center",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {scrollPosition > 5000 && (
              <FadeIn>
                <h1
                  style={{
                    margin: 0,
                    fontSize: isDesktopSize ? "1.75rem" : "1.5rem",
                  }}
                >
                  SETCOIN PIONEERS THE VR TRAVEL REVOLUTION
                </h1>
              </FadeIn>
            )}
          </div>
        </section>
        {/* 7번째 끝 */}
        {/* 8번쨰 시작 */}{" "}
        <Particles
          style={{ position: "absolute" }}
          params={{
            particles: {
              number: {
                value: 100,
                type: "inside",
                density: {
                  enable: true,
                  value_area: 3000,
                },
              },
            },
          }}
        />
        <section
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #272057 0%, #232A35 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5%",
            flexDirection: "column",
            minHeight: isDesktopSize ? "1200px" : "1000px",
          }}
          id='TEAM'
        >
          <div style={{ width: "100%" }}>
            {scrollPosition > 5700 && (
              <FadeIn>
                <div style={{ textAlign: "center" }}>
                  <h1 style={{ padding: "5%" }}>TEAM</h1>
                  <div
                    style={{
                      width: isDesktopSize ? "50%" : "100%",
                      textAlign: "center",
                      display: "inline-block",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Carousel
                      enableAutoPlay={true}
                      autoPlaySpeed={3000}
                      breakPoints={breakPoints}
                      showArrows={false}
                    >
                      <div style={{ padding: "5px", flexGrow: 1 }}>
                        <img
                          style={{
                            width: "200px",
                            height: "200px",
                            backgroundSize: "cover",
                          }}
                          src={"/ppl1.png"}
                          alt=''
                        />
                        <h3>Scott Bingly</h3>
                        <h4>HEad of Global Operations</h4>
                        <p style={{ textAlign: "left" }}>
                          Scott is a results-driven Head of Global Operations
                          with over 10 years’ experience leading and increasing
                          growth in small and medium international businesses
                          mainly in the Asia-Pacific Region. Being a NUS MBA
                          recipient and experienced manager, he oversaw
                          unparalleled increase in company revenue (250% over 3
                          years) during his time as a General Manager. Currently
                          Scott is seeking to build and grow together with
                          Second Earth a major VR- and blockchain-based
                          entertainment ecosystem to rival today’s major
                          internet companies.
                        </p>
                      </div>
                      <div style={{ padding: "5px", flexGrow: 1 }}>
                        <img
                          style={{
                            width: "200px",
                            height: "200px",
                            backgroundSize: "cover",
                          }}
                          src={"/ppl2.png"}
                          alt=''
                        />
                        <h3>Scott Bingly</h3>
                        <h4>Head of Marketing</h4>
                        <p style={{ textAlign: "left" }}>
                          Scott is a results-driven Head of Global Operations
                          with over 10 years’ experience leading and increasing
                          growth in small and medium international businesses
                          mainly in the Asia-Pacific Region. Being a NUS MBA
                          recipient and experienced manager, he oversaw
                          unparalleled increase in company revenue (250% over 3
                          years) during his time as a General Manager. Currently
                          Scott is seeking to build and grow together with
                          Second Earth a major VR- and blockchain-based
                          entertainment ecosystem to rival today’s major
                          internet companies.
                        </p>
                      </div>
                      <div style={{ padding: "5px", flexGrow: 1 }}>
                        <img
                          style={{
                            width: "200px",
                            height: "200px",
                            backgroundSize: "cover",
                          }}
                          src={"/ppl3.png"}
                          alt=''
                        />
                        <h3>Scott Bingly</h3>
                        <h4>Creative Director </h4>
                        <p style={{ textAlign: "left" }}>
                          Scott is a results-driven Head of Global Operations
                          with over 10 years’ experience leading and increasing
                          growth in small and medium international businesses
                          mainly in the Asia-Pacific Region. Being a NUS MBA
                          recipient and experienced manager, he oversaw
                          unparalleled increase in company revenue (250% over 3
                          years) during his time as a General Manager. Currently
                          Scott is seeking to build and grow together with
                          Second Earth a major VR- and blockchain-based
                          entertainment ecosystem to rival today’s major
                          internet companies.
                        </p>
                      </div>
                      <div style={{ padding: "5px", flexGrow: 1 }}>
                        <img
                          style={{
                            width: "200px",
                            height: "200px",
                            backgroundSize: "cover",
                          }}
                          src={"/ppl4.png"}
                          alt=''
                        />
                        <h3>Scott Bingly</h3>
                        <h4>Technical Project Lead </h4>
                        <p style={{ textAlign: "left" }}>
                          Scott is a results-driven Head of Global Operations
                          with over 10 years’ experience leading and increasing
                          growth in small and medium international businesses
                          mainly in the Asia-Pacific Region. Being a NUS MBA
                          recipient and experienced manager, he oversaw
                          unparalleled increase in company revenue (250% over 3
                          years) during his time as a General Manager. Currently
                          Scott is seeking to build and grow together with
                          Second Earth a major VR- and blockchain-based
                          entertainment ecosystem to rival today’s major
                          internet companies.
                        </p>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </section>
        <section
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #272057 0%, #232A35 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5%",
            flexDirection: "column",
          }}
          id='ABOUTSET'
        >
          <div
            style={{
              paddingTop: "10%",
              width: isDesktopSize ? "45%" : "100%",
              display: "inline-block",
            }}
          >
            <h1 style={{ textAlign: "center", fontSize: "1.75rem" }}>
              We are the citizen of the Second Earth
            </h1>
            <p style={{ paddingBottom: "150px" }}>
              We are the most powerful innovative virtual reality community in
              the world, free and open to everyone. We firmly believe that
              people want to shape and explore their own world. Therefore, we
              provide everyone with a free and open 360’ virtual world, which
              can be rebuilt and shaped with the help of your collaboration. The
              overlord will build their virtual empire, and the pioneers will
              join them to bring the Second Earth to life. Our revolutionary
              mission system will ensure that every contribution is rewarded
              with the Second Earth Token (SET). Only those who contribute can
              mine tokens through the Proof of Mission (PoM) system.
              <br />
              <br /> We are just a group of passionate people all over the
              world. If you are too, please join our journey! Our goal is
              continuous improvement, and every thought and suggestion can help
              us provide a better experience for everyone.
              <p style={{ textAlign: "center" }}>
                Therefore, if you have any questions, please contact us!
              </p>
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <p style={{ fontSize: "1.75rem" }}>CONTACT US</p>
            <div
              style={{
                position: "sticky",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#8C02A0",
                  padding: "14px 28px 14px 28px",
                  borderRadius: "10px",
                  fontSize: "1.25rem",
                  marginBottom: isDesktopSize ? "" : "5rem",
                }}
              >
                cc@setcoin.io
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            zIndex: 3,
            height: isDesktopSize ? "5%" : "16%",
            backgroundColor: "#1C1C1C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#929292",
          }}
        >
          2020 SETCOIN ALL rights reserved
        </section>
      </div>
      {/* 메인끝 */}
    </div>
  )
}
