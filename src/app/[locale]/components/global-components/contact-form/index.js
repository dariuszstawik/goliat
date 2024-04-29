"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "../button";
import ButtonSm from "../button-sm";
// import { EmailJSResponseStatus } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

const ContactForm = ({
  name,
  phone,
  email,
  message,
  marketing,
  privacy,
  submit,
}) => {
  const form = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     process.env.EMAILJS_SERVICE_ID,
  //     process.env.EMAILJS_TEMPLATE_ID,
  //     form.current,
  //     {
  //       publicKey: process.env.EMAILJS_PUBLIC_KEY,
  //     }
  //   );

  //   setShowNotification(true);

  //   e.target && e.target.reset();
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // const form = useRef(null);

  // const [showNotification, setShowNotification] = useState(false);

  // useEffect(() => {
  //   if (showNotification) {
  //     const timer = setTimeout(() => {
  //       setShowNotification(false);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [showNotification]);

  // const sendEmail = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userName: e.target.userName.value,
  //       phone: e.target.phone.value,
  //       email: e.target.email.value,
  //       message: e.target.message.value,
  //     }),
  //   });

  //   if (response.status === 200) {
  //     setShowNotification(true);
  //   } else {
  //     console.log("Email not sent");
  //   }

  //   e.target && e.target.reset();
  // };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-sm lg:text-base w-full bg-primaryYellow flex flex-col justify-center items-center lg:items-start lg:flex-row gap-14 py-9 px-14"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-9">
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            placeholder={name}
            className="w-full rounded-full border border-black leading-8 px-4"
            // className="relative border border-primaryGreen rounded-xl leading-8 px-4"
          ></input>

          <input
            id="user_phone"
            name="user_phone"
            type="text"
            required
            placeholder={phone}
            className="w-full rounded-full border border-black leading-8 px-4"
            // className="relative border border-primaryGreen rounded-xl leading-8 px-4"
          ></input>

          <input
            id="user_email"
            name="user_email"
            // type="text"
            type="email"
            required
            placeholder={email}
            className="w-full rounded-full border border-black leading-8 px-4"
            // className="relative border border-primaryGreen rounded-xl leading-8 px-4"
          ></input>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-9">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder={message}
            className="w-full border border-black rounded-2xl leading-8 px-4"
          ></textarea>

          <div className="flex justify-start items-start gap-6">
            <div className="flex flex-col">
              <span>
                <input
                  type="checkbox"
                  id="marketingTermsCheckbox"
                  name="marketingTermsCheckbox"
                  // required
                  className=""
                />
                <label
                  htmlFor="marketingTermsCheckbox"
                  className="-translate-y-2 relative ml-2"
                >
                  {/* zgoda na przesyłanie materiałów marketingowych */}
                  {marketing}
                </label>
              </span>
              <span>
                <input
                  type="checkbox"
                  id="marketingTermsCheckbox"
                  required
                  className=""
                />
                <label
                  htmlFor="marketingTermsCheckbox"
                  className="-translate-y-2 relative before:content-['*'] before:text-smartOrange before:mr-2"
                >
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-primaryGreen"
                  >
                    {/* zaakceptowanie polityki prywatności */}
                    {privacy}
                  </Link>
                </label>
              </span>
            </div>
            <ButtonSm hasSmallerText> {submit}</ButtonSm>
          </div>
        </div>
      </form>
      {showNotification && (
        <div className="text-green-500 py-2 px-4 absolute top-100 right-0 mt-2 mr-2 rounded">
          Wiadomość wysłana. Dziękujemy!
        </div>
      )}
      {/* <section
        className=" pt-[112px] flex flex-col gap-2 relative"
        id="contactSection"
      >
        <SectionTitle>Wyślij wiadomość</SectionTitle>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative w-1/2 mx-auto flex flex-col gap-2"
        >
          <label
            htmlFor="usersName"
            className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
          >
            Imię i nazwisko
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            required
            className="relative border border-primaryGreen rounded-xl leading-8 px-4"
          ></input>

          <label
            htmlFor="email"
            className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
          >
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+"
            className="border border-primaryGreen rounded-xl leading-8 px-4"
          ></input>

          <label htmlFor="phone" className="uppercase">
            telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="border border-primaryGreen rounded-xl leading-8 px-4"
          ></input>

          <label
            htmlFor="message"
            className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
          >
            wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="border border-primaryGreen rounded-xl leading-8 px-4"
          ></textarea>

          <div className="flex justify-start items-start mt-6 mb-2">
            <input
              type="checkbox"
              id="privacyTermsCheckbox"
              required
              className="mr-2"
            />
            <label
              htmlFor="privacyTermsCheckbox"
              className="-translate-y-2 relative before:content-['*'] before:text-smartOrange before:mr-2"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
              otrzymania odpowiedzi na przesłane zapytanie. Administatorem
              danych osobowych jest Green leaf Power. Szczegółowe informacje
              znajdują się w{" "}
              <Link href="/polityka-prywatnosci" className="text-primaryGreen">
                Polityce Prywatności
              </Link>
              .
            </label>
          </div>

          <Button isOrange type="submit" className="ml-auto px-8 mt-4">
            Wyślij
          </Button>
          {showNotification && (
            <div className="text-primaryGreen text-2xl p-2 rounded absolute bottom-0 left-0">
              Wiadomość wysłana. Dziękujemy!
            </div>
          )}
        </form>
      </section> */}
    </div>
  );
};

export default ContactForm;
