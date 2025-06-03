"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdDownload } from "react-icons/io";

const Formulario = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const regexName = /^[A-Za-zÀ-ÖØ-ÿ\s]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPhone = /^\(\d{2}\)\s\d{5}-\d{4}$/;

  const cellNUmberMask = (number: string): string => {
    const numericNumber = number.replace(/\D/g, "");

    const limitedNumber = numericNumber.substring(0, 11);

    const maskedNumber = limitedNumber
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2");

    return maskedNumber;
  };

  function validateFields(): boolean {
    return (
      regexName.test(name) &&
      regexEmail.test(email) &&
      regexPhone.test(phone) &&
      message.trim() !== ""
    );
  }

  const notify = (message: string, type: "success" | "error") =>
    toast(message, { type });

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateFields()) {
      notify("Por favor, preencha todos os campos corretamente.", "error");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone,
    };

    emailjs
      .send(
        "service_rpsqfcn",
        "template_lx6ixga",
        templateParams,
        "TGpHPJTJFebg_rh9k"
      )
      .then((response) => {
        console.log("Email enviado", response);
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
        notify("Mensagem enviada com sucesso!", "success");
      })
      .catch((err) => {
        console.error("ERRO: ", err);
        notify("Erro ao enviar a mensagem.", "error");
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div className="max-w-4xl w-full">
      <form
        action="#"
        method="post"
        onSubmit={sendEmail}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex flex-col items-start flex-1">
            <label
              htmlFor="name"
              className="text-sm sm:text-lg mb-3 text-grey_2 text-center bg-black_1"
            >
              Qual seu nome ?
            </label>

            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
              className="h-11 rounded-lg w-full border border-grey_2 bg-black_1 focus:outline-none focus:bg-[#b2b4ff]/25 text-grey_3
              text-left pl-4"
            />
          </div>
          <div className="flex flex-col items-start flex-1">
            <label
              htmlFor="email"
              className="text-sm sm:text-lg mb-3 text-grey_2 text-center"
            >
              Qual seu e-mail ?
            </label>

            <input
              type="email"
              name="email"
              placeholder="exemplo@gmail.com"
              id="email"
              required
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              className="h-11 rounded-lg w-full border border-grey_2 bg-black_1 focus:outline-none focus:bg-[#b2b4ff]/25
              text-grey_3 text-left pl-4"
            />
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <label
            htmlFor="phone"
            className="text-sm sm:text-lg mb-3 text-grey_2 text-center"
          >
            Telefone
          </label>

          <input
            type="text"
            name="phone"
            placeholder="(xx) xxxxx-xxxx"
            id="phone"
            required
            value={phone}
            className="h-11 rounded-lg w-full border border-grey_2 bg-black_1 focus:outline-none focus:bg-[#b2b4ff]/25 text-grey_3
            text-left pl-4 lg:max-w-[436px]"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPhone(cellNUmberMask(event.target.value))
            }
          />
        </div>
        <div className="flex flex-col items-start">
          <label
            htmlFor="message"
            className="text-sm sm:text-lg mb-3 text-grey_2 text-center"
          >
            Fale sobre seu negócio
          </label>

          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(event.target.value)
            }
            className="h-32 my-auto rounded-lg w-full border border-grey_2 bg-black_1 focus:outline-none focus:bg-[#b2b4ff]/25
            text-grey_3 text-left pl-4 pt-4"
          />
        </div>

        <button
          type="submit"
          className={`group flex justify-center items-center gap-3 rounded-full border border-grey_2 h-12 my-4 mx-auto w-full sm:max-w-[328px] lg:max-w-[50%] px-6 transition-all duration-300 ease-in-out
        ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-200"}
        `}
          disabled={isSubmitting}
        >
          <IoMdDownload className="text-grey_3 transition-colors duration-300 group-hover:text-black_1 group-active:text-white" />

          <p className="text-grey_3 text-sm sm:text-xl font-bold transition-colors duration-300 group-hover:text-black_1 group-active:text-white">
            Enviar mensagem
          </p>
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Formulario;
