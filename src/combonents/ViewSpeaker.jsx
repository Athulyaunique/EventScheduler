import React, { useState, useEffect } from 'react';
import { viewSpeakers } from '../api/api';

function ViewSpeakers() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleViewSpeaker = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await viewSpeakers(token);

      setSpeakers(response.data);
    } catch (error) {
      console.error('Error fetching speakers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleViewSpeaker();
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar content */}
        {/* <p>  view event</p> */}
      </div>
      
      {/* Main Content */}
      <div className="main-content container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-10">
            <div className="card shadow-lg p-4">
              <h5 className="text-center mb-4 fw-bold">Speakers List</h5>
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : speakers.length === 0 ? (
                <p className="text-center">No speakers available.</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-bordered text-center">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {speakers.map((speaker) => (
                        <tr key={speaker.id}>
                          <td>{speaker.name}</td>
                          <td>{speaker.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSpeakers;
