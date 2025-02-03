import React from 'react';

function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-primary text-white"
      style={{height: "700px",
      width:"300px",
      borderRadius:"4px",
      right:"60px",
      margin:"0px",
      padding:"0px"
      }}
    >
      <a
        href="/"
        className="d-flex mb-6 mb-md-0 me-md-auto link-body-emphasis text-decoration-none text-white"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/home/" className="nav-link active text-white" aria-current="page" >
            Create Event
          </a>
        </li>
        <li>
          <a href="/home/list_event" className="nav-link  text-white">
            View Events
          </a>
        </li>
        <li>
          <a href="/home/create_session" className="nav-link text-white">
            Create Session
          </a>
        </li>
        <li>
          <a href="/home/view_sessions" className="nav-link text-white">
            View Sessions
          </a>
        </li>
        <li>
          <a href="/home/create_speakers" className="nav-link text-white">
            Create Speaker
          </a>
        </li>
        <li>
          <a href="/home/view_speakers" className="nav-link active text-white" aria-current="page">
            View Speakers
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;