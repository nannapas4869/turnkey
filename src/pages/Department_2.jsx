import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTable from "../components/DataTable";
import "remixicon/fonts/remixicon.css";
import Switch from "../components/Switch";
function Department_2() {
const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const handleSelectChange = (selectedOption) => {
    setFormValues((prev) => ({
      ...prev,
      manager: selectedOption,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
      const headers = ["No.", "Department", "Manager Name", "Department ID", "Employee", "status", "Action"];
      const data = [
        [
          1,
          "Sales",
          "Jasmine Hettinger",
          "001",
          15,
          <button className="bg-active">
            <i class="ri-circle-fill bg-circle-active"></i> Active
          </button>,
          <div class="flex flex-row gap-3">
             <i class="ri-eye-line eye__style cursor-pointer" onClick={() => setIsModalOpen2(true)}></i>
            <i class="ri-pencil-line pencil__style cursor-pointer"  onClick={() => setIsModalOpen3(true)}></i>
            <i class="ri-delete-bin-5-line bin__style cursor-pointer" onClick={() => setIsModalOpen4(true)}></i>
          </div>,
        ],
        [
            2,
            "Marketing",
            "Kelvin Altenwerth",
            "002",
            20,
            <button className="bg-active">
              <i class="ri-circle-fill bg-circle-inactive"></i> Inactive
            </button>,
            <div class="flex flex-row gap-3">
                 <i class="ri-eye-line eye__style cursor-pointer" onClick={() => setIsModalOpen2(true)}></i>
              <i class="ri-pencil-line pencil__style cursor-pointer"  onClick={() => setIsModalOpen3(true)}></i>
              <i class="ri-delete-bin-5-line bin__style cursor-pointer" onClick={() => setIsModalOpen4(true)}></i>
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
      const [activeTab2, setActiveTab2] = useState("detail");
      const [formValues, setFormValues] = useState({
        departmentName: "",
        weight: "",
      });
      const [formValues2, setFormValues2] = useState({
        departmentName2: "Project Management",
        weight2: 70,
      });
      const isFormValid =
      formValues2.departmentName2 !== "" &&
      formValues2.weight2 !== ""  
      const isFormValid2 =
      formValues2.departmentName2 !== "" &&
      formValues.weight2 !== "" 
  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
      <h1 className="mb-1">Department Management</h1>
        <p className="font-light text-xl">
          Manage the departments your organization's KPI.
        </p>
        <SearchBar />
        <div className="flex flex-row justify-between">
          <div className="w-8/12 flex gap-5">
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
                    Departments Name
            </label>
            <input
              type="text"
              name="departmentName"
              value="Markdting"
              className="border-solid border border__color__input p-3 w-full rounded"
              placeholder="Enter Category Name"
              disabled
            />
            <label className="block text-xl mt-5 mb-5">
                Departments ID
            </label>
            <input
              type="text"
              name="departmentName"
              value="002"
              className="border-solid border border__color__input p-3 w-full rounded"
              placeholder="Enter Category Name"
              disabled
            />
            <label className="block text-xl mt-5 mb-5">
                Manager
            </label>
            <input
              type="text"
              name="departmentName"
              value="Kelvin Altenwerth"
              className="border-solid border border__color__input p-3 w-full rounded"
              placeholder="Enter Category Name"
              disabled
            />
            <div className="mt-5"></div>
            <Switch />
  
            <hr className="mt-5 mb-5"/>
           
            
            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen2(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
       {isModalOpen3 && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen3(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">Edit Departments</h2>
            <label className="block text-xl mt-5 mb-5">
                    Departments Name
            </label>
            <input
              type="text"
              name="departmentName"
              value="Markdting"
              className="border-solid border border__color__input p-3 w-full rounded"
              placeholder="Enter Category Name"

            />
            <label className="block text-xl mt-5 mb-5">
                Departments ID
            </label>
            <input
              type="text"
              name="departmentName"
              value="002"
              className="border-solid border border__color__input p-3 w-full rounded"
              placeholder="Enter Category Name"

            />
            <label className="block text-xl mt-5 mb-5">
                Manager
            </label>
            <input
              type="text"
              name="departmentName"
              value="Kelvin Altenwerth"
              className="border-solid border border__color__input p-3 w-full rounded"
              placeholder="Enter Category Name"
           
            />
            <div className="mt-5"></div>
            <Switch />
  
            <hr className="mt-5 mb-5"/>
            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen3(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  isFormValid2
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid2}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
       {isModalOpen4 && (
         <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen4(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">Delete Category!!</h2>
            <hr className="mb-10"/>
            <p className="text-xl font-semibold mb-5">Notification</p>
            <p className="mb-10">Are you sure you want to delete this category? This action cannot be done.</p>
            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-white text-black rounded"
                onClick={() => setIsModalOpen4(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4" 
              >
                Delete
              </button>
            </div>
          </div>
        </div>
       )}
      </div>
    </article>
  )
}

export default Department_2