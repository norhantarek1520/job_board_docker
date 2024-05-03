import React, { useState, useEffect } from 'react';
// Import additional components for navigation or popups if needed

const JobDashboard = () => {
  const [jobs, setJobs] = useState([]); // State to store fetched jobs

  // Fetch jobs on component mount (replace with your API call)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs'); // Replace with your API endpoint
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const handleDeleteJob = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        const response = await fetch(`/api/jobs/${jobId}`, { method: 'DELETE' }); // Replace with your API endpoint
        if (response.ok) {
          const updatedJobs = jobs.filter((job) => job.id !== jobId);
          setJobs(updatedJobs);
          alert('Job deleted successfully!');
        } else {
          alert('Error deleting job. Please try again later.');
        }
      } catch (error) {
        console.error('Error deleting job:', error);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  // Implement similar functions for create, update, and view job details
  // Consider using a state management library like Redux for larger applications

  return (
<div className="job-dashboard">
    {/* <!-- bradcam_area  --> */}
    <div className="bradcam_area bradcam_bg_1">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>jobs Dashboard</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!--/ bradcam_area  --> */}


    <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
              
              </div>
              <div className="col-sm-6 add-job-button text-right mt-3">
                <a href="/post_job" className="btn btn-success">
                  <span>Add New Job</span>
                </a>
              </div>
            </div>
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Job Type</th>
                <th>More Details</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Job Applications</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>
                    <span className="custom-checkbox">
                      <input type="checkbox" id={`checkbox-${job.id}`} name="options[]" value={job.id} />
                      <label htmlFor={`checkbox-${job.id}`}></label>
                    </span>
                  </td>
                  <td>{job.title}</td>
                  <td>{job.job_type}</td>
                  <td>
                    <a href={`/job_details/${job.id}`}>More</a>
                  </td>
                  <td>
                    {/* Replace with a link or modal for editing */}
                    <a href={`/update_job/${job.id}`}>Edit</a>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
                  </td>
                  <td>
                    <a href={`/job_applications/${job.id}`}>Applications</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
</div> );

       
}

export default JobDashboard 