import React, { useState } from 'react';
import './App.css';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import DeleteAcc from './DeleteAcc';
import UpdatePass from './UpdatePass';
import SnakeGame from './SnakeGame/SnakeGame';
import Pong from './PongGame/Pong';
import TicTacToe from './TicTacToe/TicTacToe';
import YourApp from './YourApp';

// PrivateRoute component to protect routes that require authentication
const PrivateRoute = ({ children, authenticated }) => {
  return authenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  // Check if authentication status is stored in localStorage
  const storedAuth = localStorage.getItem('authenticated');
  const [authenticated, setAuthenticated] = useState(storedAuth === 'true');

  // Function to set authentication status in both state and localStorage
  const setAuthStatus = (status) => {
    setAuthenticated(status);
    localStorage.setItem('authenticated', status);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route
            path="/login"
            element={<Login setAuthStatus={setAuthStatus} />}
          />
          <Route path="/signup" element={<Signup />} />
          {/* Use element property to render PrivateRoute */}
          <Route
            path="/home"
            element={
              <PrivateRoute authenticated={authenticated}>
                <Home setAuthStatus={setAuthStatus} />
              </PrivateRoute>
            }
          />
          <Route
              path="/deleteacc"
              element={
                <PrivateRoute authenticated={authenticated}>
                  <DeleteAcc />
                </PrivateRoute>
              }
          />
          <Route
            path="/updatepass"
            element={
              <PrivateRoute authenticated={authenticated}>
                <UpdatePass />
              </PrivateRoute>
            }
          />
          <Route
            path="snakegame/snakegame1"
            element={
              <PrivateRoute authenticated={authenticated}>
                <SnakeGame />
              </PrivateRoute>
            }
          />
          <Route
            path="ponggame/pong1"
            element={
              <PrivateRoute authenticated={authenticated}>
                <Pong />
              </PrivateRoute>
            }
          />
          <Route
            path="tictactoe/tictactoe1"
            element={
              <PrivateRoute authenticated={authenticated}>
                <TicTacToe />
              </PrivateRoute>
            }
          />
          <Route
            path="/yourapp"
            element={
              <PrivateRoute authenticated={authenticated}>
                <YourApp />
              </PrivateRoute>
            }
          />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
