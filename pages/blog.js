import Head from "next/head";
import React from "react";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Image from "next/image";

import axios from "axios";
import { url } from "../constants";
import BlogCard from "../components/common/blogCard";
import HeroImage from "../components/common/headerImage";

export default function Blog({ data }) {
  return (
    <div className="bg-white overflow-scroll no-scrollbar h-screen">
      <Head>
        <title>
          Nurturing Wellness Through Informed Healthcare | Apco Medicare
        </title>
        <meta
          name="keywords"
          content="apco pharma blogs, apco blogs, healthcare blogs, healthcare trends, wellness tips, healthy lifestyle"
        />
        <meta
          name="description"
          content="Explore the Apco Medicare Health Hub for insightful blogs dedicated to your well-being. From expert advice on healthcare trends to practical wellness tips, our blog is your go-to resource for a healthier and happier life. Stay informed, inspired, and take charge of your health journey with Apco Medicare."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.apcomedicare.com/blog" />
      </Head>
      <Header />
      <HeroImage title="Our Blogs" subtitle="Home - Blogs" />

      <section className=" mx-auto max-w-1200 px-4 xl:px-0  py-8 xl:py-20">
        <h2 className="font-semibold text-lg mb-6 md:text-2xl">Our Blogs</h2>
        <div className="grid lg:grid-cols-2  xl:grid-cols-3  gap-10 gap-y-14">
          {data?.blogs?.map((value) => (
            <BlogCard width="w-full" value={value} key={value._id} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from an API or any other source
  const { data } = await axios.get(`${url}/all/blog`);

  return {
    props: {
      data,
    },
    // Incremental Static Regeneration (ISR)
    revalidate: 300, // seconds, allows for re-fetching the data
  };
}
