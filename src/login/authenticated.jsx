import React from 'react';
import { useNavigate } from 'react-router-dom';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });

  }

  function play() {
    window.location.href = 'home.html';
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <button className='button' onClick={() => play()}>
        Play
      </button>
      <br></br>
      <br></br>
      <button className='button' onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}
