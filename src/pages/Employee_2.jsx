import React, { useState } from "react";
import Select from "react-select";
import SearchBar from "../components/SearchBar";
import Switch from "../components/Switch";
function Employee() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const headers = [
    "No.",
    "Employee Name",
    "Employee ID",
    "Position",
    "Department",
    "Status",
    "Action",
  ];

  const data = [
    [
      1,
      "Kristi Christiansen",
      "00001",
      "Full Stack Developer",
      "IT",
      <Switch />,
      <div className="flex flex-row gap-3">
        <i
          className="ri-eye-line eye__style cursor-pointer"
          onClick={() => setIsModalOpen2(true)}
        ></i>
      </div>,
    ],
    [
      2,
      "Lynn Brown",
      "00002",
      "Full Stack Developer",
      "Sales",
      <Switch />,
      <div className="flex flex-row gap-3">
        <i
          className="ri-eye-line eye__style cursor-pointer"
          onClick={() => setIsModalOpen2(true)}
        ></i>
      </div>,
    ],
  ];

  const options2 = [
    { value: "All", label: "All Department" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Finance", label: "Finance" },
    { value: "IT", label: "IT" },
  ];

  const filteredData = React.useMemo(() => {
    if (selectedDepartment === "All") {
      return data;
    }
    const departmentIndex = headers.indexOf("Department");
    return data.filter((row) => row[departmentIndex] === selectedDepartment);
  }, [data, selectedDepartment, headers]);

  const handleDepartmentChange = (selectedOption) => {
    setSelectedDepartment(selectedOption.value);
  };

  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Employee Management</h1>
        <p className="font-light text-xl">
          View the employees within your organization
        </p>
        <SearchBar />
        <div className="flex flex-row justify-between">
          <div className="w-8/12 flex gap-5">
            <Select
              className="basic-single w-54 mt-10 mb-10"
              classNamePrefix="select"
              name="department"
              options={options2}
              placeholder="All Department"
              onChange={handleDepartmentChange}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="bg-white table-auto w-full">
            <thead className="bg-gray-100">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-b border-gray-500 bg-white px-4 py-2 text-left text-gray-600"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td
                    colSpan={headers.length + 1}
                    className="text-center px-4 py-6 text-gray-500 text-xl font-semibold"
                  >
                    No Employees Found
                  </td>
                </tr>
              ) : (
                filteredData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-2">{rowIndex + 1}</td>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}

export default Employee;
