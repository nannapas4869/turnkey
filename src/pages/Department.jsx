import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTableDepartment from "../components/DataTable_Department";
import classNames from "classnames";
function Department() {
    const headers = ["No.","Department", "Manager Name","Employee", "Status", "Action"];
    const data1 = [
    ];
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const [isSelected, setIsSelected] = useState(false); // Tracks switch state
  const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal visibility
  const [pendingState, setPendingState] = useState(false); // Tracks pending toggle state
  const [status, setStatus] = useState("Disabled"); // Tracks current status

  // Handle switch click to open the modal
  const handleSwitchClick = (newState) => {
    setPendingState(newState);
    setIsModalOpen(true);
  };

  // Confirm toggle action
  const confirmToggle = () => {
    setIsSelected(pendingState);
    setStatus(pendingState ? "Enabled" : "Disabled"); // Update status
    setIsModalOpen(false);
  };

  // Cancel toggle action
  const cancelToggle = () => {
    setPendingState(false);
    setIsModalOpen(false);
  };
  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between">
           <h1 className="mb-1">Departments</h1>
            <p className="font-light text-xl">
              Manage the departments your organization's KPI
            </p>
        
        </div>
       
        <SearchBar />
        <Select
          className="basic-single w-44 mt-10 mb-10"
          classNamePrefix="select"
          defaultValue={""}
          name="status"
          options={options}
          placeholder="All Status"
        />
        <DataTableDepartment headers={headers} data={data1} />
      </div>
    </article>
  );
}

export default Department;
