import { ReactElement, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Card from "../../components/card";

import Layout from "../../components/layout";
import JobsLayout from "../../components/jobs-layout";

import {
  BackwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ForwardIcon,
} from "@heroicons/react/24/solid";

import { ParsedUrlQuery } from "querystring";
import { conn } from "../../server/database";

import { Job } from "../../interfaces/Jobs";
import type { NextPageWithLayout } from "../_app";
import axios from "axios";
import Link from "next/link";
import Pagination from "../../components/pagination";

interface Props {
  rows: Job[];
  page: number;
  count: number;
}

const Jobs: NextPageWithLayout = ({ rows, page, count }: Props) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const getPages = (length: number, inc: number = 1) => Array.from({ length }, (_, i) => i + inc);

  const totalPages = Math.ceil(count / 10);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      router.push(`/jobs?page=${page - 1}`);
    }
  };

  const handleNextPage = () => {
    router.push(`/jobs?page=${page + 1}`);
  };

  return (
    <div ref={ref} className="searched-jobs flex flex-col flex-grow pl-10 max-xs:pl-0">
      <div className="searched-bar flex items-center justify-between animate-slideY max-md:flex-col max-md:items-start">
        <div className="searched-show text-[19px] font-semibold">
          <p>
            {" "}
            Showing {rows.length} - {count} Jobs{" "}
          </p>
        </div>
        <div className="searched-sort max-md:mt-[5px]">
          Sort by: <span className="post-time">Newest Post </span>
          <span className="menu-icon">▼</span>
        </div>
      </div>
      <div className="job-cards pt-5 grid max-2xl:grid-cols-1 max-xd:grid-cols-1 max-3xl:grid-cols-2  max-xs:grid-cols-2 grid-cols-3 gap-6 animate-slideY ">
        {rows.map((job) => (
          <Card job={job} />
        ))}
      </div>
      <div className="pagination flex items-center mt-4">
        <div className="ml-auto flex items-center gap-2 px-8  text-xs">
          <button type="button" disabled={page == 1} className="border-none outline-none">
            <BackwardIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={page == 1}
            onClick={handlePrevPage}
            className="border-none outline-none"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <Pagination totalItems={count} currentPage={page} />
          <button type="button" onClick={handleNextPage}>
            <ChevronRightIcon className="w-4 h-4" />
          </button>
          <button>
            <ForwardIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

Jobs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <JobsLayout>{page}</JobsLayout>
    </Layout>
  );
};

export async function getServerSideProps({ query }: ParsedUrlQuery) {
  const page = query.page ? parseInt(query.page) : 1;
  const limit = 10;
  const offset = (page - 1) * limit;
  // console.log(page);

  // const { data: rows } = await axios.get(`http://localhost:3000/api/jobs?page=${page}`);
  const { rows } = await conn.query(
    `SELECT jobs.*, types.name as type, categories.name as category FROM jobs LEFT JOIN types ON jobs.type_id = types.id LEFT JOIN categories ON jobs.category_id = categories.id LIMIT ${limit} OFFSET ${offset};`
  );

  const {
    rows: [{ count: count }],
  } = await conn.query("SELECT COUNT(*) FROM jobs");

  console.log(count);

  // pages: Math.ceil(count / limit)
  return {
    props: { rows, page, count },
  };
}

export default Jobs;
