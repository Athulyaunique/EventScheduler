import React, { useState } from 'react';
import { createSession } from '../api/api';

function CreateSession({ events }) {
  const [sessionData, setSessionData] = useState({
    event: '',
    title: '',
    start_time: '',
    end_time: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(sessionData);
      const token = localStorage.getItem('accessToken');
      const response = await createSession(token, sessionData);

      if (response.status === 201) {
        console.log(response.data.message);
        alert('Session created');
        setSessionData({ event: '', title: '', start_time: '', end_time: '' });
      }
    } catch (err) {
      console.error('Error creating session:', err);
      const errorMessage = err.response?.data?.error || 'Failed to create session. Please try again.';
      alert(errorMessage);
    }
  };

  const handleCancel = () => {
    setSessionData({ event: '', title: '', start_time: '', end_time: '' });
  };

  return (
    <div className="form-form">
      <h5>Create Session</h5>

      <form className="row g-3" onSubmit={handleSubmit}>
        
        {/* Event Selection */}
        <div className="col-md-12">
          <label className="form-label">Event:</label>
          <select
            className="form-select"
            value={sessionData.event}
            onChange={(e) => setSessionData({ ...sessionData, event: e.target.value })}
          >
            <option value="">Select an Event</option>
            {events.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        {/* Session Title */}
        <div className="col-md-12">
          <label className="form-label">Session Title:</label>
          <input
            type="text"
            className="form-control"
            value={sessionData.title}
            onChange={(e) => setSessionData({ ...sessionData, title: e.target.value })}
          />
        </div>

        {/* Start Time */}
        <div className="col-md-12">
          <label className="form-label">Start Time:</label>
          <input
            type="time"
            className="form-control"
            value={sessionData.start_time}
            onChange={(e) => setSessionData({ ...sessionData, start_time: e.target.value })}
          />
        </div>

        {/* End Time */}
        <div className="col-md-12">
          <label className="form-label">End Time:</label>
          <input
            type="time"
            className="form-control"
            value={sessionData.end_time}
            onChange={(e) => setSessionData({ ...sessionData, end_time: e.target.value })}
          />
        </div>

        {/* Buttons */}
        <div className="col-12" style={{ display: 'flex', justifyContent: 'space-around', width: '200px' }}>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default CreateSession;
