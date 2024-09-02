import React, { useState } from 'react';
import { createNote } from '../services/api';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNote({
        title,
        content,
      });
      setTitle('');
      setContent('');
      setError('');
      // Optionally, you can redirect or update the notes list here
      window.location.reload(); // Refresh to see the new note
    } catch (error) {
      setError('Failed to add note. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Note</h2>
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
        <button type="submit">Add Note</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddNote;
