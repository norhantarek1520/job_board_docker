import React from "react";

function Login(){
return(
<div>

{/* <!-- bradcam_area  --> */}
     <div className="bradcam_area bradcam_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text">
                                <h3>Login </h3>
                            </div>
                        </div>
                    </div>
                </div>
     </div>
     {/* <!--/ bradcam_area  -- --> */}
    <div>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{"border-radius": "15px;"}}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Login With an account</h2>

                                <form action="/login" method="post">

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3cg"
                                            className="form-control form-control-lg" name="email" />
                                        <label className="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4cg"
                                            className="form-control form-control-lg" name="password" />
                                        <label className="form-label" for="form3Example4cg">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="submit"
                                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                    </div>

                                    <p className="text-center text-muted mt-5 mb-0">Create new account? <a
                                            href="/Signup" className="fw-bold text-body"><u>sign up
                                                here</u></a></p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  
</div>)
}

export default Login 