import React, { useEffect, useState } from 'react';
import { getNotes } from '../services/api';
import AddNote from './AddNote'; // Import AddNote component

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await getNotes();
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Notable</h2>
      <AddNote /> {/* Add AddNote component here */}
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
