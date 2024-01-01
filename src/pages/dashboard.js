import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import ListUsers  from '../Admin/ListUsers';
import ListRecords  from '../Admin/ListRecords';
import ListAppointements  from '../Admin/ListAppointements';

function Dashboard() {
  return (
    <div className="d-flex" style={{ height: '200vh' }}>
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Navbar />

      <div className="container-fluid">
      <div className="mb-4">
        <h1 className="h3 mb-3">Users List </h1>
        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-9">
            <ListUsers />
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <h1 className="h3 mb-3">Records List </h1>
        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-9">
            <ListRecords />
          </div>
        </div>
      </div>
    <hr className="my-4" />

      <div>
        <h1 className="h3 mb-3">Appointements List </h1>
        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-9">
            <ListAppointements />
          </div>
        </div>
      </div>
      </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
