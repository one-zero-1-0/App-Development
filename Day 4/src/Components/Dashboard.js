import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { logoutUser } from './authActions';
import '../Assets/css/dashboard.css'; // Import your dashboard CSS for styling

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user); // Get user data from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch a logout action
    dispatch(logoutUser());
    // Redirect to the login page (you can use react-router-dom for this)
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className='background'></div>
      <div className="sidebar">
        <div className="logo">Blood Donation App</div>
        
      </div>
      <div className="content">
        <header>
          <div className="top-nav">
            <div className="welcome">Welcome, {user.username}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <main>
          {/* Your dashboard content goes here */}
          <h1>Welcome to Your Dashboard</h1>
          <p>Manage Blood Efficiently</p>

          {/* User Profile */}
          <section className="user-profile">
            <h2>Your Profile</h2>
            <p>Name: {user.username}</p>
            <p>Email: 727821tucs019@skct.edu.in</p>
            {/* Add more profile information here */}
          </section>

          {/* Recent Activity */}
          <section className="recent-activity">
            <h2>Number of times Blood Donated</h2>
            <p>5</p>
            {/* Display a list of recent actions */}
            {/* Example:
            <ul>
              <li>Donated blood on {date}</li>
              <li>Requested blood on {date}</li>
              {/* Add more recent activities here */}
            {/* </ul> */}
          </section>

          {/* Dashboard Widgets */}
          <section className="dashboard-widgets">
            <h2>Number of people saved</h2>
            <p>10</p>
          
            {/* Add more widgets for other actions */}
          </section>

          {/* Notifications */}
          <section className="notifications">
            <h2>Notifications</h2>
            <p>Time to donate blood again</p>
            {/* Display a list of notifications */}
            {/* Example:
            <ul>
              <li>New donation request from {requester}</li>
              <li>You have a new message from {sender}</li>
              {/* Add more notifications here */}
            {/* </ul> */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
