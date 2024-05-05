import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobCart() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/job/allJobs'); // Replace with your actual API endpoint
        setJobs(response.data.data); // Assuming data is stored in response.data.data
      } catch (error) {
        console.error('Error fetching jobs:', error);
        window.alert('Server problem in jobs service. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="job_listing_area plus_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="job_lists m-0">
              {jobs.length === 0 ? (
                <p>Loading jobs...</p>
              ) : (
                <div className="row">
                  {jobs.map((job) => (
                    <div className="col-lg-12 col-md-12" key={job._id}>
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            <img src="assets/img/svg_icon/1.svg" alt="" />
                          </div>
                          <div className="jobs_conetent">
                            <a href="#">
                              <h4>{job.title}</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  <i className="fa fa-map-marker"></i> {job.location}
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  <i className="fa fa-clock-o"></i> {job.job_type}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <a className="heart_mark" href="#">
                              <i className="fa fa-heart"></i>
                            </a>
                            <a href="/ApplicationArea" className="boxed-btn3">
                              Apply Now
                            </a>
                          </div>
                          <div className="date">
                            <p>Date line: {job.deadline.substring(0, 10)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCart;
