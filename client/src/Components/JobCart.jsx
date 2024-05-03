import React from "react";

function JobCart (){
return(
<div>
<div className="job_listing_area plus_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">   
                    <div className="job_lists m-0">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="single_jobs white-bg d-flex justify-content-between">
                                    <div className="jobs_left d-flex align-items-center">
                                        <div className="thumb">
                                            <img src="assets/img/svg_icon/1.svg" alt=""/>
                                        </div>
                                        <div className="jobs_conetent">
                                            <a href="#"><h4>Software Engineer</h4></a>
                                            <div className="links_locat d-flex align-items-center">
                                                <div className="location">
                                                    <p> <i className="fa fa-map-marker"></i> California, USA</p>
                                                </div>
                                                <div className="location">
                                                    <p> <i className="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="jobs_right">
                                        <div className="apply_now">
                                            <a className="heart_mark" href="#"> <i className="fa fa-heart"></i> </a>
                                            <a href="#" className="boxed-btn3">Apply Now</a>
                                        </div>
                                        <div className="date">
                                            <p>Date line: 31 Jan 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
</div>)
}

export default JobCart 