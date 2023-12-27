import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

function Profile() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Navbar />
            <div className="col-12 col-lg-8 col-xxl-9 d-flex">
              <div className="card flex-fill">
              <div class="main">

			<main class="content">
				<div class="container-fluid p-0">

					<div class="mb-3">
						<h1 class="h3 d-inline align-middle">Profile</h1>
					</div>
					<div class="row">
					<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Name</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" placeholder="Input"/>
								</div>
							</div>
					
					</div>

				</div>
			</main>

		
		</div>


              </div>
            </div>

        <Footer />
      </div>
    </div>
  );
}

export default Profile;
