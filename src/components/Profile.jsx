import React, { useState } from 'react';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    location: 'Nairobi',
    bio:
      'I have been working as a petrol station attendant for over 5 years. I enjoy interacting with customers and ensuring their fueling needs are met. My responsibilities include fueling vehicles, handling payments, and providing excellent customer service. I take pride in maintaining a clean and organized station, and I am always ready to assist customers with any questions or concerns they may have. In my free time, I enjoy exploring new technologies and advancements in the automotive industry. Feel free to reach out if you have any inquiries or need assistance at the petrol station!',
  });

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // Perform the save operation or update the data in the backend
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="col-lg-10 main--section">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title mb-4">Profile</h2>
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Profile Picture"
                      className="img-fluid rounded-circle mb-3"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="mb-3">
                      <h4 className="mb-0">Name:</h4>
                      {editMode ? (
                        <input
                          type="text"
                          name="name"
                          value={user.name}
                          onChange={handleChange}
                        />
                      ) : (
                        <p>{user.name}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-0">Email:</h4>
                      {editMode ? (
                        <input
                          type="email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      ) : (
                        <p>{user.email}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-0">Age:</h4>
                      {editMode ? (
                        <input
                          type="number"
                          name="age"
                          value={user.age}
                          onChange={handleChange}
                        />
                      ) : (
                        <p>{user.age}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-0">Location:</h4>
                      {editMode ? (
                        <input
                          type="text"
                          name="location"
                          value={user.location}
                          onChange={handleChange}
                        />
                      ) : (
                        <p>{user.location}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4>Bio:</h4>
                  {editMode ? (
                    <textarea
                      name="bio"
                      value={user.bio}
                      onChange={handleChange}
                    />
                  ) : (
                    <p>{user.bio}</p>
                  )}
                </div>
                {editMode ? (
                  <button className="btn btn-success" onClick={handleSaveProfile}>
                    Save Profile
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={handleEditProfile}>
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
