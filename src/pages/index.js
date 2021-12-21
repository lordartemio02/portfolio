import * as React from "react";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { AboutMe } from "../components/aboutMe/aboutMe";
import "../styles/index.scss";
import SkillSet from "../components/skillSet/skillSet";
import Works from "../components/works/works";
import ContactMe from "../components/contactMe/contactMe";

const IndexPage = () => {
  return (
    <>
      <section className="linearGradient">
        <Header>
        </Header>
        <Hero>
        </Hero>
      </section>
      <AboutMe />
      <SkillSet />
      <Works />
      <ContactMe />
    </>
  )
}

export default IndexPage
