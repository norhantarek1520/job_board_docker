import React, { useState } from 'react'; // Import useState for handling form state

function ApplicationCart() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validation (optional): Add checks for empty fields, email format, etc.
    // if (!formData.name || !formData.email.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    //   alert('Please enter a valid name and email address.');
    //   return;
    // }

    // Handle form submission (consider using a library like Axios)
    try {
      const response = await fetch('/apply/', {
        method: 'POST',
        body: JSON.stringify(formData), // Assuming backend accepts JSON data
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        // Clear form data after successful submission (optional)
        setFormData({ name: '', email: '' });
      } else {
        alert('There was an error submitting your application. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
<div>
   
    <div style={{  textAlign: 'center' ,padding: "8rem",border: "1px solid black",margin: "8rem",flex: '1',}}>
      <div className="apply_job_form white-bg">
        <h4>Apply for the Job</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="input_field">
                <label htmlFor="name">Your Name</label>  {/* Add labels for accessibility */}
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
                <label htmlFor="email">Email</label>  {/* Add label for accessibility */}
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

</div>
  );
}

export default ApplicationCart;
