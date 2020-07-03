import React from "react"

import { motion } from "framer-motion"

export default function FormGetStarted() {
  return (
    <form
      className="mt-4"
      name="get-started"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <div className="input-group mt-2">
        <label className="text-sm tracking-wide" htmlFor="firstName">
          First Name
          <input
            id="firstName"
            name="firstName"
            className="w-full py-2 px-4 border border-gray-300"
            type="text"
          />
        </label>
      </div>
      {/* Netlify Recaptcha */}
      <div className="hidden" data-netlify-recaptcha="true" />
      <div className="input-group mt-2">
        <label className="text-sm tracking-wide" htmlFor="lastName">
          Last Name
          <input
            id="lastName"
            name="lastName"
            className="w-full py-2 px-4 border border-gray-300"
            type="text"
          />
        </label>
      </div>
      <div className="input-group mt-2">
        <label className="text-sm tracking-wide" htmlFor="emailAddress">
          Email Address
          <input
            id="emailAddress"
            name="emailAddress"
            className="w-full py-2 px-4 border border-gray-300"
            type="text"
          />
        </label>
      </div>
      <div className="input-group submit">
        <motion.input
          type="submit"
          value="Get Started"
          className="block w-64 max-w-full py-2 px-4 mt-4 mx-auto font-bold text-xl text-white border-2 border-primary-500 bg-primary-500 hover:bg-primary-400 rounded-full cursor-pointer"
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </form>
  )
}
