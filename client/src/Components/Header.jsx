import React from "react";

function Header() {
    return(<>
     <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid ">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <a href="/">
                                        <img src="assets/img/logo.png" alt=""/>
                                    </a>
                                </div>
                            </div>

                           <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            
                                            <li><a href="/CatagoryArea">CatagoryArea</a></li>
                                            <li><a href="/JobsArea">JobsArea</a></li>
                                            <li><a href="/CompaniesArea">CompaniesArea</a></li>              

                                            <li><a href="/Recommendation">Recommendation</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >Admin</a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{"font-weight": "bold" , "color": "#795003" , "text-shadow": "2px 2px 2px rgba(26, 25, 25, 0.3)" , "font-family": "sans-serif" }}>
                                                    <a className="dropdown-item"  href="/UserProfile">UserProfile</a>
                                                    <a className="dropdown-item"  href="/JobDashboard">JobDashboard</a>  
                                                    <a className="dropdown-item"  href="/CategroyDashboard">CategroyDashboard</a>    
                                                    
                                                </div>
                                            </li>
                                            
                                        </ul>
                                
                                  
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="phone_num d-none d-xl-block">
                                        <a href="/Login">Log in</a>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <a className="boxed-btn3" href="/PostJob">Post a Job</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
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