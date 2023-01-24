import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import usePagination from "../hooks/usePagination";

export type PaginationProps = {
  totalItems: number;
  currentPage: number;
  itemsPerPage?: number;
};

export const dotts = "...";

const Pagination = ({ totalItems, currentPage, itemsPerPage = 10 }: PaginationProps) => {
  const router = useRouter();

  const pages = usePagination(totalItems, currentPage, itemsPerPage);
  const handlePagination = (page: number) => {
    router.push(`/jobs?page=${page}`);
  };

  return (
    <div className="flex items-center justify-center my-8">
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-black">
            {pageNumber}
          </span>
        ) : (
          <a
            key={i}
            type="button"
            onClick={() => handlePagination(pageNumber as number)}
            className={`${
              pageNumber === currentPage ? "text-active-color" : "text-black"
            } py-2 mx-1 rounded-full text-sm font-semibold no-underline cursor-pointer`}
          >
            {pageNumber}
          </a>
        )
      )}
    </div>
  );
};

export default Pagination;
