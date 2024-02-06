import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import rehypeRaw from "rehype-raw";

import axios from "axios";
import { url } from "../../constants";
import Head from "next/head";
import Header from "../../components/layout/header";
import Image from "next/image";
import moment from "moment";
import Footer from "../../components/layout/footer";

const ExamSyllabusDetails = ({ data }) => {
  const router = useRouter();
  // const [detail, setDetail] = useState(null);

  // useEffect(() => {
  //   if (router.isReady) {
  //     getDetailHandler();
  //   }
  // }, [router.isReady]);

  // async function getDetailHandler() {
  //   try {
  //     const { data } = await axios.get(`${url}/blog/${router.query.id}`);

  //     setDetail(data);
  //   } catch (err) {}
  // }

  let hours = moment().diff(moment(data?.createdAt), "hours");

  return (
    <div className="flex flex-col bg-white h-screen overflow-scroll no-scrollbar">
      <Head>
        <title>{`${data?.name} | Srisudha Consultancy`}</title>
        <meta name="description" content={data?.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.srisudhaconsultancy.com/blog/${data?.slug}`}
        />
      </Head>
      <Header />
      <div className="flex-1 px-4 md:px-0 max-w-2xl mt-6 md:mt-20 mx-auto ">
        <div>
          <h1 className=" text-lg leading-6 md:leading-9 md:text-3xl font-medium md:font-semibold  uppercase">
            {data?.name}
          </h1>
          <h2 className=" text-15 md:text-base mt-1 text-gray-400  ">
            {data?.description}
          </h2>
        </div>
        <div className="flex gap-4 mt-5 md:mt-8 items-center">
          <article className="bg-primary h-10 w-10 flex items-center justify-center rounded-full font-medium text-white ">
            S
          </article>
          <section>
            <p>Srisudha Consultancy</p>
            <div>
              <div className="flex gap-2 text-sm text-gray-500 items-center">
                <p>{data?.minute ?? 0} min read</p>
                <p className="h-1 w-1 rounded-full bg-gray-400" />
                <p>
                  {hours / 24 > 1
                    ? `${parseInt(hours / 24)} days ago`
                    : `${hours % 24} hours ago`}
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="w-full mt-4 md:mt-8 h-48 md:h-80 relative">
          <Image
            alt={data?.name}
            src={`${process.env.BUCKET_URL}/${data?.imageUrl}`}
            layout="fill"
            objectFit="contain"
          />
        </section>

        <main className=" flex flex-col mt-4  gap-6 mb-12">
          <article className="markdown">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {data?.markdown}
            </ReactMarkdown>
          </article>
          {/* <section className="text-xs my-8">
            <span className="font-semibold">Discalimer: </span>
            Syllabus is taken from their respective website. Fluxeducare is not
            responsible for authenticity of syllabus. It is recommended for the
            students to check the details of syllabus at their official website.
          </section> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await axios.get(`${url}/important/blog`);
  const paths = data.map((item) => ({ params: { id: item.slug } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const { data } = await axios.get(`${url}/blog/${params.id}`);

  // Revalidate the data every 60 seconds
  return { props: { data }, revalidate: 300 };
}

export default ExamSyllabusDetails;
