import Head from "next/head";
import Image from "next/image";
import Aside from "../components/aside";
import FilterNav from "../components/filterNav";
import Layout from "../components/layout";
import { jobData } from "../cardinfo";
import { GetServerSideProps } from "next";
import Card from "../components/card";
import { Job } from "../interfaces/Jobs";

interface Props {
  jobs: Job[];
}

export default function Home({ jobs }: Props) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="searched-jobs flex flex-col flex-grow pl-10">
        <div className="searched-bar flex items-center justify-between animate-slideY ">
          <div className="searched-show text-[19px] font-semibold">
            <p> Showing 0 Jobs </p>
          </div>
          <div className="searched-sort">
            Sort by: <span className="post-time">Newest Post </span>
            <span className="menu-icon">▼</span>
          </div>
        </div>
        <div className="job-cards pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideY ">
          {jobs.map((job) => (
            <Card job={job} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/jobs");
  const jobs = await res.json();

  return {
    props: { jobs },
  };
};
