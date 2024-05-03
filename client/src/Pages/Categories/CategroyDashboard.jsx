import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const CategroyDashboard = () => {
  const [categories, setCategories] = useState([]); // State to store fetched categories

  // Fetches categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category/allCategories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Function to handle category deletion
  const handleDeleteCategory = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const response = await axios.delete(`http://localhost:5000/api/category/${categoryId}`);
        if (response.status === 200) {
          setCategories(categories.filter((category) => category.id !== categoryId));
          alert('Category deleted successfully!');
        } else {
          alert('Error deleting category. Please try again later.');
        }
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  // Implement similar functions for create, update, and view Category details using Axios
  // Refer to Axios documentation for making POST, PUT, and GET requests with specific URLs and data

  return (<div>

<div class="bradcam_area bradcam_bg_1">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="bradcam_text">
                        <h3>top companies  Available</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    <div className="Category-dashboard">
      {/* ... (rest of your JSX for bradcam_area) */}

      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                {/* ... */}
              </div>
              <div className="col-sm-6 add-Category-button text-right mt-3">
                <a href="/post_Category" className="btn btn-success">
                  <span>Add New Category</span>
                </a>
              </div>
            </div>
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Category Applications</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        id={`checkbox-${category.id}`}
                        name="options[]"
                        value={category.id}
                      />
                      <label htmlFor={`checkbox-${category.id}`}></label>
                    </span>
                  </td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <a href={`/Category_details/${category.id}`}>More</a>
                  </td>
                  <td>
                    <a href={`/update_Category/${category.id}`}>Edit</a>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteCategory(category.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>


  </div>);
};

export default CategroyDashboard;
