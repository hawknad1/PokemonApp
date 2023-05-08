import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/homeView/Home";
import PokemondCardList from "./components/listView/ListView";
import SideModal from "./components/side modal/SideModal";
import Topbar from "./components/topbar/Topbar";
import ListView from "./components/listView/ListView";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ThemeContext = createContext(null);
export const ModalContext = createContext(null);

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      <div id="blue">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listview" element={<ListView />} />
          </Routes>
        </Router>
      </div>
    </ModalContext.Provider>
  );
}

export default App;

// <div className="relative bg-[#F6F6F6] h-[1024px] md:w-full xl:w-[1441px]">
//       <Topbar />

//       <PokemondCardList />
//       {/* <SideModal /> */}
//     </div>
