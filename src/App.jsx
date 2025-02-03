import { useEffect, useState } from 'react'
import './App.css'
import Schedulerapp from './combonents/Schedulerapp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './combonents/Register'
import Login from './combonents/Login'
import Protected from './combonents/Protected'
import Navbar from './combonents/Navbar'
import CreateSession from './combonents/CreateSession'
import { listEvent } from './api/api';
import CreateSpeaker from './combonents/CreateSpeaker'
import Home from './combonents/Home'
import ViewSession from './combonents/ViewSession'
import Table from './combonents/Table'
import ViewSpeaker from './combonents/ViewSpeaker'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        // console.error('Access token is missing.');
        return;
      }
      const response = await listEvent(token);

      // Debug API response structure
      console.log(response);
      setEvents(response.data || []); // Adjust based on API response
    } catch (err) {
      console.error('Error fetching events:', err);
    }
  };
  
  useEffect(() => {
    
    fetchData();
  }, []);


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Protected' element={<Protected/>}/>
        <Route path='/home' element={<Schedulerapp events={events} />}>

        <Route path='/home/' element={<Home events={events} fetchData={fetchData}/>}/>
          <Route path='/home/create_session' element={<CreateSession events={events}/>}/>
          <Route path='/home/create_speakers' element={<CreateSpeaker/>}/>
          <Route path='/home/view_sessions' element={<ViewSession events={events} />}/>
          <Route path='/home/list_event' element={<Table events={events} handleEdit={() => {}} handleDeleteEvent={() => {}} />}/>
          <Route path='/home/view_speakers' element={<ViewSpeaker />}/>

        </Route>
        <Route path="/" element={<Navbar />} />
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App