import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/homeView/Home";

import ListView from "./components/listView/ListView";
import { createContext, useEffect, useState } from "react";

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
