import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container w-5/6 mx-auto font-sans">
        <NextNProgress />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
