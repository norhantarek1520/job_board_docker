import React, { useState, useEffect } from 'react';
import axios from 'axios'; // for making API calls

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume user is not logged in initially

  useEffect(() => {
    // Check for stored login info (e.g., token in localStorage) here and update isLoggedIn state
    const storedToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (storedToken !== null || refreshToken !== null) {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array to run only on initial render

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users/auth/logout/', {
        refresh: localStorage.getItem('refreshToken'), // Include refresh token in request body
      });

      if (response.status === 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        // Additionally, remove any other user-specific data you might have stored in localStorage
        localStorage.clear(); // Clears all items from localStorage (optional)
        setIsLoggedIn(false);
      } else {
        console.error('Logout failed:', response.data);
        // Handle logout failure (e.g., display error message)
      }
    } catch (error) {
      console.error('Logout error:', error);
      window.alert('Server problem in Users service. Please try again later.');
      
    }
  };

  return (
    <>
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid ">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  {/* Your navigation links here */}
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a href="/">
                        <img src="assets/img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><a href="/CatagoryArea">CatagoryArea</a></li>
                          <li><a href="/JobsArea">JobsArea</a></li>
                          <li><a href="/CompaniesArea">CompaniesArea</a></li>
                          <li><a href="/Recommendation">Recommendation</a></li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Admin</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ fontWeight: "bold", color: "#795003", textShadow: "2px 2px 2px rgba(26, 25, 25, 0.3)", fontFamily: "sans-serif" }}>
                              <a className="dropdown-item" href="/JobDashboard">JobDashboard</a>
                              <a className="dropdown-item" href="/CategroyDashboard">CategroyDashboard</a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                      {isLoggedIn ? (
                        <button className="boxed-btn3" onClick={handleLogout}>
                          Logout
                        </button>
                      ) : (
                        <a href="/Login" className="boxed-btn3">
                          Log in
                        </a>
                      )}
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
    </>
  );
}

export default Header;
