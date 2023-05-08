import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Pagination() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <div className="absolute w-[366px] h-[40px] top-[860px] left-[118px] ">
        <div className="flex justify-between items-center">
          <div className="paginationStyle">
            <ChevronLeftIcon className="h-6 w-6" />
          </div>
          <p className="pagination-numbers">1</p>
          <p className="pagination-numbers">2</p>
          <p className="pagination-numbers">3</p>
          <p className="pagination-numbers">5</p>
          <p className="pagination-numbers">5</p>
          <p className="pagination-numbers">5</p>
          <div className="paginationStyle">
            <ChevronRightIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center gap-[12px] justify-center left-[1235px] top-[860px] w-[85px] h-[40px] rounded-lg bg-[#E1E1E1] ">
        <div
          onClick={() => setShowModal(!showModal)}
          className="w-[43px] cursor-pointer h-[32px] bg-white rounded flex items-center justify-center  "
        >
          <p className="text-lg font-medium">5</p>
        </div>
        <div
          onClick={() => setShowModal(!showModal)}
          className="w-5 h-5 cursor-pointer"
        >
          <ChevronDownIcon className="w-5 h-w-5" />
        </div>
      </div>
      {showModal && (
        <div className="absolute flex justify-center w-[101px] h-24 left-[1220px] top-[906px] bg-[#FFFFFF] rounded-lg shadow-sm ">
          <div className="">
            <div className="hover:bg-[#F3F3F3] w-[94px] h-8 rounded-md flex justify-center items-center cursor-pointer ">
              <p className="text-lg font-Clash font-medium">12</p>
            </div>
            <div className="hover:bg-[#F3F3F3] w-[94px] h-8 rounded-md flex justify-center items-center cursor-pointer">
              <p className="text-lg font-Clash font-medium">16</p>
            </div>
            <div className="hover:bg-[#F3F3F3] w-[94px] h-8 rounded-md flex justify-center items-center cursor-pointer">
              <p className="text-lg font-Clash font-medium">24</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pagination;
