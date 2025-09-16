import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";

const ViewEmp = () => {
  const { EmployeeList, setEmployeeList } = useContext(ListContext);
  const [viewData, setViewData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const filtered = EmployeeList?.filter((_, index) => index + 1 === parseInt(id));
      setViewData(filtered[0]);
    }
  }, [id, EmployeeList]);

  if (!viewData) return <p className="text-center mt-4">Loading employee details...</p>;

  return (
    <div className="container mt-4">
      <h3>Employee Details</h3>
      <table className="table table-bordered mt-3">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{viewData.EmployeeName}</td>
          </tr>
          <tr>
            <th>ID</th>
            <td>{viewData.EmployeeId}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{viewData.EmployeeEmail}</td>
          </tr>
          <tr>
            <th>Designation</th>
            <td>{viewData.EmployeeDesignation}</td>
          </tr>
          <tr>
            <th>Salary</th>
            <td>{viewData.EmployeeSalary}</td>
          </tr>
          <tr>
            <th>Performance</th>
            <td>{viewData.performance}</td>
          </tr>
        </tbody>
      </table>

      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate(-1)} // Go back
      >
        Back
      </button>
    </div>
  );
};

export default ViewEmp;
