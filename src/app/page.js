"use client";
import { Suspense, lazy } from "react";
import Head from "next/head";

// Dynamically import components
const HeroSection = lazy(() => import("../component/home/HeroSection"));
const SectionTwo = lazy(() => import("../component/home/SectionTwo"));
const SectionThree = lazy(() => import("../component/home/SectionThree"));
const SectionFour = lazy(() => import("../component/home/SectionFour"));
const Testimonial = lazy(() => import("../component/home/Testimonial"));
const Faq = lazy(() => import("../component/home/Faq"));
const GetStart = lazy(() => import("../component/home/GetStart"));
const Footer = lazy(() => import("../component/Footer"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Awesome Home Page</title>
        <link rel="icon" href="/images/favicon.ico" />
        {/* Add other meta tags or links for stylesheets if necessary */}
        <meta name="description" content="Welcome to my awesome homepage!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading Section...</div>}>
        <SectionTwo />
      </Suspense>
      <Suspense fallback={<div>Loading Section...</div>}>
        <SectionThree />
      </Suspense>
      <Suspense fallback={<div>Loading Section...</div>}>
        <SectionFour />
      </Suspense>
      <Suspense fallback={<div>Loading Section...</div>}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<div>Loading Section...</div>}>
        <Faq />
      </Suspense>
      <Suspense fallback={<div>Loading Section...</div>}>
        <GetStart />
      </Suspense>
    </div>
  );
}
