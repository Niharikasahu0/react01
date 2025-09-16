import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListEmp from "./components/ListEmp";
import AddEmp from "./components/AddEmp";
import Navbar from "./components/Navbar";
import "./style1.css";

export const ListContext = createContext();

function App() {
  const [EmployeeList, setEmployeeList] = useState([]);

  return (
    <ListContext.Provider value={{ EmployeeList, setEmployeeList }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListEmp />} />
        <Route path="/add" element={<AddEmp />} />
      </Routes>
    </ListContext.Provider>
  );
}

export default App;
