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
  related: Job[];
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export default function JobOverview({ data, related }: Props) {
  return (
    <div className="job-overview flex flex-grow animate-slide overflow-y-auto h-[80vh]">
      <div className="job-overview-cards flex flex-col w-[325px] h-full overflow-scroll flex-shrink-0 space-y-2 max-xl:hidden">
        {related.map((job) => (
          <Minicard data={job} />
        ))}
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

  // let related = `WITH current_job AS (
  //   SELECT $1 AS title, $2 AS location), words AS (
  //   SELECT unnest(string_to_array(title, ' ')) AS word
  //   FROM current_job)
  //   SELECT *
  //   FROM jobs
  //   WHERE (location ILIKE ANY (SELECT '%' || word || '%' FROM words)) OR (title ILIKE ANY (SELECT '%' || word || '%' FROM words)) LIMIT 10;`;

  const relatedQuery = `SELECT jobs.*, types.name as type, 
    categories.name as category 
    FROM jobs LEFT JOIN types ON jobs.type_id = types.id 
    LEFT JOIN categories ON jobs.category_id = categories.id 
    WHERE $1 = categories.id AND jobs.id != $2;`

  const {
    rows: [data],
  } = await conn.query("SELECT * FROM jobs WHERE id = $1", [id]);

  const { rows: categories } = await conn.query("SELECT * FROM categories;");
  const { rows: types } = await conn.query("SELECT * FROM types;");
  const { rows: relate } = await conn.query(relatedQuery, [data.category_id, data.id]);
  console.log(data)

  return { props: { data, categories, types, related: relate } };
};
