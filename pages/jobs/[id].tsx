import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import Layout from "../../components/layout";
import { Minicard } from "../../components/minicard";
import { Overview } from "../../components/overview";
import { Job } from "../../interfaces/Jobs";
import { ParsedUrlQuery } from "querystring";
import { conn } from "../../server/database";
import JobsLayout from "../../components/jobs-layout";

interface Props {
  data: Job;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export default function JobOverview({ data }: Props) {
  return (
    <div className="job-overview flex flex-grow animate-slide">
      <div className="job-overview-cards flex flex-col w-[330px] h-full flex-shrink-0 space-y-4 max-xl:hidden">
        <Minicard />
      </div>
      <Overview job={data} />
    </div>
  );
}

JobOverview.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <JobsLayout>{page}</JobsLayout>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const { rows } = await conn.query("SELECT * FROM jobs;");

  // const paths = rows.map((job: Job) => ({
  //   params: { id: job.id.toString() },
  // }));

  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const id = params!.id;

  const {
    rows: [data],
  } = await conn.query("SELECT * FROM jobs WHERE id = $1", [id]);

  const { rows: categories } = await conn.query("SELECT * FROM categories;");
  const { rows: types } = await conn.query("SELECT * FROM types;");

  return { props: { data, categories, types } };
};
