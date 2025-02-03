import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/event_app' });

// Utility function to get CSRF token if needed
const getCSRFToken = () => {
  const csrfToken = document.cookie.match(/csrftoken=([^;]+)/);
  return csrfToken ? csrfToken[1] : '';
};

export const registerUser = (userData) => API.post('/register/', userData);

export const loginUser = (userData) => API.post('/login/', userData);

export const getProtectedData = (token) =>
  API.get('/protected/', {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addEvent = (token, eventData) => {
  const csrftoken = getCSRFToken(); // Get the CSRF token from the cookies
  return API.post('/add_event/', eventData, {
    headers: {
      "X-CSRFToken": csrftoken, // Include the CSRF token for security
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listEvent = (token) =>
  API.get('/list_event/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const editEvent = (token, data, pk) =>
  API.put(`/edit_event/${pk}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteEvent = (token, pk) =>
  API.delete(`/delete_event/${pk}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createSession = (token, sessionData) =>
  API.post('/create_session/', sessionData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const createSpeaker = (token, speaker) =>
  API.post('/create_speakers/', speaker, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getEventsWithSessions = (token) =>
  API.get('/view_sessions/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const viewSpeakers = (token) =>
  API.get('/view_speakers/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
