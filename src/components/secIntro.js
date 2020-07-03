import React, { useEffect } from "react"

import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

import { RiUserSharedLine } from "react-icons/ri"

import Bg from "../assets/img/background.svg"
import LogoSpotMe from "../assets/img/logo-spotme.svg"
import LogoCvent from "../assets/img/logo-cvent.svg"

import FormGetStarted from "./formGetStarted"

export default function SecIntro() {
  // Animation
  const animation = useAnimation()
  const [imgSync, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const animateLogos = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          type: "spring",
          stiffness: 500,
          damping: 60,
          mass: 6,
        },
      },
    },
    hidden: {
      x: 16,
      opacity: 0,
      transition: {
        x: { stiffness: 500 },
      },
    },
  }

  return (
    <section id="intro" className="relative pt-50 bg-orange-100 bg-opacity-25">
      <span className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden opacity-20">
        <Bg className="w-full h-auto mx-auto" style={{ maxWidth: "1200px" }} />
      </span>
      <div className="relative container mx-auto">
        <div className="flex flex-wrap justify-center items-end pt-50 pt-50 pr-8 lg:pr-50 -mb-50">
          <div id="msg-intro" className="flex-initial pb-50 ml-8 lg:ml-50">
            <h1 className="text-3xl leading-tight">
              Enhance your events with{" "}
              <span className="sr-only">SpotMe + Cvent</span>
            </h1>

            <motion.ul
              className="flex flex-wrap justify-start items-end pr-4 mt-2 -mb-4 -ml-4"
              ref={imgSync}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.2,
                    delayChildren: 0.4,
                  },
                },
              }}
            >
              <motion.div variants={animateLogos}>
                <LogoSpotMe className="mb-4 ml-4 w-auto h-12 max-h-full" />
              </motion.div>
              <motion.span
                className="mb-4 ml-4 text-3xl font-bold leading-tight"
                variants={animateLogos}
              >
                +
              </motion.span>
              <motion.div variants={animateLogos}>
                <LogoCvent className="mb-4 ml-4 w-auto h-10 max-h-full" />
              </motion.div>
            </motion.ul>

            <p className="w-full mt-4" style={{ maxWidth: "500px" }}>
              A hassle free integration between SpotMe and Cvent registration.
              Leverage Cvent for event management, increase interactivity with
              SpotMe, and easily keep everything in sync.
            </p>

            <h2 className="text-lg mt-8">Customers typically see...</h2>

            <hr className="mt-2 border-primary-500 border-2 w-32 max-w-full" />

            <ul className="flex flex-wrap justify-start items-start mt-2">
              <li className="flex flex-wrap justify-start items-center pt-2 pr-2">
                <div className="img pb-2 pl-2">
                  <span
                    className="block p-2 text-primary-500 text-lg bg-orange-500 bg-opacity-10 rounded-full"
                    aria-hidden="true"
                  >
                    50%
                  </span>
                </div>
                <div className="msg pb-2 pl-2">
                  <p>
                    <span className="sr-only">50%</span> Higher adoption
                  </p>
                </div>
              </li>
              <li className="flex flex-wrap justify-start items-center pt-2 pr-2">
                <div className="img pb-2 pl-2">
                  <span
                    className="block p-2 text-primary-500 text-lg bg-orange-500 bg-opacity-10 rounded-full"
                    aria-hidden="true"
                  >
                    30%
                  </span>
                </div>
                <div className="msg pb-2 pl-2">
                  <p>
                    <span className="sr-only">30%</span> More leads
                  </p>
                </div>
              </li>
              <li className="flex flex-wrap justify-start items-center pt-2 pr-2">
                <div className="img pb-2 pl-2">
                  <span className="block p-2 text-primary-500 text-2xl bg-orange-500 bg-opacity-10 rounded-full">
                    <RiUserSharedLine title="User with forward arrow icon" />
                  </span>
                </div>
                <div className="msg pb-2 pl-2">
                  <p>Event buyer signals</p>
                </div>
              </li>
            </ul>
          </div>

          <div id="get-started" className="flex-initial ml-8 lg:ml-50">
            <motion.div
              className="relative block w-full pt-8 p-4 -mb-50 bg-white rounded shadow-md"
              style={{ maxWidth: "350px", marginBottom: "-25px" }}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    scale: {
                      type: "spring",
                      stiffness: 500,
                      damping: 60,
                      mass: 6,
                    },
                  },
                },
                hidden: {
                  scale: 0.9,
                  opacity: 0,
                  transition: {
                    scale: { stiffness: 500 },
                  },
                },
              }}
            >
              <h2 className="text-3xl text-center leading-tight">
                Enhance your events starting today
              </h2>

              <FormGetStarted />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
