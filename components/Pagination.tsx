import { TDirection } from "@/types";
import React from "react";
import qs from "qs";
import { useRouter } from "next/router";

interface IPropType {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropType) => {
  const router = useRouter();
  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };
  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = async (direction: TDirection) => {
    if (direction == 1 && isNextDisabled()) {
      return;
    }
    if (direction == -1 && isPrevDisabled()) {
      return;
    }
    const queryString = qs.stringify({
      ...router.query,
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={() => handlePaginate(-1)}
        className={`"px-6 py-2 w-16 text-white rounded-md bg-primary mr-4 " + ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Privous{" "}
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`"px-5 w-16 py-2 text-white rounded-md bg-primary " + ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
