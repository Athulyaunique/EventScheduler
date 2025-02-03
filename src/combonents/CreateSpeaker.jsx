import React, { useState } from 'react';
import { createSpeaker } from '../api/api';

function CreateSpeaker() {
  const [speaker, setSpeaker] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        alert('No access token found. Please log in.');
        return;
      }

      const response = await createSpeaker(token, speaker);

      if (response.status === 201) {
        alert('Speaker created successfully!');
        setSpeaker({ name: '', email: '' });
      }
    } catch (err) {
      console.error('Error creating speaker:', err);
      const errorMessage =
        err.response?.data?.error || 'Failed to create speaker. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h5 className="text-center mb-4">Create Speaker</h5>
            <form onSubmit={handleSubmit} className="row g-3">
              
              {/* Speaker Name */}
              <div className="col-12">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter speaker name"
                  value={speaker.name}
                  onChange={(e) => setSpeaker({ ...speaker, name: e.target.value })}
                  required
                />
              </div>

              {/* Email Address */}
              <div className="col-12">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter speaker email"
                  value={speaker.email}
                  onChange={(e) => setSpeaker({ ...speaker, email: e.target.value })}
                  required
                />
              </div>

              {/* Buttons */}
              <div className="col-12 d-flex justify-content-around">
                <button type="submit" className="btn btn-primary px-4">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={() => setSpeaker({ name: '', email: '' })}
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSpeaker;
