import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Staff = () => {
  const [staffData, setStaffData] = useState([
    {
      id: 1,
      name: 'Jack',
      email: 'jack@test.com',
      password: 'oh yeah',
      idNumber: '82937239',
      station: 'Siaya',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@mail.com',
      password: 'help us',
      idNumber: '2879279382',
      station: 'Kiambu',
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'johnd@mail.com',
      password: 'cashgo',
      idNumber: '985934774',
      station: 'Kiambu',
    },
    {
      id: 4,
      name: 'Alice Smith',
      email: 'alice@mail.com',
      password: 'secret123',
      idNumber: '7638921',
      station: 'Nairobi',
    },
    {
      id: 5,
      name: 'Bob Johnson',
      email: 'bob@mail.com',
      password: 'password',
      idNumber: '98374624',
      station: 'Mombasa',
    },
  ]);

  const [editingStaffId, setEditingStaffId] = useState(null);

  const handleEdit = (id) => {
    setEditingStaffId(id);
  };

  const handleUpdate = (id, updatedData) => {
    // Implement logic to handle updating the staff member
    console.log('Update staff with ID:', id, 'Updated data:', updatedData);

    // Update the staffData array with the edited data
    const updatedStaffData = staffData.map((staff) =>
      staff.id === id ? { ...staff, ...updatedData } : staff
    );
    setStaffData(updatedStaffData);

    // Reset the editing state
    setEditingStaffId(null);
  };

  const handleDelete = (id) => {
    // Implement logic to handle deleting the staff member
    console.log('Delete staff with ID:', id);

    // Remove the staff member from the staffData array
    const updatedStaffData = staffData.filter((staff) => staff.id !== id);
    setStaffData(updatedStaffData);
  };

  return (
    <div className="col-lg-10 main--section">
      <h2>Staff Data</h2>
      <hr />
      <section className="data--tables container-fluid">
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>ID NUMBER</th>
              <th>STATION</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id}>
                <td scope="row">{staff.id}</td>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>{staff.password}</td>
                <td>{staff.idNumber}</td>
                <td>{staff.station}</td>
                <td>
                  {editingStaffId === staff.id ? (
                    <button className="btn bg-success" disabled>
                      EDIT
                    </button>
                  ) : (
                    <button
                      className="btn bg-success"
                      onClick={() => handleEdit(staff.id)}
                    >
                      EDIT
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn bg-danger"
                    onClick={() => handleDelete(staff.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {editingStaffId && (
        <EditStaffForm
          staff={staffData.find((staff) => staff.id === editingStaffId)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

const EditStaffForm = ({ staff, onUpdate }) => {
  const [name, setName] = useState(staff.name);
  const [email, setEmail] = useState(staff.email);
  const [password, setPassword] = useState(staff.password);
  const [idNumber, setIdNumber] = useState(staff.idNumber);
  const [station, setStation] = useState(staff.station);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      email,
      password,
      idNumber,
      station,
    };
    onUpdate(staff.id, updatedData);
  };

  return (
    <div className="edit-staff-form">
      <h2>Edit Staff</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="station">Station:</label>
          <input
            type="text"
            id="station"
            value={station}
            onChange={(e) => setStation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

EditStaffForm.propTypes = {
  staff: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    idNumber: PropTypes.string.isRequired,
    station: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Staff;
