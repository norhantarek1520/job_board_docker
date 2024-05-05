import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CompanyCart() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/companies/all');
        setCompanies(response.data.list);
      } catch (error) {
        console.error('Error fetching companies:', error);
        window.alert('Server problem in companies server. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      {companies.length > 0 && (
        <div className="row">
         {companies.map((company) => (
  <div key={company._id} className="col-lg-4 col-xl-3 col-md-6">
    <div className="single_company">
      <div className="thumb">
        <img src="img/svg_icon/5.svg" alt="" />
      </div>
      <a href="#">
        <h3>{company.name}</h3>
      </a>
      <p>
        <span>{company.location || "N/A"}</span> {company.owner}
      </p>
      <p>{company.description || "No description available."}</p>
    </div>
  </div>
))}

        </div>
      )}
      {companies.length === 0 && <p>No companies found.</p>}
    </div>
  );
}

export default CompanyCart;
