import React from "react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/aninmation/done.json";
import mailAnimation from "../../../public/aninmation/mail.json";

import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xdkngzqz");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more inforemation and Get notified When I pubplish
        something new{" "}
      </p>
      <div className="flex contact-container">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email"> Email Address:</label>
            <input
              type="email"
              required
              name="email"
              id="email"
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" required id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button disabled={state.submitting}>
            {state.submitting ? "submitting.." : "submit"}
          </button>
          {state.succeeded && (
            <h1
              className="flex submit-message"
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 55 }}
                animationData={doneAnimation}
              />
              Thanks for meassaging!
            </h1>
          )}
        </form>
        <div className="animation">
          <Lottie style={{ height: 400 }} animationData={mailAnimation} />
        </div>
      </div>
    </section>
  );
}
