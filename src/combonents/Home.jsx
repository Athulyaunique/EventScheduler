import React, { useState,useEffect } from 'react'
import Table from './Table'
import Form from './Form'
import { editEvent,deleteEvent } from '../api/api'

function Home({events,fetchData}) {
    const [editevent,setEditevent]=useState()
    

    const handleDeleteEvent = async (id) => {
        try {
          const token = localStorage.getItem('accessToken');
          const response = await deleteEvent(token, id);
          if (response.status === 204) {
            fetchData()
            console.log(response)
          }
        } catch (error) {
          console.error('Error in deleting event', error);
        }
      };
    
    
      const handleEdit= async(data)=>{
    
        try {
          const token = localStorage.getItem('accessToken');
          const response = await editEvent(token, data,data.id);
    
          if (response.status === 201) {
            console.log(response.data.message);
            alert('Event updated');
    
    
            // Clear the form
            setEditevent('')
    
          }
          fetchData()
        } catch (err) {
          console.error('Error creating event:', err);
        }
      }
      useEffect(() => {
    
        fetchData();
      }, []);
    
  return (
    <div>

<Table 
            handleEdit={handleEdit}
            events={events}
            handleDeleteEvent={handleDeleteEvent}> 
            </Table>
            <div className="col-md-8" style={{
              left:"500px",
              display:"flex",
              flexDirection:"column",
              }}>
              <Form editevent={editevent}>
              </Form>
            </div>
    </div>
  )
}

export default Home