import React, { useContext, useState, useEffect } from "react";
import { ListContext } from "../App";
import { useNavigate, useLocation } from "react-router-dom";

const AddEmp = () => {
  const { EmployeeList, setEmployeeList } = useContext(ListContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [formValue, setFormValue] = useState({
    EmployeName: "",
    EmployeeId: "",
    EmployeeSalary: "",
    EmployeeEmail: "",
    EmployeeDesignation: "",
    performance: "",
  });

  // Prefill for edit
  useEffect(() => {
    if (location.state) {
      setFormValue(location.state); // original data for edit
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.state) { // edit mode
      const updatedList = EmployeeList.map(emp =>
        emp.EmployeeId === location.state.EmployeeId ? formValue : emp
      );
      setEmployeeList(updatedList);
    } else { // add new
      setEmployeeList([...EmployeeList, formValue]);
    }

    setFormValue({
      EmployeName: "",
      EmployeeId: "",
      EmployeeSalary: "",
      EmployeeEmail: "",
      EmployeeDesignation: "",
      performance: "",
    });

    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>{location.state ? "Edit Employee" : "Add Employee"}</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        {["EmployeName", "EmployeeId", "EmployeeSalary", "EmployeeEmail", "EmployeeDesignation"].map(field => (
          <div className="col-3" key={field}>
            <label>{field}</label>
            <input
              type={field === "EmployeeEmail" ? "email" : "text"}
              name={field}
              value={formValue[field]}
              onChange={handleChange}
              required
              readOnly={field === "EmployeeId" && location.state} // cannot edit ID
              className="form-control"
            />
          </div>
        ))}
        <div className="col-3">
          <label>Performance</label>
          <select
            name="performance"
            value={formValue.performance}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Performance</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
          </select>
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary">
            {location.state ? "Update Employee" : "Add Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmp;
