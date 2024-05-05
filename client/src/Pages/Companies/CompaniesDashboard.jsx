import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const CategroyDashboard = () => {
  const [Companies, setCompanies] = useState([]); // State to store fetched Companies

  // Fetches Companies on component mount
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/companies/all');
        setCompanies(response.data.list);
      } catch (error) {
        console.error('Error fetching Companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  // Function to handle Company CRUD Operation
  const handleDeleteCompany = async (CompanyId) => {
    if (window.confirm('Are you sure you want to delete this Company?')) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/companies/${CompanyId}`);
        if (response.status === 204) {
          setCompanies(Companies.filter((Company) => Company._id !== CompanyId));
          alert('Company deleted successfully!');
        } else {
          alert('Error deleting Company. Please try again later.');
        }
      } catch (error) {
        console.error('Error deleting Company:', error);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };
  const handleUpdateCompany = async (CompanyId) => {
    const CompanyToUpdate = Companies.find(Company => Company._id === CompanyId);
    if (!CompanyToUpdate) {
      alert('Company not found!');
      return;
    }
    const newName = prompt('Enter new Company name:', CompanyToUpdate.name);
    const newDescription = prompt('Enter new Company description:', CompanyToUpdate.description);
    const updateData = {
      name: newName,
      description: newDescription,
    };
    try {
      const response = await axios.put(`http://localhost:8080/api/companies/${CompanyId}`, updateData);
      if (response.status === 201) {
        const updatedCompanies = Companies.map(Company => {
          if (Company._id === CompanyId) {
            return { ...Company, ...updateData }; // Merge updated data
          }
          return Company;
        });
        setCompanies(updatedCompanies);
        alert('Company updated successfully!');
      } else {
        alert('Error updating Company. Please try again later.');
      }
    } catch (error) {
      console.error('Error updating Company:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  const handleAddNewCompany = async () => {
   
    const name = prompt('Enter new Company name:');
    const description = prompt('Enter new Company description:');
    const location = prompt('Enter new location')
    const owner = prompt('Enter new owner')
    const newCompany = {
      name,
      description,
      location,
      owner

    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/companies', newCompany);
      if (response.status === 201) { // Check for created status code
        // 4.1 Update local state with new Company
        setCompanies([...Companies, response.data]); // Add new Company to state
        alert('Company added successfully!');
      } else {
        alert('Error adding Company. Please try again later.');
      }
    } catch (error) {
      console.error('Error adding Company:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  
  return (<div>

<div className="bradcam_area bradcam_bg_1">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>top Companies  Available</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  <div className="Company-dashboard">
  

    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
            
            </div>
            <div className="col-sm-6 add-Company-button text-right mt-3">
              <button className="btn btn-success" onClick={() => handleAddNewCompany()}>
              Add New Cateogry  
                </button>             
              
            </div>
          </div>
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>owner</th>
              <th>location</th>
              <th>Edit</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
          {Companies.length === 0 ? (
          <p>Loading Companies...</p>
        ) : (

          Companies.map((Company) => (
            <tr key={Company._id}>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id={`checkbox-${Company._id}`}
                    name="options[]"
                    value={Company._id}
                  />
                  <label htmlFor={`checkbox-${Company._id}`}></label>
                </span>
              </td>
              <td>{Company.name}</td>
              <td>{Company.owner}</td>
              <td>{Company.location}</td>
              
              <td>
              <button onClick={() => handleUpdateCompany(Company._id)}>
                Edit                 
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteCompany(Company._id)}>
                Delete                
                </button>
              </td>
            </tr>
          ))


        )}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>


  </div>);
};

export default CategroyDashboard;
