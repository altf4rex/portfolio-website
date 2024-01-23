import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Wait from "@/components/Wait";

export default function Home() {
  return (
    <main>
      <LeftMenu />
      <Main />
      <About />
      <Wait />
      <Projects />
      <Contacts />
    </main>
  )
}
