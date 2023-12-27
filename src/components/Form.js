import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


function Form() {
  const { register, watch,formState: { errors },handleSubmit  } = useForm();
  const [maxDate, setMaxDate] = useState(getFormattedDate());
  const [errorMessage, setErrorMessage,successMessage,setSuccessMessage] = useState('');

  function getFormattedDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();


    // Add leading zero if month or day is a single digit
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }
  const onSubmit  = async (event) => {
    event.preventDefault(); 
     /*const onSubmit = (data) => {
       console.log('Form data:', data);
     };
 */
     try {
 
      const { username, password, gender, role, email, phone, account_state, address, birthdate } = watch(); // Use watch to get form data
      console.log('Form data:', { username, password, gender, role, email, phone, account_state, address, birthdate });
 
      const response = await fetch('http://localhost:3000/auth/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username, password, gender, role, email, phone, account_state, address, birthdate  }),
       });
       if (response.ok) {
 
         console.log('Register successful');
         /*setSuccessMessage(
          <div> <span class="badge bg-success">            
            Register successful          
            </span>
          </div>
        );*/    
       } 
       else {
         console.error('Register failed');    
         setErrorMessage(
          <div> <span class="badge bg-danger">            
          Registration failed. Please try again.
          </span>
          </div>
        );    
        }
      } catch (error) {
        console.error('Error during registration:', error);

      }
    };
  
  return (   
<main class="d-flex w-100">
		<div class="container d-flex flex-column">
			<div class="row vh-100">
				<div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Welcome !</h1>
							<p class="lead">
								Register
							</p>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-3">
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                  		<div class="mb-3">
											<label class="form-label">Username</label>
                      <input type="text" {...register("username", { required: true })}  />
                      {errors.username && (
                        <div>
                          <span className="badge bg-danger">Username is required</span>
                        </div>
                      )}


										</div>
										<div class="mb-3">
											<label class="form-label">Password</label>
                      <input type="password" {...register("password", { required: true })} />
                      {errors.password && (
                        <div>
                          <span className="badge bg-danger">password is required</span>
                        </div>
                      )}
							
                      </div>
										<div>
										
										</div>


										<div class="mb-3">
                    <label class="form-label"> Choose Role</label>
                    <select {...register("role", { required: true })}>
                      <option value="patient">Patient</option>
                      <option value="employe">Employe</option>
                      <option value="doctor">Doctor</option>
                    </select>

                    {errors.role && (
                        <div>
                          <span className="badge bg-danger">Role is required</span>
                        </div>
                      )}

                    </div>
                    <div class="mb-3">
                    <label class="form-label"> Gender</label>

                      <select {...register("gender", { required: true })}>
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                      </select>
                      {errors.gender && (
                        <div>
                          <span className="badge bg-danger">Gender is required</span>
                        </div>
                      )}
                    </div>
                    <div class="mb-3">
                    <label class="form-label"> Email </label>

                    <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                    {errors.email && (
                        <div>
                          <span className="badge bg-danger">email is required</span>
                        </div>
                      )}


                    </div>
                    <div class="mb-3">
                    <label class="form-label"> Phone Number</label>

                    <input type="tel" {...register("phone", { required: true, pattern: /^\d{8}$/ })} />
                    {errors.phone && (
                        <div>
                          <span className="badge bg-danger">Valid phone number (10 digits) is required</span>
                        </div>
                      )}

                    </div>
                    <div class="mb-3">
                    <label class="form-label"> Adress</label>

                    <input type="text" {...register("address", { required: true })} />

                    {errors.address && (
                        <div>
                          <span className="badge bg-danger">address  is required</span>
                        </div>
                      )}

                    </div>
                    <div class="mb-3">
                    <label class="form-label"> Birthdate</label>

                    <input type="date" {...register("birthdate", { required: true })} placeholder='Birth Date' max={maxDate} />
                    {errors.birthdate && (
                        <div>
                          <span className="badge bg-danger">birthdate  is required</span>
                        </div>
                      )}

                    </div>
                    <div class="d-grid gap-2 mt-3">
                              </div>
                        
                              <button type="submit" className="btn btn-lg btn-primary">Register</button>
                              {errorMessage}
                              {successMessage}


                  </form>

								</div>
							</div>
						</div>
					
					</div>
				</div>
			</div>
		</div>
	</main>
  );
}

export default Form;

