import React from "react"
import { Helmet } from "react-helmet"

import "../style.scss"

import SecIntro from "../components/secIntro"
import SecStayInSync from "../components/secStayInSync"
import SecSwitching from "../components/secSwitching"
// import FormTest from "../components/formTest"

export default function HomePage() {
  return (
    <div className="pb-100 text-grayDark-500 overflow-x-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <title>SpotMe + Cvent</title>
        <meta name="title" content="SpotMe + Cvent" />
        <meta
          name="description"
          content="Enhance your events with SpotMe + Cvent"
        />
        <meta
          name="keywords"
          content="Events Meetings Management Conferencing Sync Video Online "
        />
        <link rel="canonical" href="https://spotme.tdaug.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotme.tdaug.com/" />
        <meta property="og:title" content="SpotMe + Cvent" />
        <meta
          property="og:description"
          content="Enhance your events with SpotMe + Cvent"
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://spotme.tdaug.com/" />
        <meta property="twitter:title" content="SpotMe + Cvent" />
        <meta
          property="twitter:description"
          content="Enhance your events with SpotMe + Cvent"
        />
        <meta property="twitter:image" content="" />
      </Helmet>

      <SecIntro />

      <SecStayInSync />

      <SecSwitching />

      <footer>
        <div className="container mx-auto">
          <p className="text-center text-xs">
            Copyright © 2020 SpotMe. All rights reserved.
          </p>
        </div>
      </footer>

      {/* <FormTest /> */}

      {/* <section className="hidden pt-100 px-50 bg-gray-100">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center items-start">
            <li>
              <ul>
                <li className="block p-2 bg-primary-100">bg-primary-100</li>
                <li className="block p-2 bg-primary-200">bg-primary-200</li>
                <li className="block p-2 bg-primary-300">bg-primary-300</li>
                <li className="block p-2 bg-primary-400">bg-primary-400</li>
                <li className="block p-2 bg-primary-500">bg-primary-500</li>
                <li className="block p-2 bg-primary-600">bg-primary-600</li>
                <li className="block p-2 bg-primary-700">bg-primary-700</li>
                <li className="block p-2 bg-primary-800">bg-primary-800</li>
                <li className="block p-2 bg-primary-900">bg-primary-900</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="block p-2 bg-grayDark-100">bg-grayDark-100</li>
                <li className="block p-2 bg-grayDark-200">bg-grayDark-200</li>
                <li className="block p-2 bg-grayDark-300">bg-grayDark-300</li>
                <li className="block p-2 bg-grayDark-400">bg-grayDark-400</li>
                <li className="block p-2 bg-grayDark-500">bg-grayDark-500</li>
                <li className="block p-2 bg-grayDark-600">bg-grayDark-600</li>
                <li className="block p-2 bg-grayDark-700">bg-grayDark-700</li>
                <li className="block p-2 bg-grayDark-800">bg-grayDark-800</li>
                <li className="block p-2 bg-grayDark-900">bg-grayDark-900</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="block p-2 bg-gray-100">bg-gray-100</li>
                <li className="block p-2 bg-gray-200">bg-gray-200</li>
                <li className="block p-2 bg-gray-300">bg-gray-300</li>
                <li className="block p-2 bg-gray-400">bg-gray-400</li>
                <li className="block p-2 bg-gray-500">bg-gray-500</li>
                <li className="block p-2 bg-gray-600">bg-gray-600</li>
                <li className="block p-2 bg-gray-700">bg-gray-700</li>
                <li className="block p-2 bg-gray-800">bg-gray-800</li>
                <li className="block p-2 bg-gray-900">bg-gray-900</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="block p-2 bg-grayLight-100">bg-grayLight-100</li>
                <li className="block p-2 bg-grayLight-200">bg-grayLight-200</li>
                <li className="block p-2 bg-grayLight-300">bg-grayLight-300</li>
                <li className="block p-2 bg-grayLight-400">bg-grayLight-400</li>
                <li className="block p-2 bg-grayLight-500">bg-grayLight-500</li>
                <li className="block p-2 bg-grayLight-600">bg-grayLight-600</li>
                <li className="block p-2 bg-grayLight-700">bg-grayLight-700</li>
                <li className="block p-2 bg-grayLight-800">bg-grayLight-800</li>
                <li className="block p-2 bg-grayLight-900">bg-grayLight-900</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="block p-2 bg-orange-100">bg-orange-100</li>
                <li className="block p-2 bg-orange-200">bg-orange-200</li>
                <li className="block p-2 bg-orange-300">bg-orange-300</li>
                <li className="block p-2 bg-orange-400">bg-orange-400</li>
                <li className="block p-2 bg-orange-500">bg-orange-500</li>
                <li className="block p-2 bg-orange-600">bg-orange-600</li>
                <li className="block p-2 bg-orange-700">bg-orange-700</li>
                <li className="block p-2 bg-orange-800">bg-orange-800</li>
                <li className="block p-2 bg-orange-900">bg-orange-900</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="block p-2 bg-orangeLight-100">
                  bg-orangeLight-100
                </li>
                <li className="block p-2 bg-orangeLight-200">
                  bg-orangeLight-200
                </li>
                <li className="block p-2 bg-orangeLight-300">
                  bg-orangeLight-300
                </li>
                <li className="block p-2 bg-orangeLight-400">
                  bg-orangeLight-400
                </li>
                <li className="block p-2 bg-orangeLight-500">
                  bg-orangeLight-500
                </li>
                <li className="block p-2 bg-orangeLight-600">
                  bg-orangeLight-600
                </li>
                <li className="block p-2 bg-orangeLight-700">
                  bg-orangeLight-700
                </li>
                <li className="block p-2 bg-orangeLight-800">
                  bg-orangeLight-800
                </li>
                <li className="block p-2 bg-orangeLight-900">
                  bg-orangeLight-900
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  )
}
