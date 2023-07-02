"use client";
import CardsContent from "@/components/CardsContent/CardsContent";
import Content from "@/components/Content/Content";
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Leads from "@/components/Leads/Leads";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Leads />
      <Footer />
      <Copyright />
    </>
  );
}
