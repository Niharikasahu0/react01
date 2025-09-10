import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ListContext } from "../App";

const ListEmp = () => {
  const { EmployeeList, setEmployeeList } = useContext(ListContext);
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 px-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3 className="m-0">Employee List</h3>
              <NavLink to="/add" className="btn btn-primary">
                Create New
              </NavLink>
            </div>

            <div className="card-body">
              {EmployeeList.length === 0 ? (
                <p>No employees available</p>
              ) : (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EmployeeList.map((emp, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.handle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;
