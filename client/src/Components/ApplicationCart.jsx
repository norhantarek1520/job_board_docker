import React, { useState } from 'react';
import axios from 'axios';


function ApplicationCart() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    jobId: '', 
    userId :''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5003/api/application', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status = 201) {
        alert('Application submitted successfully!');
        setFormData({ name: '', email: '', portfolio: '', jobId: '',  userId :'' }); // Clear form data after success (optional)
      } else {
        alert('There was an error submitting your application. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      window.alert('Server problem in Application server . Please try again later.');
    }
  };

  return (
    <div>
      <div className="apply_job_form white-bg" style={{ border: '1px solid black' , padding:"2rem"}}>
        <h4>Apply for the job</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="input_field">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input_field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="input_field">
                <label htmlFor="portfolio">Portfolio Link</label>
                <input
                  type="text"
                  placeholder="Website/Portfolio link"
                  name="portfolio"
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="input_field">
                <label htmlFor="jobId">jobId</label>
                <input
                  type="text"
                  placeholder="jobId"
                  name="jobId"
                  id="jobId"
                  value={formData.jobId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="input_field">
                <label htmlFor="userId">userId</label>
                <input
                  type="text"
                  placeholder="userId"
                  name="userId"
                  id="userId"
                  value={formData.userId}
                  onChange={handleChange}
                />
              </div>
            </div>
         
            <div className="col-md-12">
              <div className="submit_btn">
                <button className="boxed-btn3 w-100" type="submit">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationCart;
