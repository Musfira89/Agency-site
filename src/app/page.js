import Chooseus from "@/components/view/chooseus"
import Herosection from "@/components/view/herosection"
import Support from "@/components/view/support"
import Team from "@/components/view/team"
import Services from "@/components/view/services"
import Prices from "@/components/view/prices"
import { Portfolio } from "@/components/view/portfolio"
import { Testimonials } from "@/components/view/testimonials"
import Achivements from "@/components/view/achivements"
import { Brands } from "@/components/view/brands"
import { Blog } from "@/components/view/blogs"
import { Contact } from "@/components/view/contactus"
import { StartedNow } from "@/components/view/startedbutton"
import Footer from "@/components/view/footer"
import { ScrollTop } from "@/components/view/scrolltotop"

export default function Home() {
  return (
    <div className="dark:bg-[#181C31]">
      <Herosection />
      <Support />
      <Chooseus />
      <Team />
      <Services />
      <Prices />
      <Portfolio />
      <Testimonials />
      <Achivements />
      <Brands />
      <Blog />
      <Contact />
      <StartedNow />
      <Footer />
      <ScrollTop />
    </div>
  )
}
