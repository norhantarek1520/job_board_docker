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
        window.alert('Server problem in Category server. Please try again later.');
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
  
      {categories.length === 0 ? (
        <p>Loading categories...</p>
      ) : (
        <> {/* Wrap in a fragment to avoid unnecessary divs */}
          {categories.map((category, index) => (
            <div
              className={`col-lg-4 col-xl-3 col-md-6 ${
                index % 3 === 2 ? 'mt-4' : ''
              }`}
              key={category._id}
            >
              <div
                className="single_company"
                style={{
                  border: '1px solid black',
                  background: 'white',
                  padding: '1cm',
                  margin: '1cm',
                  display: 'flex', // Added flexbox for layout
                  flexDirection: 'column', // Arrange content vertically
                  alignItems: 'center', // Center content horizontally (optional)
                  justifyContent: 'center', // Center content vertically (optional)
                  width: '400px', // Set fixed width
                  height: '200px', // Set fixed height (adjust as needed)
                }}
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
          ))}
        </>
      )}
    </div>
  </div>
  
  );
}

export default CategoryList;
