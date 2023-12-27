
import React, { useState, useEffect } from 'react';

const ListUsers  = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/listUsers');
        if (response.ok) {
          const userList = await response.json();
          setUsers(userList);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchUsers();
  }, []);


  const handleActivateDeactivate = async (userId, currentState) => {
    try {
      const newAccountState = currentState === 0 ? 1 : 0;

      const response = await fetch(`http://localhost:3000/auth/activateDeactivateUser/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ account_state: newAccountState }),
      });

      if (response.ok) {
       
      } else {
        console.error('Failed to activate/deactivate user');
      }
    } catch (error) {
      console.error('Error during activation/deactivation:', error);
    }
  };


  return (

    /*



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
    <div>
      <h1>User Dashboard</h1>      
        <table className="table table-hover my-0">
        <thead>
          <tr>
            <th>User</th>
            <th>Address</th>
            <th>Birthdate</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.address}</td>
              <td>{new Date(user.birthdate).toLocaleDateString()}</td>
              <td>{user.gender}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.account_state === 0 ? <span class="badge bg-danger">Inactive</span>: <span class="badge bg-success">Active</span>}</td>
              <td>
                {user.account_state === 0 ? (
                  <button class="btn btn-primary" onClick={() => handleActivateDeactivate(user._id, user.account_state)}>
                    Activate
                  </button>
                ) : (
                  <button class="btn btn-warning" onClick={() => handleActivateDeactivate(user._id, user.account_state)}>
                    Deactivate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers ;


