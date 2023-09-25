import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const emailRef = useRef();
  const msgRef = useRef();
  const nameRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_say2aum",
        "template_wk77gyp",
        form.current,
        "PqMeFAA-Ccy08Am5A"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // alert("Message sent successfully!");
          toast("Message sent successfully!");
          emailRef.current.value = "";
          msgRef.current.value = "";
          nameRef.current.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contact}>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" ref={nameRef} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" ref={emailRef} />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" ref={msgRef} />
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Contact;
