import React from 'react';
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { username, password } = watch(); // Use watch to get form data
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Register successful');
      } else {
        console.error('Register failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Register</h2>
          <span>Register and enjoy our platform</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
            <input type="text" {...register("username")} placeholder='Username' />
            <input type="password" {...register("password")} placeholder='Password' />
            <button className='btn'>Register</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  )
}
