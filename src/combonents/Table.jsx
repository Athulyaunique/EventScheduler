import React, { useState } from 'react';

function Table({ handleEdit, events = [], handleDeleteEvent }) {
  const [viewItem, setViewItem] = useState({});

  const handleview = (item) => {
    setViewItem({ ...item }); // Ensure object is updated
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (viewItem) {
      handleEdit(viewItem);
      setViewItem({}); // Clear form

      // Close modal manually
      const modal = document.getElementById("exampleModal");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    }
  };

  return (
    <div style={{ marginRight: '600px', width: '800px' }}>
      <h1>Event List</h1>

      <div className="table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <table className="table bg-primary" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th className="text-white bg-primary">Title</th>
              <th className="text-white bg-primary">Date</th>
              <th className="text-white bg-primary">Location</th>
              <th className="text-white bg-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>No events to display.</td>
              </tr>
            ) : (
              events.map((event, index) => (
                <tr key={event.id || index}>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-evenly', border: 'none' }}>
                    <button 
                      type="button" 
                      className="btn2 bg-primary text-white"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                      onClick={() => handleview(event)}
                    >
                      View/Edit
                    </button>
                    <button 
                      type="button" 
                      className="btn2 bg-primary text-white" 
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit Event</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="col-md-12">
                  <label className="form-label">Title:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={viewItem.title || ''} 
                    onChange={(e) => setViewItem({ ...viewItem, title: e.target.value })} 
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Description:</label>
                  <textarea 
                    className="form-control" 
                    value={viewItem.description || ''} 
                    onChange={(e) => setViewItem({ ...viewItem, description: e.target.value })} 
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Date:</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    value={viewItem.date || ''} 
                    onChange={(e) => setViewItem({ ...viewItem, date: e.target.value })} 
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Location:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={viewItem.location || ''} 
                    onChange={(e) => setViewItem({ ...viewItem, location: e.target.value })} 
                  />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
