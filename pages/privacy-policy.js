import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { PrivacyContent } from "../constants/privacy";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy: Srisudha Consultancy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className=" flex  flex-col  md:bg-gray-100 ">
        <div className=" no-scrollbar  flex-1  md:relative">
          <div className=" flex flex-col px-4 py-4 md:py-14 md:px-20">
            <p className="items-center text-center text-lg font-medium md:text-2xl md:font-semibold">
              Privacy Policy
            </p>

            <div className="markdown py-8 md:p-8">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {PrivacyContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
