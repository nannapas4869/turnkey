import React from "react";
import SearchBarSubCat from "../components/SearchBarSubCat";
import Select from "react-select";
import DataTable_Subcat from "../components/DataTable_Subcat";
const SubCategory = () => {
    const headers = ["No.","Objective Name", "Status", "Action"];
    const data1 = [
    ];
  const options = [
    { value: "Open", label: "Open" },
    { value: "Close", label: "Close" },
  ];
    return (
        <>
       <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Sub Category List (KPIs & Objective)</h1>
        <p className="font-light text-xl">
          Manage the timeline in sub-categories for your organization's KPI.
        </p>
        <SearchBarSubCat />
        <Select
          className="basic-single w-44 mt-10 mb-10"
          classNamePrefix="select"
          defaultValue={""}
          name="status"
          options={options}
          placeholder="All Status"
        />
        <DataTable_Subcat headers={headers} data={data1} />
      </div>
    </article>
      </>
    )
};

export default SubCategory;