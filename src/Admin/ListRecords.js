import React, { useState, useEffect } from 'react';

const ListRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch('http://localhost:3000/records/getAll');
        if (response.ok) {
          const recordsList = await response.json();
          setRecords(recordsList);
        } else {
          console.error('Failed to fetch medical records');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchRecords();
  }, []);


  return (
    <div>
      <table className="table table-hover my-0">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Record Number</th>
            <th>Description</th>
           
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{record.patient}</td>
              <td>{record.recordNumber}</td>
              <td>{record.description}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListRecords;
