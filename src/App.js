/*
import './App.css';
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import Dash from './Admin/Dash';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Form />} />
          <Route path="/Dash" element={<Dash />} />
          <Route
            path="/dashboard"
            element={
              <>
                <div className="content">
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
/*
import Sidebar from './components/sidebar' ;
import Navbar from './components/navbar' ;
import Footer from './components/footer' ;
import Dashboard from './pages/dashboard' ;

function App() {
  return (
    <div className="wrapper">  
    <Sidebar/>
    
      <div className="main">  
        <Navbar/> 
        <main className="content">
				<div className="container-fluid p-0">
          <Dashboard/>
          </div>
          </main>
        <Footer/>
      </div>

       
      </div>
 
  );
}

export default App;
*/



import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
