import React from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTable from "../components/DataTable";
import 'remixicon/fonts/remixicon.css'
function Category() {
  const headers = [
    "No.",
    "Category Name",
    "Objective",
    "Status",
    "Action",
  ];
const data = [
    [
    1,
    "Project Timeline",
    4,
    <button className="bg-active">
       <i class="ri-circle-fill bg-circle-active"></i> Active
    </button>
    ]
  ];
  const options = [
    { value: "Open", label: "Open" },
    { value: "Close", label: "Close" },
  ];
  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Category list (Area)</h1>
        <p className="font-light text-xl">
          Manage the categories for your organization's departments KPI.
        </p>
        <SearchBar />
        <div className="flex flex-row justify-between">
            <div className="w-8/12 flex gap-5">
            <Select
            className="basic-single w-5/12 mt-10 mb-10"
            classNamePrefix="select"
            defaultValue={""}
            name="status"
            options={options}
            placeholder="Project Management"
          />
          <Select
            className="basic-single w-44 mt-10 mb-10"
            classNamePrefix="select"
            defaultValue={""}
            name="status"
            options={options}
            placeholder="All Status"
          />
            </div>
            
          
          <div className="flex justify-end items-start ">
                <button
                  className="mt-10 button__style__table text-xl"
                  onClick={() => setIsModalOpen(true)}
                >
                  <i className="ri-add-fill"></i> Create Category
                </button>
          </div>
        </div>

        <DataTable headers={headers} data={data} />
      </div>
    </article>
  );
}

export default Category;
