import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTable from "../components/DataTable";
import "remixicon/fonts/remixicon.css";
import Switch from "../components/Switch";
import Modal from "react-modal";
import Kristi from "../assets/images/Kristi.png"
import Call from "../assets/images/Call.png"
import Mail from "../assets/images/Mail.png"
import Address from "../assets/images/address.png"
function Employee_2() {
const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
 
      const headers = ["No.", "Employee Name", "Employee ID", "Position", "Department","Status", "Action"];
      const data = [
        [
          1,
          "Kristi Christiansen",
          "00001",
          "Full Stack Developer",
          "IT",
          <Switch />,
          <div class="flex flex-row gap-3">
             <i class="ri-eye-line eye__style cursor-pointer" onClick={() => setIsModalOpen2(true)}></i>
         </div>,
        ],
        [
            2,
            "Lynn Brown",
            "00002",
            "Full Stack Developer",
            "Sales",
            <Switch />,
            <div class="flex flex-row gap-3">
               <i class="ri-eye-line eye__style cursor-pointer" onClick={() => setIsModalOpen2(true)}></i>
           </div>,
          ],
      ];
      const options = [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
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
              <i className="ri-add-fill"></i> Import batch data
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
        {isModalOpen2 && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen2(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">View Employee</h2>
            <hr className="mt-5 mb-5"/>
            <div className="flex flex-row justify-start gap-3">
                <div>
                    <img src={Kristi} alt="Kristi" width="100%" />
                </div>
                
                <div className="flex flex-col ">
                    <p className="text-xl">Kristi Christiansen</p>
                    <p className="text-[#6C6C6C] font-light">Full Stack Developer (IT)</p>
                </div>
            </div>
            <div className="flex flex-row justify-start gap-3 mt-7">
                <div>
                    <img src={Call} alt="call" />
                </div>
                <p className="text-[#6C6C6C] font-light text-xl padding_0">(+66) 67 4759 548</p>
            </div>
            <div className="flex flex-row justify-start gap-3 mt-7">
                <div>
                    <img src={Mail} alt="mail" className="mt-1" />
                </div>
                <p className="text-[#6C6C6C] font-light text-xl padding_0">Kristi_Christiansen@gmail.com</p>
            </div>
            <div className="flex flex-row justify-start gap-3 mt-7">
                <div>
                    <img src={Address} alt="address" className="mt-1" />
                </div>
                <p className="text-[#6C6C6C] font-light text-xl padding_0">73958 Larch Close, New Norbert 35047</p>
            </div>
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
    
     
      </div>
    </article>
  )
}

export default Employee_2