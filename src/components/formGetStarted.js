import React from "react"
import { useForm } from "react-hook-form"

import { motion } from "framer-motion"

export default function FormGetStarted() {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  // Form Functions
  const { register, handleSubmit, errors } = useForm()

  const handleError = msg => {
    return (
      <span className="inline-block py-1 px-2 text-xs bg-yellow-200">
        {msg}
      </span>
    )
  }

  const onSubmit = (data, e) => {
    console.log("Submit", data)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "get-started", data }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    e.preventDefault()
  }

  return (
    <form
      className="mt-4"
      onSubmit={handleSubmit(onSubmit)}
      name="get-started"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="get-started" />
      <div className="input-group mt-2">
        <label className="text-sm tracking-wide" htmlFor="firstName">
          First Name
          <input
            id="firstName"
            name="firstName"
            className="w-full py-2 px-4 border border-gray-300"
            type="text"
            ref={register({
              required: true,
              pattern: /^[a-z ,.'-]+$/i,
              maxLength: 30,
            })}
          />
        </label>
        {errors.firstName &&
          errors.firstName.type === "required" &&
          handleError("This field is required")}
        {errors.firstName &&
          errors.firstName.type === "maxLength" &&
          handleError("Max length exceeded")}
        {errors.firstName &&
          errors.firstName.type === "pattern" &&
          handleError("Invalid first name")}
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
            ref={register({
              required: true,
              pattern: /^[a-z ,.'-]+$/i,
              maxLength: 30,
            })}
          />
        </label>
        {errors.lastName &&
          errors.lastName.type === "required" &&
          handleError("This field is required")}
        {errors.lastName &&
          errors.lastName.type === "maxLength" &&
          handleError("Max length exceeded")}
        {errors.lastName &&
          errors.lastName.type === "pattern" &&
          handleError("Invalid last name")}
      </div>
      <div className="input-group mt-2">
        <label className="text-sm tracking-wide" htmlFor="emailAddress">
          Email Address
          <input
            id="emailAddress"
            name="emailAddress"
            className="w-full py-2 px-4 border border-gray-300"
            type="text"
            ref={register({
              required: true,
              pattern: /^[\w\-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,}$/i,
            })}
          />
        </label>
        {errors.emailAddress &&
          errors.emailAddress.type === "required" &&
          handleError("This field is required")}
        {errors.emailAddress &&
          errors.emailAddress.type === "pattern" &&
          handleError("Invalid email address")}
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
