import { BrowserRouter as Router, useNavigate } from "react-router-dom";

import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Name from "./Name";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[375px] h-[667px] md:w-[768px] md:h-[1024px] lg:w-[1024px] lg:h-[600px] xl:w-[1440px] xl:h-[1024px]  ">
      <Logo />
      <Name />
      <div className="absolute w-[370px] h-12 left-[535px] top-[446px] ">
        <p className="text-center text-lg font-General font-normal text-black">
          Largest Pokemon index with information about every Pokemon you can
          think of.
        </p>
      </div>
      <SearchBar />
      <div className="absolute left-[688px] top-[687px] w-auto">
        <p
          onClick={() => {
            navigate("/listview");
          }}
          className="text-lg font-medium font-General text-black hover:cursor-pointer hover:underline"
        >
          View All
        </p>
      </div>
    </div>
  );
}

export default Home;
