import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { HowToOrder } from "@/components/how-to-order";
import { SignatureCakes } from "@/components/signature-cakes";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WelcomeScreen } from "@/components/welcome-screen";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <SignatureCakes />
        <HowToOrder />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
