import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CompanyCart() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:4000/api/companies/all');
        setCompanies(response.data);
      } catch (error) {
        setError(error);
        window.alert('Server problem in Company. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading companies...</p>}
      {error && <p>Error fetching companies: {error.message}</p>}
      {companies.length > 0 && (
        <div className="row">
         {companies.map((company) => (
  <div key={company.id} className="col-lg-4 col-xl-3 col-md-6">
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
      {companies.length === 0 && !isLoading && <p>No companies found.</p>}
    </div>
  );
}

export default CompanyCart;
