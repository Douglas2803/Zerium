'use client';

import { Footer } from "./components/Footer";
import Header from "./components/Header/page";
import Section from "./components/Section/page";

import { FloatingWhatsApp } from "react-floating-whatsapp";


export default function Home() {
  return (
    <>
      <div className="hero_background" />
      <Header />
      <Section />
      <FloatingWhatsApp
        phoneNumber="5554981229448"
        accountName="Atendimento - Douglas"
        avatar="assets/images/douglas.webp"
        statusMessage="Geralmente responde em até 1 hora"
        chatMessage="Olá tudo bem ? Como posso te ajudar ? "
      />
      <Footer />
    </>
  );
}
