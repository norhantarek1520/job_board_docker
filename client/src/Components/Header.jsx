import React from "react";

function Header() {
    return(<>
     <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid ">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2">
                                <div class="logo">
                                    <a href="/">
                                        <img src="assets/img/logo.png" alt=""/>
                                    </a>
                                </div>
                            </div>

                           <div class="col-xl-6 col-lg-7">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            
                                            <li><a href="/CatagoryArea">CatagoryArea</a></li>
                                            <li><a href="/JobsArea">JobsArea</a></li>
                                            <li><a href="/CompaniesArea">CompaniesArea</a></li>              

                                            <li><a href="/Recommendation">Recommendation</a></li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >Admin</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{"font-weight": "bold" , "color": "#795003" , "text-shadow": "2px 2px 2px rgba(26, 25, 25, 0.3)" , "font-family": "sans-serif" }}>
                                                    <a class="dropdown-item"  href="/UserProfile">UserProfile</a>
                                                    <a class="dropdown-item"  href="/JobDashboard">JobDashboard</a>  
                                                    <a class="dropdown-item"  href="/CategroyDashboard">CategroyDashboard</a>    
                                                    
                                                </div>
                                            </li>
                                            
                                        </ul>
                                
                                  
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div class="Appointment">
                                    <div class="phone_num d-none d-xl-block">
                                        <a href="/Login">Log in</a>
                                    </div>
                                    <div class="d-none d-lg-block">
                                        <a class="boxed-btn3" href="/PostJob">Post a Job</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    </>)
    
}
export default Header