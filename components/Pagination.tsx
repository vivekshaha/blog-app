import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-12">
      <button className="px-4 py-2 mr-4 text-white rounded-md bg-primary">
        Privous{" "}
      </button>
      <button className="px-4 py-2 text-white rounded-md bg-primary">
        Next
      </button>
    </div>
  );
};
export default Pagination;
