import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

import ApplicationArea from "./Pages/Applications/ApplicationArea";
import CatagoryArea from "./Pages/Categories/CatagoryArea";
import CategroyDashboard from "./Pages/Categories/CategroyDashboard";
import CompaniesArea from "./Pages/Companies/CompaniesArea";
import JobDeatailsArea from "./Pages/Jobs/JobDeatailsArea";
import JobsArea from "./Pages/Jobs/JobsArea";
import JobDashboard from "./Pages/Jobs/JobDashboard";
import PostJob from "./Pages/Jobs/PostJob";
import Recommendation from "./Pages/Recomendation/Recommendation";
import Login from './Pages/Users/Login';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/CatagoryArea" element={<CatagoryArea />} />
          <Route path="/ApplicationArea" element={<ApplicationArea />} />
          <Route path="/JobDeatailsArea" element={<JobDeatailsArea />} />
          <Route path="/JobsArea" element={<JobsArea />} />

        
          <Route path="/Login" element={<Login />} />
          <Route path="/Recommendation" element={<Recommendation />} />

          <Route path="/PostJob" element={<PostJob />} />
          <Route path="/JobDashboard" element={<JobDashboard />} />
          <Route path="/CategroyDashboard" element={<CategroyDashboard />} />
          <Route path="/CompaniesArea" element={<CompaniesArea />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
