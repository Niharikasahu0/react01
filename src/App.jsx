import React, { createContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ListEmp from "./components/ListEmp";
import AddEmp from "./components/AddEmp";
import ViewEmp from "./components/ViewEmp";
import "./App.css";


export const ListContext = createContext();

function App() {
  // useState must be inside component
  const [EmployeeList, setEmployeeList] = useState([]);

  return (
    <ListContext.Provider value={{ EmployeeList, setEmployeeList }}>
      <div>
        {/* Navbar */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/add">Add</Link> |{" "}
          <Link to="/view">View</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ListEmp />} />
          <Route path="/add" element={<AddEmp />} />
          <Route path="/view" element={<ViewEmp />} />
        </Routes>
      </div>
    </ListContext.Provider>
  );
}

export default App;
