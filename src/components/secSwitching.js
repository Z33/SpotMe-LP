import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Img from "gatsby-image"

import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

import MobileUser from "../assets/img/mobile-user.svg"

const SecSwitching = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "header-11.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // Animation
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <section id="switching" className="relative p-0 pt-50 m-0 mb-32" ref={ref}>
      <motion.span
        className="bg absolute top-0 left-0 w-full h-full bg-orange-100 bg-opacity-50"
        // animate={animation}
        // initial="hidden"
        // variants={{
        //   visible: {
        //     opacity: 1,
        //     width: 100 + "%",
        //     transition: {
        //       duration: 1.5,
        //       transition: {
        //         delay: 1,
        //         type: "spring",
        //         stiffness: 500,
        //         damping: 60,
        //         mass: 6,
        //       },
        //     },
        //   },
        //   hidden: {
        //     opacity: 0,
        //     width: 0 + "%",
        //   },
        // }}
      />
      <div className="relative container mx-auto">
        <div className="flex flex-wrap justify-center items-center pl-8 lg:pl-50 text-center lg:text-left">
          <motion.div
            id="msg-switch"
            className="flex-initial mb-50 mr-8 lg:mr-50"
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                scale: 0.9,
                opacity: 1,
                transition: {
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              hidden: {
                scale: 0.9,
                opacity: 0,
              },
            }}
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              className="w-full border-b-2 border-white mx-auto lg:mx-0"
              style={{ marginTop: "-50px", maxWidth: "400px" }}
            />

            <h2 className="mt-4 text-4xl leading-tight">Switching is easy</h2>

            <p className="w-full mt-4" style={{ maxWidth: "600px" }}>
              When you switch to SpotMe, your audience will already be familiar
              with our app. SpotMe apps have been designed based on other
              commercial apps that your audience already uses in their daily
              lives, for example <b>LinkedIn</b> and <b>Facebook</b>.
            </p>

            <motion.div
              className="table mx-auto lg:mx-0"
              whileHover={{ scale: 1.05 }}
            >
              <AnchorLink
                href="#get-started"
                title="Get Started with SpotMe + Cvent"
                className="table py-2 px-4 mt-8 lg:mx-0 border-2 border-primary-500 font-bold text-xl text-center text-primary-500 hover:bg-primary-500 hover:bg-opacity-10 rounded-full"
              >
                Make the switch
              </AnchorLink>
            </motion.div>
          </motion.div>

          <div id="img-switch" className="flex-initial mr-8 lg:mr-50">
            <motion.div
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.5,
                    type: "spring",
                    stiffness: 500,
                    damping: 60,
                    mass: 6,
                  },
                },
                hidden: {
                  opacity: 0,
                  x: 64,
                },
              }}
            >
              <MobileUser
                className="max-w-full"
                style={{ width: "250px", marginBottom: "-100px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecSwitching
