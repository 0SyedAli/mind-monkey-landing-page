import { Suspense, lazy } from "react";
import SpinnerLoading from "src/component/SpinnerLoading";
export const metadata = {
  title: 'Home | Mind Monkey',
  description: 'This is home page',
  keywords: ['nextjs', 'react', 'javascript'],
}
// Dynamically import components
const HeroSection = lazy(() => import("../component/home/HeroSection"));
const SectionTwo = lazy(() => import("../component/home/SectionTwo"));
const SectionThree = lazy(() => import("../component/home/SectionThree"));
const SectionFour = lazy(() => import("../component/home/SectionFour"));
const Testimonial = lazy(() => import("../component/home/Testimonial"));
const Faq = lazy(() => import("../component/home/Faq"));
const GetStart = lazy(() => import("../component/home/GetStart"));

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>My Awesome Home Page</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="Welcome to my awesome homepage!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <Suspense fallback={<SpinnerLoading />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SpinnerLoading />}>
        <SectionTwo />
      </Suspense>
      <Suspense fallback={<SpinnerLoading />}>
        <SectionThree />
      </Suspense>
      <Suspense fallback={<SpinnerLoading />}>
        <SectionFour />
      </Suspense>
      <Suspense fallback={<SpinnerLoading />}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<SpinnerLoading />}>
        <Faq />
      </Suspense>
      <Suspense fallback={<SpinnerLoading />}>
        <GetStart />
      </Suspense>
    </div>
  );
}
