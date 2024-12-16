import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTable from "../components/DataTable";
import "remixicon/fonts/remixicon.css";
import Switch from "../components/Switch";
function Category() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const handleSelectChange = (selectedOption) => {
    setFormValues((prev) => ({
      ...prev,
      manager: selectedOption,
    }));
  };

  const headers = ["No.", "Category Name", "Objective", "Status", "Action"];
  const data = [
    [
      1,
      "Project Timeline",
      4,
      <button className="bg-active">
        <i class="ri-circle-fill bg-circle-active"></i> Active
      </button>,
      <div class="flex flex-row gap-3">
        <i class="ri-eye-line eye__style cursor-pointer" onClick={() => setIsModalOpen2(true)}></i>
        <i class="ri-pencil-line pencil__style"></i>
        <i class="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      2,
      "Budget Variance",
      5,
      <button className="bg-active">
        <i class="ri-circle-fill bg-circle-active"></i> Active
      </button>,
      <div class="flex flex-row gap-3">
        <i class="ri-eye-line eye__style"></i>
        <i class="ri-pencil-line pencil__style"></i>
        <i class="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      3,
      "Scope Creep",
      2,
      <button className="bg-active">
        <i class="ri-circle-fill bg-circle-active"></i> Active
      </button>,
      <div class="flex flex-row gap-3">
        <i class="ri-eye-line eye__style"></i>
        <i class="ri-pencil-line pencil__style"></i>
        <i class="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      4,
      "Task Completion Rate",
      1,
      <button className="bg-active">
        <i class="ri-circle-fill bg-circle-inactive"></i> Inactive
      </button>,
      <div class="flex flex-row gap-3">
        <i class="ri-eye-line eye__style"></i>
        <i class="ri-pencil-line pencil__style"></i>
        <i class="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      4,
      "Task Completion Rate",
      1,
      <button className="bg-active">
        <i class="ri-circle-fill bg-circle-inactive"></i> Inactive
      </button>,
      <div class="flex flex-row gap-3">
        <i class="ri-eye-line eye__style"></i>
        <i class="ri-pencil-line pencil__style"></i>
        <i class="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      4,
      "Task Completion Rate",
      1,
      <button className="bg-active">
        <i class="ri-circle-fill bg-circle-inactive"></i> Inactive
      </button>,
      <div class="flex flex-row gap-3">
        <i class="ri-eye-line eye__style"></i>
        <i class="ri-pencil-line pencil__style"></i>
        <i class="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
  ];
  const options = [
    { value: "Open", label: "Open" },
    { value: "Close", label: "Close" },
  ];

  const itemsPerPageOptions = [5, 10, 20, 50, 100];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]); // Default to 5 items per page

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const [activeTab, setActiveTab] = useState("detail");
  const [formValues, setFormValues] = useState({
    departmentName: "",
    weight: "",
  });
  const [selectedRadio, setSelectedRadio] = useState(true); // Track selected radio button

  // Check if the form is valid
  const isFormValid =
    formValues.departmentName.trim() !== "" &&
    formValues.weight.trim() !== "" &&
    selectedRadio !== false;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };
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

        <DataTable headers={headers} data={currentPageData} />
        <div className="flex flex-row justify-start items-center">
          <p class="w-40">Total {totalPages} Pages</p>
          <Select
            className="basic-single w-24 mt-10 mb-10"
            classNamePrefix="select"
            defaultValue={""}
            name="page"
            options={itemsPerPageOptions.map((value) => ({
              value,
              label: value,
            }))}
            placeholder={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.value))}
          />
          <div className="w-full">
            <div className="flex flex-row gap-3 justify-center">
              <i
                class="ri-skip-left-line arrow__size"
                onClick={() => handlePageChange(1)}
              ></i>
              <i
                class="ri-arrow-left-s-line arrow__size"
                onClick={() => handlePageChange(currentPage - 1)}
              ></i>
              {Array.from({ length: totalPages }, (_, i) => (
                <p
                  key={i}
                  className={`number__size ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </p>
              ))}
              <i
                class="ri-arrow-right-s-line arrow__size"
                onClick={() => handlePageChange(currentPage + 1)}
              ></i>
              <i
                class="ri-skip-right-line arrow__size"
                onClick={() => handlePageChange(totalPages)}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">Create Category</h2>
            <div className="flex flex-row gap-10 mt-10">
              <p
                className={`cursor-pointer text-xl ${
                  activeTab === "detail"
                    ? "underline font-bold text__purple"
                    : ""
                }`}
                onClick={() => setActiveTab("detail")}
              >
                Detail
              </p>
              <p
                className={`cursor-pointer text-xl ${
                  activeTab === "format"
                    ? "underline font-bold text__purple"
                    : ""
                }`}
                onClick={() => setActiveTab("format")}
              >
                Format
              </p>
            </div>
            {activeTab === "detail" && (
              <article id="detail">
                <div className="mt-14">
                  <label className="block text-xl mt-5 mb-5">
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="departmentName"
                    value={formValues.departmentName}
                    onChange={handleInputChange}
                    className="border-solid border border__color__input p-3 w-full rounded"
                    placeholder="Enter Category Name"
                  />
                </div>
                <div className="text-xl mt-5 mb-5">Status</div>
                <Switch />
              </article>
            )}
            {activeTab === "format" && (
              <article id="format">
                <div className="mt-6">
                  <p className="text-xl font-normal">
                    Please select your prefereed calculation method.
                  </p>
                  <div class="flex items-center mb-4 mt-10">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 "
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="default-radio-1"
                      class="ms-2 text-lg font-normal text-gray-900 dark:text-gray-300"
                    >
                      Standard: All KPIs have equal weight in the evaluation.
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      onChange={handleRadioChange}
                      class="w-4 h-4 text-blue-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      class="ms-2 text-lg font-normal text-gray-900 dark:text-gray-300"
                    >
                      Custom: Customize KPI Weights to Suit Your Needs.
                    </label>
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="text-xl font-light w-24">Weights:</label>
                    <input
                      type="text"
                      name="weight"
                      value={formValues.weight}
                      onChange={handleInputChange}
                      className="border-solid border border__color__input p-3 w-full rounded"
                      placeholder=""
                    />
                  </div>
                  <p class="text-red-500 text-base font-light">*Ensure the Total Weight Doesn't Exceed 100%</p>
                </div>
              </article>
            )}

            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  isFormValid
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Create Category
              </button>
            </div>
          </div>
        </div>
      )}
       {isModalOpen2 && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen2(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">View Category</h2>
            <label className="block text-xl mt-5 mb-5">
                    Category Name
            </label>
            <input
              type="text"
              name="departmentName"
              value="Category1"
              className="border-solid border border__color__input p-3 w-full rounded"
              placeholder="Enter Category Name"
              disabled
            />
            <hr />

            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen2(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  isFormValid
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Create Category
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default Category;