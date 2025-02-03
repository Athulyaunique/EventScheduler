import React, { useState } from 'react';
import { addEvent } from '../api/api';

function Form({editEvent}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  
     if (editEvent){
       const newData={
        title: editEvent.title,
        description: editEvent.description,
        date: editEvent.date,
        location: editEvent.location,
      }
      setFormData(editEvent)
     }
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      console.log(formData)
      const token = localStorage.getItem('accessToken');
      const response = await addEvent(token, formData);

      if (response.status === 201) {
        console.log(response.data.message);
        alert('Event created');

        // Notify the parent about the new event
        onEventAdded(formData);

        // Clear the form
        setFormData({ title: '', description: '', date: '', location: '' });
      }
    } catch (err) {
      console.error('Error creating event:', err);
    }
  };

  const handleCancel = () => {
    setFormData({ title: '', description: '', date: '', location: '' }); // Reset form on cancel
  };

  return (
    <div className="form-form">
      <h5>Create Event</h5>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="inputAddress"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="inputAddress2"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputCity" className="form-label">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>

        <div
          className="col-12"
          style={{
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '200px',
          }}
        >
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;