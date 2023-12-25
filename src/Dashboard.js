import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const MainContent = () => {
  return <main>Main Content</main>;
};

const Dash = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Sidebar />
          <Route path="/dashboard" component={Dashboard} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Dashboard;
