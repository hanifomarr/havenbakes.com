import Banner from "@/components/homepage/Banner";
import Overview from "@/components/homepage/Overview";
import Testimonial from "@/components/homepage/Testimonial";
import Hero from "@/components/homepage/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Banner />
      <Testimonial />
    </>
  );
}
