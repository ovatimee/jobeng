import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/layout";
import { Minicard } from "../../components/minicard";
import { Overview } from "../../components/overview";
import Aside from "../../components/aside";
import FilterNav from "../../components/filterNav";
import { Job } from "../../interfaces/Jobs";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

interface Props {
  data: Job;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export default function Product({ data }: Props) {

  return (
    <Layout>
      <div className="wrapper w-full flex flex-col flex-grow scroll-smooth py-8 px-10 overflow-auto max-sm:p-5">
        <FilterNav />
        <div className="main-container flex flex-grow pt-8 max-md:pt-5">
          <Aside classNames="max-5xl:hidden" />
          <div className="job-overview flex flex-grow animate-slide">
            <div className="job-overview-cards flex flex-col w-[330px] h-full flex-shrink-0 space-y-4 max-xl:hidden">
              <Minicard />
            </div>
            <Overview job={data} />
          </div>
        </div>
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

  const { data } = await axios.get(`http://localhost:3000/api/jobs/${id}`);

  return { props: { data } };
};
