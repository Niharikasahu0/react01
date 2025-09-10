import React, { useContext, useState } from "react";
import { ListContext } from "../App";

const AddEmp = () => {
  const { EmployeeList, setEmployeeList } = useContext(ListContext);
  const [formValue, setFormValue] = useState({
    EmployeName: "",
    EmployeeId: "",
    EmployeeSalary: "",
    EmployeeEmail: "",
    EmployeeDesignation: "",
    performance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeList([...EmployeeList, formValue]);
    // Reset form after submission
    setFormValue({
      EmployeName: "",
      EmployeeId: "",
      EmployeeSalary: "",
      EmployeeEmail: "",
      EmployeeDesignation: "",
      performance: "",
    });
  };

  return (
    <div className="container-fluid">
      <div className="row g-3 mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="m-0">Add Employee</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-3">
                    <label className="fs-6">Employee Name</label>
                    <input
                      type="text"
                      placeholder="Employee name"
                      className="form-input"
                      name="EmployeName"
                      value={formValue.EmployeName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label className="fs-6">Employee Id</label>
                    <input
                      type="text"
                      placeholder="Employee Id"
                      className="form-input"
                      name="EmployeeId"
                      value={formValue.EmployeeId}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label className="fs-6">Employee Salary</label>
                    <input
                      type="text"
                      placeholder="Employee Salary"
                      className="form-input"
                      name="EmployeeSalary"
                      value={formValue.EmployeeSalary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label className="fs-6">Employee Designation</label>
                    <input
                      type="text"
                      placeholder="Employee Designation"
                      className="form-input"
                      name="EmployeeDesignation"
                      value={formValue.EmployeeDesignation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label className="fs-6">Employee Email</label>
                    <input
                      type="text"
                      placeholder="Employee Email"
                      name="EmployeeEmail"
                      className="form-input"
                      value={formValue.EmployeeEmail}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label className="fs-6">Employee Performance</label>
                    <select
                      className="form-input"
                      name="performance"
                      value={formValue.performance}
                      onChange={handleChange}
                    >
                      <option value="">Select Performance</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="average">Average</option>
                    </select>
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Save Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;

