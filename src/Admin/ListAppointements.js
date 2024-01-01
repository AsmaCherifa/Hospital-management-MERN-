import React, { useState, useEffect } from 'react';

const ListAppointements = () => {
  const [appointements, setAppointements] = useState([]);

  useEffect(() => {
    const fetchAppointements = async () => {
      try {
        const response = await fetch('http://localhost:3000/appointement/getAll');
        if (response.ok) {
          const appointementsList = await response.json();
          setAppointements(appointementsList);
        } else {
          console.error('Failed to fetch Appointements');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchAppointements();
  }, []);


  return (
    <div>
      <table className="table table-hover my-0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hour</th>
            <th>Status</th>
            <th>Description</th>
            <th>Patient</th>
            <th>Doctor</th>
           
          </tr>
        </thead>
        <tbody>
          {appointements.map((appointement) => (
            <tr key={appointement._id}>
              <td>{appointement.date}</td>
              <td>{appointement.hour}</td>
              <td>
                {appointement.status === 'Scheduled' ? (
                  <span className="badge bg-warning">Scheduled</span>
                ) : appointement.status === 'Cancelled' ? (
                  <span className="badge bg-danger">Cancelled</span>
                ) : (
                  <span className="badge bg-primary">{appointement.status}</span>
                )}
              </td>              <td>{appointement.description}</td>
              <td>{appointement.patient}</td>
              <td>{appointement.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAppointements;
