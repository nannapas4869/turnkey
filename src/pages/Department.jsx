import React from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTable from "../components/DataTable";
function Department() {
    const headers = ["No.","Department", "Manager Name", "Department ID","Employee", "Status", "Action"];
    const data1 = [[
         <input
        type="checkbox"
      />,
      "1"
    ]
       
    ];
  const options = [
    { value: "Open", label: "Open" },
    { value: "Close", label: "Close" },
  ];
  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Departments</h1>
        <p className="font-light text-xl">
          Manage the departments your organization's KPI
        </p>
        <SearchBar />
        <Select
          className="basic-single w-44 mt-10 mb-10"
          classNamePrefix="select"
          defaultValue={""}
          name="status"
          options={options}
          placeholder="All Status"
        />
        <DataTable headers={headers} data={data1} />
      </div>
    </article>
  );
}

export default Department;
