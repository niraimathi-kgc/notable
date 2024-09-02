// src/components/NoteForm.js
import React, { useState } from 'react';
import axios from 'axios';

function NoteForm({ note, onSave }) {
  const [title, setTitle] = useState(note ? note.title : '');
  const [content, setContent] = useState(note ? note.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = { title, content };
    if (note) {
      axios.put(`http://localhost:8000/api/notes/${note.id}/`, noteData)
        .then(response => onSave(response.data))
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:8000/api/notes/', noteData)
        .then(response => onSave(response.data))
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default NoteForm;
