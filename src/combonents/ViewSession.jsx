import React, { useState, useEffect } from 'react';
import { getEventsWithSessions } from '../api/api';

function ViewSessions() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const handleViewSession = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await getEventsWithSessions(token);
        console.log(response);
        setEventList(response.data);
      } catch (error) {
        console.error('Error in viewing sessions', error);
      }
    };

    handleViewSession();
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar content */}
        {/* <p>Sidebar content here</p> */}
      </div>
      
      {/* Main Content */}
      <div className="main-content container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-10">
            <div className="card shadow-lg p-4">
              <h5 className="text-center mb-4 fw-bold">Events & Sessions</h5>
              
              {eventList.length === 0 ? (
                <p className="text-center">No sessions available.</p>
              ) : (
                eventList.map((event) => (
                  <div key={event.id} className="mb-4">
                    <h4 className="text-primary">{event.title} ({event.date})</h4>
                    <div className="table-responsive">
                      <table className="table table-bordered text-center">
                        <thead className="table-dark">
                          <tr>
                            <th>Session Title</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {event.sessions.map((session) => (
                            <tr key={session.id}>
                              <td>{session.title}</td>
                              <td>{session.start_time}</td>
                              <td>{session.end_time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSessions;
