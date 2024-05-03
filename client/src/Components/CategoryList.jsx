import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category/allCategories');
        setCategories(response.data.list);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Handle error appropriately, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <div className="popular_catagory_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title mb-40">
              <h3>Popolar Categories</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.length === 0 ? (
            <p>Loading categories...</p>
          ) : (
            categories.map((category) => (
              <div className="col-lg-4 col-xl-3 col-md-6" key={category._id}>
                <div
                  className="single_company"
                  style={{ border: '1px solid black', background: 'white' , padding :"4cm" ,margin :"3cm"}}
                >
                  <div className="thumb">
                    <a href="#">
                      <h3>{category.name}</h3>
                    </a>
                    <p>
                      <span>^_^</span> {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;