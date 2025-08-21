'use client';

import { Note } from '@/types/note';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          display: 'inline-block'
        }}
      >
        {note.tag}
      </div>
    </div>
  );
}