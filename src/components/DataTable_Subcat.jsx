import React, { useState } from "react";

const TableComponent = () => {
  const [data, setData] = useState([]); // Table data
  const [selectedRows, setSelectedRows] = useState([]); // Selected rows
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [activeTab, setActiveTab] = useState("detail"); // Active tab in modal
  const [rows, setRows] = useState([{ id: 1, value: "" }]); // Matrix rows
  const [formValues, setFormValues] = useState({
    objectiveName: "",
    desiredResults: "",
    targets: "",
  }); // Form values
  const [isFormValid, setIsFormValid] = useState(false); // Form validation

  // Handle checkbox selection
  const handleSelectAll = (isChecked) => {
    setSelectedRows(isChecked ? data.map((_, index) => index) : []);
  };

  const handleRowSelection = (index, isChecked) => {
    setSelectedRows((prev) =>
      isChecked ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Add new matrix row
  const addNewRow = () => {
    const newId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;
    setRows([...rows, { id: newId, value: "" }]);
  };

  const handleMatrixInputChange = (e, id) => {
    const { value } = e.target;
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, value } : row))
    );
  };

  // Validate form
  React.useEffect(() => {
    const isValid =
      formValues.objectiveName.trim() &&
      formValues.desiredResults.trim() &&
      formValues.targets.trim();
    setIsFormValid(isValid);
  }, [formValues]);

  return (
    <div className="overflow-x-auto">
      <table className="bg-white table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b border-gray-500 bg-white w-12 px-4 py-2">
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
            <th className="border-b border-gray-500 bg-white px-4 py-2 text-left text-gray-600">
              Header
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={2}
                className="text-center px-4 py-6 text-gray-500 text-xl font-semibold"
              >
                <p className="mt-10">No Objective Available</p>
                <button
                  className="mt-10 button__style__table"
                  onClick={() => setIsModalOpen(true)}
                >
                  <i className="ri-add-fill"></i> Create Objective
                </button>
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={(e) =>
                      handleRowSelection(rowIndex, e.target.checked)
                    }
                  />
                </td>
                <td className="px-4 py-2 text-gray-700">{row}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 max-h-[500px] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">Create Objective</h2>
            <div className="flex gap-10">
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
                  activeTab === "matrix"
                    ? "underline font-bold text__purple"
                    : ""
                }`}
                onClick={() => setActiveTab("matrix")}
              >
                Matrix
              </p>
            </div>
            {activeTab === "detail" && (
              <div>
                <label className="block text-xl mt-5">Objective Name</label>
                <input
                  type="text"
                  name="objectiveName"
                  value={formValues.objectiveName}
                  onChange={handleInputChange}
                  className="border p-3 w-full rounded"
                  placeholder="Enter Objective Name"
                />
                <label className="block text-xl mt-5">Desired Results</label>
                <input
                  type="text"
                  name="desiredResults"
                  value={formValues.desiredResults}
                  onChange={handleInputChange}
                  className="border p-3 w-full rounded"
                  placeholder="Enter Desired Results"
                />
                <label className="block text-xl mt-5">Targets</label>
                <input
                  type="text"
                  name="targets"
                  value={formValues.targets}
                  onChange={handleInputChange}
                  className="border p-3 w-full rounded"
                  placeholder="Enter Targets"
                />
              </div>
            )}
            {activeTab === "matrix" && (
              <div className="mt-6">
                <button
                  className="text-lg font-normal text__purple"
                  onClick={addNewRow}
                >
                  <i className="ri-add-fill mr-2"></i> Add New Matrics
                </button>
                <table className="bg-white table-auto w-full mt-5">
                  <thead className="bg-gray-100">
                    <tr>
                      <th>No.</th>
                      <th>Evaluation Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>
                          <input
                            type="text"
                            value={row.value}
                            onChange={(e) => handleMatrixInputChange(e, row.id)}
                            className="w-full border-0 focus:outline-none focus:ring-0"
                            placeholder="Enter your criteria"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
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
                Create Objective
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
