// src/pages/NotePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../components/NoteForm';

function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/notes/${id}/`)
      .then(response => setNote(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleSave = (updatedNote) => {
    setNote(updatedNote);
  };

  return (
    <div>
      {note ? <NoteForm note={note} onSave={handleSave} /> : <p>Loading...</p>}
    </div>
  );
}

export default NotePage;