import React, { useEffect } from "react"
import Lottie from "react-lottie"

import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

import {
  RiTimerFlashLine,
  RiCloudLine,
  RiAwardLine,
  RiVipCrown2Line,
} from "react-icons/ri"
import animationData from "../assets/animations/spotme-cvent-sync.json"

// Lottie Animation
const lottieOptions = {
  loop: true,
  autoplay: true,
  renderer: "svg",
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

// Content
const stayInSyncListItems = [
  {
    icon: <RiTimerFlashLine title="Stopwatch with lighting icon" />,
    title: "Save time and do more",
    message:
      "Build your event in Cvent, integrate in seconds, and leverage our best-in-class app templates",
  },
  {
    icon: <RiVipCrown2Line title="Crown icon" />,
    title: "Deliver a VIP experience everytime",
    message:
      "Get the right people in the room with Cvent, then easily personalize their experiences with SpotMe",
  },
  {
    icon: <RiCloudLine title="Cloud icon" />,
    title: "Freedom from data headaches",
    message:
      "Data automatically syncs two-way between SpotMe + Cvent avoiding import/export",
  },
  {
    icon: <RiAwardLine title="Award icon" />,
    title: "Get better results",
    message:
      "Drive higher adoption, increase audience activity, and impress leadership with SpotMe’s buyer signals into leads, pipelines, and revenue",
  },
]

export default function SecStayInSync() {
  // Animation
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      console.log("In View")
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <section id="stay-in-sync" className="pt-100 pb-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center pl-8 lg:pl-50">
          <motion.div
            id="img-sync"
            className="lg:flex-1 w-full mb-50 mr-8 lg:lg:mr-50"
            style={{ maxWidth: "600px" }}
            animate="visible"
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  scale: {
                    type: "spring",
                    stiffness: 500,
                    damping: 60,
                    mass: 6,
                  },
                },
              },
              hidden: {
                opacity: 0,
                scale: 0,
              },
            }}
          >
            <Lottie options={lottieOptions} />
          </motion.div>

          <div
            id="msg-sync"
            className="flex-auto w-full mb-50 mr-8 lg:lg:mr-50"
            style={{ maxWidth: "500px" }}
            ref={ref}
          >
            <h2 className="text-3xl leading-tight">
              Deliver an immersive experience
            </h2>

            <motion.ul
              className="mt-4"
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.2,
                    delayChildren: 1,
                  },
                },
              }}
            >
              {stayInSyncListItems.map((item, i) => {
                return (
                  <motion.li
                    className="flex flex-wrap justify-center items-start pt-4 pr-4 -mb-4 -ml-4"
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: {
                            type: "spring",
                            stiffness: 500,
                            damping: 60,
                            mass: 6,
                          },
                        },
                      },
                      hidden: {
                        y: -16,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 500 },
                        },
                      },
                    }}
                  >
                    <div className="img flex-initial mb-4 ml-4">
                      <span className="block p-2 text-primary-500 text-2xl bg-orange-500 bg-opacity-10 rounded-full">
                        {item.icon}
                      </span>
                    </div>
                    <div className="msg flex-1 mb-4 ml-4">
                      <h3 className="text-xl">{item.title}</h3>
                      <p>{item.message}</p>
                    </div>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
