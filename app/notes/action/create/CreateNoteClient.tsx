'use client';

import css from './page.module.css';
import NoteForm from '@/components/NoteForm/NoteForm';

function CreateNoteClient() {
  return (
    <>
      <h1 className={css.title}>Create note</h1>
      <NoteForm />
    </>
  );
}

export default CreateNoteClient;