import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import NoteList from './components/NoteList'; // Import other components
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<ProtectedRoute component={NoteList} />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
