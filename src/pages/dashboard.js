import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import ListUsers  from '../Admin/ListUsers';

function Dashboard() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Navbar />

        <div className="container-fluid">
          <h1 className="h3 mb-3">Dashboard</h1>
          <div className="row">
            <div className="col-12 col-lg-8 col-xxl-9 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h5 className="card-title mb-0">Latest Projects</h5>
                </div>
                    <ListUsers />
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
/*

<table className="table table-hover my-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th className="d-none d-xl-table-cell">Start Date</th>
                      <th className="d-none d-xl-table-cell">End Date</th>
                      <th>Status</th>
                      <th className="d-none d-md-table-cell">Assignee</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                        <td>Project Apollo</td>
                        <td class="d-none d-xl-table-cell">01/01/2023</td>
                        <td class="d-none d-xl-table-cell">31/06/2023</td>
                        <td><span class="badge bg-success">Done</span></td>
                        <td class="d-none d-md-table-cell">Vanessa Tucker</td>
                    </tr>
                    <tr>
                        <td>Project Fireball</td>
                        <td class="d-none d-xl-table-cell">01/01/2023</td>
                        <td class="d-none d-xl-table-cell">31/06/2023</td>
                        <td><span class="badge bg-danger">Cancelled</span></td>
                        <td class="d-none d-md-table-cell">William Harris</td>
                    </tr>
                  </tbody>
                </table>

                */