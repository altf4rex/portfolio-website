import About from "@/components/About";
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import Main from "@/components/Main";
import Wait from "@/components/Wait";

export default function Home() {
  return (
    <main>
      <Header />
      <LeftMenu />
      <Main />
      <About />
      <Wait />
    </main>
  )
}
