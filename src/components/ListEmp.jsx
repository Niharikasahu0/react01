import React, { useContext } from "react";
import { ListContext } from "../App";
import { useNavigate } from "react-router-dom";

const ListEmp = () => {
  const { EmployeeList, setEmployeeList } = useContext(ListContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setEmployeeList(EmployeeList.filter(emp => emp.EmployeeId !== id));
  };

  const handleEdit = (emp) => {
    navigate("/add", { state: emp }); // optional, pehle simple add hi tha
  };

  return (
    <div className="container mt-4">
      <h2>Employee List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Performance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeList.map((emp, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{emp.EmployeName}</td>
              <td>{emp.EmployeeId}</td>
              <td>{emp.EmployeeEmail}</td>
              <td>{emp.EmployeeDesignation}</td>
              <td>{emp.performance}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.EmployeeId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmp;
