import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/layout";
import { Minicard } from "../../components/minicard";
import { Overview } from "../../components/overview";
import { Job } from "../../interfaces/Jobs";
import { ParsedUrlQuery } from "querystring";

interface Props {
  job: Job;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export default function Product({ job }: Props) {
  console.log(job);
  return (
    <Layout>
      <div className="job-overview flex flex-grow animate-slide">
        {/* mini card  */}
        <div className="job-overview-cards flex flex-col w-[330px] h-full flex-shrink-0 space-y-4">
          <Minicard />
        </div>
        {/* overview  */}
        <Overview job={job} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/jobs");
  const jobs = await res.json();

  const paths = jobs.map((job) => ({
    params: { id: job.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const id = params!.id;

  const res = await fetch(`http://localhost:3000/api/jobs/${id}`);
  const job = await res.json();

  return { props: { job } };
};
