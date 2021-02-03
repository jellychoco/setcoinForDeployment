import Head from "next/head"
import styles from "../styles/Home.module.css"
import Particles from "react-particles-js"
import { Parallax, Background } from "react-parallax"
import { useMediaQuery } from "react-responsive"
import VideoBg from "reactjs-videobg"
import { useEffect, useState } from "react"
import Collapsible from "react-collapsible"

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  console.log(scrollPosition)

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

  const generateor = (array) => {
    if (!array) return []
    if (!array.length) return []

    return array.map((value) => {
      return (
        <div
          className={styles.hoverEffect}
          key={value.src}
          style={{
            margin: "5px",
            backgroundColor: "black",
            display: "inline-block",
            zIndex: 2,
          }}
        >
          <img width='100%' src={value.src} />
          <p>{value.name}</p>
        </div>
      )
    })
  }

  return (
    <div>
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
        style={{
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
        }}
      >
        <img src={"logo.png"} alt='logo' />
        <ul
          style={{
            color: "white",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
          }}
        >
          <li>HOME</li>
          <li>WHITE PAPER</li>
          <li>ROADMAP</li>
          <li>TEAM</li>
          <li>ABOUT SET</li>
          <li>DOWNLOAD</li>
          <li>REGULATION</li>
        </ul>
      </div>
      {/* 헤더끝 */}
      {/* 메인시작 */}
      {/* 첫번째페이지 */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VideoBg poster={"image1.jpg"}>
          <VideoBg.Source src={"video.webm"} type='video/webm' />
        </VideoBg>
        <div
          style={{
            height: "40vh",
            width: "100%",
            padding: "3%",
            color: "white",
          }}
        >
          <p style={{ fontSize: "3rem", margin: 0 }}>WELCOME TO</p>
          <p style={{ fontSize: "5rem", margin: 0 }}>Second Earth</p>
          <p>
            future of tourism has arrived. Join our travelers community and be
            one of the pioneers of Virtual Reality Travel!
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
        <div style={{ backgroundColor: "#232A37", height: "20%" }}>
          <div style={{ textAlign: "center", paddingTop: "40px" }}>
            <p style={{ fontSize: "1.75rem" }}>
              SETCOIN PIONEERS THE VR TRAVEL REVOLUTION
            </p>
            <p>
              The Second Earth Gaia Project is opening up a new world of endless
              excitement and exploration. In times of uncertainty and turmoil,
              safely travel all over the world without ever leaving your home.
              Join our global community and be one of the pioneers of virtual
              reality travel. Fulfil your mission and earn your reward.
              Virtually everything is possible!
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div>
              <div
                style={{
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
            <div>
              <div
                style={{
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
        </div>
        <div
          style={{
            height: "30%",
            backgroundImage:
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(image2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        ></div>
        {/* 세번째페이지 시작 */}
        <section
          style={{
            backgroundImage:
              "linear-gradient(180deg, #272057 0%, #232A35 100%)",
          }}
        >
          <div style={{ padding: "2%" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "2rem" }}>VISION</p>
              <p>
                Travel and explore without boundaries. Virtually everything is
                possible!
              </p>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "50%", padding: "5%" }}>
                <p style={{ fontSize: "2rem" }}>NOAH EXPLORER</p>
                <p>
                  Within the Second Earth Gaia Project, Explorers lead Pioneers
                  to explore the territory of our virtual second earth and
                  provide content to new users to obtain long-term benefits from
                  fulfilling tasks and watching advertisement (calculated by
                  CPVS – cost per view of the second earth).
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
                      In the early stage (“Noah’s Landing” stage), the Noah
                      Explorer assists and guides Pioneers to help publicize the
                      project and obtain contribution value, and then purchase
                      the corresponding amount of SET tokens in the following
                      “Reshaping” stage. In the mid-term, SET tokens can be
                      mined through the POM mission mining system and later
                      through the introduction of the ecosystem-wide mission
                      mining mechanism. Within the mission system, the Explorer
                      can supplement or improve AR/VR content in his respective
                      area to encourage the involvement of users. Within the
                      advertising system, the interactive advertising
                      customization system can allow advertisers to utilize
                      interaction through virtual reality to communicate with
                      the audience. With the assistance of artificial
                      intelligence, their buying behavior will be incentivized
                      and product customization as well as product
                      personalization will be optimized to the greatest extent.
                      In summary, advertising will become more accurate through
                      user screening and analysis, while at the same time
                      blockchain technology will ensure transparency and prevent
                      fraud. The greatest beneficiary of all the above is the
                      Explorer.
                    </p>
                  </Collapsible>
                </div>
              </div>

              <div style={{ width: "50%", padding: "5%" }}>
                <p style={{ fontSize: "2rem" }}>PIONEERS</p>
                <p>
                  Under the oversight of Explorers, Pioneers can use their
                  mobile phones and other electronic equipment to gather data
                  (initially mainly photos, videos) for the second world
                  ecosystem and obtain revenue from sharing this data.
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
                      Any user who has a mobile device or other suitable devices
                      for data gathering can become a Pioneer. About Pioneer
                      data gathering: Pioneers shall shoot photos and videos in
                      certain areas and upload photos to the Gaia ecosystem.
                      This data will provide the most important building block
                      for the construction of the Gaia virtual world. Pioneers
                      will receive “missions” from their respective Explorers
                      and will obtain revenue according to their contribution in
                      fulfilling these missions. By collecting data and
                      fulfilling missions, Pioneers may build their own networks
                      up to a point where they become Explorers themselves. The
                      student may well become the master!
                    </p>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 세번째페이지 끝 */}
        {/* 네번째페이지 시작 */}
        <section
          style={{
            height: "30%",
            backgroundColor: "transparent",
            backgroundImage: "linear-gradient(180deg,#8C00A1 0%, #232A35 100%)",
            textAlign: "center",
          }}
        >
          {/* <Particles
            style={{
              position: "static",
            }}
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
          /> */}
          <div
            style={{
              color: "#55595c",
              height: "100%",
              backgroundColor: "white",
              display: "inline-block",
              width: "40%",
              padding: "35px",
            }}
          >
            <img width='100%' src={"image4.jpg"} />
            <p style={{ fontWeight: 600, fontSize: "1.5em" }}>SET</p>
            <p>Noah's Landing Launches on Sep 03 2020</p>
            <div
              style={{
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
          }}
        >
          <div style={{ display: "inline-block", width: "45%" }}>
            <div style={{ padding: "50px", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "1.5rem" }}>
                About Second Earth token (SET)
              </p>
              <p>
                The Second Earth Gaia Project features a native cryptographic
                token: SET (Second Earth Token). SET is the core token of all
                economic actions within the Second Earth virtual economy.
              </p>
            </div>

            <div style={{}}>
              <Collapsible
                triggerStyle={{
                  cursor: "pointer",
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
                  The SET token will be issued on a public blockchain with high
                  throughput and smart contract capability. A fixed amount of
                  tokens will be mined every day and distributed to users
                  according to their token holdings (POS), plus their share in
                  the completion of missions of the entire network (POM). This
                  leads to a dynamic token issuance in such a way that those who
                  genuinely contribute to the growth of the network (through
                  data gathering and sharing = accomplishment of missions) will
                  receive more tokens than those who only hold tokens but do not
                  contribute. Moreover, this issuance model will prevent unfair
                  and unbalanced accumulation by a few large holders.
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
                  Maximum supply: 510.1 million (total surface area of the earth
                  in square kilometers)
                  <br />
                  <br />
                  Noah’s Landing stage initial circulating supply: 5.101 million
                  SET
                  <br />
                  <br />
                  Initial price: 0.2 USDT
                  <br />
                  <br />
                  Revival stage initial circulating supply: 51.01 million SET
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
                  pool and are jointly held by all participants in the entire
                  economy. Tokens will be mined according to the following
                  model:
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
                  Every day, users obtain newly mined tokens according to the
                  ratio of gross national product (GDP) to the GDP of the entire
                  referral network according to the POM mission mining system.
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
                  The amount of tokens held by a Explorer’s group of Pioneers
                  combined with their share of the total amount of missions
                  completed in the ecosystem, form the GDP value. Thus, an
                  Explorer needs to make sure his group is holding a sufficient
                  amount of tokens as well as actively participates in the
                  ecosystem by fulfilling missions.
                </p>
              </Collapsible>
            </div>

            <div style={{ padding: "50px", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "1.5rem" }}>
                SOURCE OF VALUE OF SET
              </p>
            </div>
            <div>
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
                  Data is mining. Every picture uploaded by the user in the Gaia
                  app will be used by artificial intelligence algorithms to
                  compose and enhance the virtual world. Data is value. The
                  user’s mining behavior is based on POM consensus (“M” stands
                  for media , message, memory, mission). SET is the token reward
                  obtained after the user contributes data, and provides an
                  incentive mechanism used to encourage users to take part in
                  the creation of the second world.
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
                  virtual world of the Gaia project can be developed into a full
                  virtual economy with virtually unlimited commercial value.
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
                  amount. The economic model, enhanced by the Schröder–Bernstein
                  theorem as its core function, limits the concentration of
                  tokens in the hands of a few major players and effectively
                  restricts the means of large capital to harm the interests of
                  small holders.
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
                  Musk’s Starlink project and the 5G infrastructure are mature,
                  full global internet coverage will be a reality for the first
                  time. Gaia will be the first project to capitalize on the new
                  possibilities offered by this new era of global high-speed
                  internet. The VR industry in general will make a huge leap and
                  Gaia will be at the forefront of this development.
                </p>
              </Collapsible>
              <div style={{ padding: "50px", textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: "1.5rem" }}>
                  PROOF-OF-MISSION (POM)
                </p>
                <p>
                  Our mission is to bring virtual travelling to the global
                  masses. This can only be achieved with the help of a strong
                  community, just as Wikipedia, the most comprehensive
                  encyclopaedia in human history, could only be built with the
                  contribution of millions of people all over the world.
                  Therefore, the Gaia Project features a revolutionary mission
                  system to encourage community members all over the world to
                  join hands and build a second world and bring it to life.
                </p>
              </div>
            </div>
          </div>

          <div style={{ padding: "50px", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "1.5rem", padding: "5%" }}>
              OFFICIAL PARTNERS
            </p>
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
          }}
        >
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
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>December 2020</div>
                <div className={styles.timeLineDesc}>BLOCKCHAIN EXPLORER</div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>January 2021</div>
                <div className={styles.timeLineDesc}>ON-CHAIN WALLET</div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>January 2021</div>
                <div className={styles.timeLineDesc}>
                  IMPROVED BLOCKCHAIN SYNCHRONIZATION SPEED
                </div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>January 2021</div>
                <div className={styles.timeLineDesc}>
                  OPTIMIZED BLOCK STORAGE
                </div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>February 2021</div>
                <div className={styles.timeLineDesc}>PUBLIC CHAIN TESTNET</div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>February 2021</div>
                <div className={styles.timeLineDesc}>
                  SET PUBLIC CHAIN SMART CONTRACT
                </div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>February 2021</div>
                <div className={styles.timeLineDesc}>
                  SET DEFI FRAMEWORK AND DAPP PROPOSAL
                </div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>March 2021</div>
                <div className={styles.timeLineDesc}>
                  SET BLOCKCHAIN VISUALZATION ENGINE
                </div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>March 2021</div>
                <div className={styles.timeLineDesc}>SET NET DAPP</div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>April 2021</div>
                <div className={styles.timeLineDesc}>MULTI-CURRENCY LEDGER</div>
              </div>
              <div className={styles.timeLineContent}>
                <div className={styles.timeLineItem}>May 2021</div>
                <div className={styles.timeLineDesc}>SET DAO</div>
              </div>
            </div>
          </div>
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
          }}
        >
          <div
            style={{
              textAlign: "center",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "1.75rem" }}>
              SETCOIN PIONEERS THE VR TRAVEL REVOLUTION
            </h1>
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
          }}
        >
          <h1 style={{ padding: "5%" }}>TEAM</h1>
          <div
            style={{
              width: "50%",
              textAlign: "center",
              display: "flex",
            }}
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
                Scott is a results-driven Head of Global Operations with over 10
                years’ experience leading and increasing growth in small and
                medium international businesses mainly in the Asia-Pacific
                Region. Being a NUS MBA recipient and experienced manager, he
                oversaw unparalleled increase in company revenue (250% over 3
                years) during his time as a General Manager. Currently Scott is
                seeking to build and grow together with Second Earth a major VR-
                and blockchain-based entertainment ecosystem to rival today’s
                major internet companies.
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
                Scott is a results-driven Head of Global Operations with over 10
                years’ experience leading and increasing growth in small and
                medium international businesses mainly in the Asia-Pacific
                Region. Being a NUS MBA recipient and experienced manager, he
                oversaw unparalleled increase in company revenue (250% over 3
                years) during his time as a General Manager. Currently Scott is
                seeking to build and grow together with Second Earth a major VR-
                and blockchain-based entertainment ecosystem to rival today’s
                major internet companies.
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
                Scott is a results-driven Head of Global Operations with over 10
                years’ experience leading and increasing growth in small and
                medium international businesses mainly in the Asia-Pacific
                Region. Being a NUS MBA recipient and experienced manager, he
                oversaw unparalleled increase in company revenue (250% over 3
                years) during his time as a General Manager. Currently Scott is
                seeking to build and grow together with Second Earth a major VR-
                and blockchain-based entertainment ecosystem to rival today’s
                major internet companies.
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
                Scott is a results-driven Head of Global Operations with over 10
                years’ experience leading and increasing growth in small and
                medium international businesses mainly in the Asia-Pacific
                Region. Being a NUS MBA recipient and experienced manager, he
                oversaw unparalleled increase in company revenue (250% over 3
                years) during his time as a General Manager. Currently Scott is
                seeking to build and grow together with Second Earth a major VR-
                and blockchain-based entertainment ecosystem to rival today’s
                major internet companies.
              </p>
            </div>
          </div>
          <div style={{ paddingTop: "10%", width: "45%" }}>
            <h1 style={{ textAlign: "center", fontSize: "1.75rem" }}>
              We are the citizen of thje Second Earth
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
              <div style={{ textAlign: "center" }}>
                Therefore, if you have any questions, please contact us!
              </div>
            </p>

            <div style={{ textAlign: "center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
              <p style={{ fontSize: "1.75rem" }}>CONTACT US</p>
              <div style={{backgroundColor:"#8C02A0",width:"25%",padding:"12px 24px 12px 24px",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>cc@setcoin.io</div>
            </div>
          </div>
        </section>
      <section style={{zIndex:3,height:"5%",backgroundColor:"#1C1C1C",display:"flex",justifyContent:"center",alignItems:"center",color:"#929292"}}>
        2020 SETCOIN ALL rights reserved
      </section>
      </div>
      {/* 메인끝 */}
    </div>
  )
}

//  <Parallax
//       style={{ opacity: "0.9", height: "100%"}}
//       strength={200}
//     >
//     </Parallax>
