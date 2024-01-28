
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import LeftMenu from "@/components/LeftMenu";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Wait from "@/components/Wait";
import { Suspense } from "react";
import ModelLoader from "@/components/ModelLoader";

export default function Home() {
  return (
    <Suspense fallback={<ModelLoader />}>
    <main>

        <LeftMenu />
        <Main />
        <About />
        <Wait />
        <Projects />
        <Contacts />

    </main>
    </Suspense>
  )
}
