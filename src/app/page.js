import { lazy } from "react";
import BackToTopButton from "src/component/BackToTopButton";

export const metadata = {
  title: "Home | Mind Monkey",
  description: "This is home page",
  keywords: ["nextjs", "react", "javascript"],
};

// Lazy load components
const HeroSection = lazy(() => import("../component/home/HeroSection"));
const SectionTwo = lazy(() => import("../component/home/SectionTwo"));
const SectionThree = lazy(() => import("../component/home/SectionThree"));
const SectionFour = lazy(() => import("../component/home/SectionFour"));
const Testimonial = lazy(() => import("../component/home/Testimonial"));
const Faq = lazy(() => import("../component/home/Faq"));
const GetStart = lazy(() => import("../component/home/GetStart"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Testimonial />
      <Faq />
      <GetStart />
    </>
  );
}
