// src/pages/HomePage.js
import React from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';

function HomePage() {
  const handleSave = (newNote) => {
    // Optionally update state to reflect the new note in the list
  };

  return (
    <div>
      <NoteForm onSave={handleSave} />
      <NoteList />
    </div>
  );
}

export default HomePage;