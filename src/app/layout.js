"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import { Archivo, Outfit, Poppins, Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Header from "src/component/Header";
import Footer from "src/component/Footer";
import NextTopLoader from "nextjs-toploader";
import SmoothScrollProvider from "src/component/SmoothScrollProvider";



// Dynamically import BootstrapClients
const BootstrapClients = dynamic(() =>
  import("../component/BootstrapClients")
);

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "500"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300"],
});

export default function RootLayout({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    // Listen for the window load event
    window.addEventListener("load", handleLoad);

    // Simulate content loading (if needed)
    const timer = setTimeout(() => {
      setIsLoaded(true); // Remove this if you only rely on the load event
    }, 0); // Change the delay if simulating content loading

    // Cleanup event listener and timer
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${outfit.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <NextTopLoader
          showSpinner={false}
          color="#293693"
          easing="ease"
          speed={500}
          height={2}
        />
        <SmoothScrollProvider>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div style={{ position: "relative", minHeight: "100vh" }}>
                {!isLoaded && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "trasnparent", // Matches your website's background
                      zIndex: 10,
                    }}
                  >
                    <Spinner animation="border" variant="light" />
                  </div>
                )}
                <div
                  style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s" }}
                >
                  <Header />

                  {children}
                  <Footer />

                  <BootstrapClients />
                </div>
              </div>
            </div>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
