import React from "react";

function Login(){
return(
<div>

{/* <!-- bradcam_area  --> */}
     <div class="bradcam_area bradcam_bg_1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text">
                                <h3>Login </h3>
                            </div>
                        </div>
                    </div>
                </div>
     </div>
     {/* <!--/ bradcam_area  -- --> */}
    <div>
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style={{"border-radius": "15px;"}}>
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Login With an account</h2>

                                <form action="/login" method="post">

                                    <div class="form-outline mb-4">
                                        <input type="email" id="form3Example3cg"
                                            class="form-control form-control-lg" name="email" />
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form3Example4cg"
                                            class="form-control form-control-lg" name="password" />
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <button type="submit"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                    </div>

                                    <p class="text-center text-muted mt-5 mb-0">Create new account? <a
                                            href="/Signup" class="fw-bold text-body"><u>sign up
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