import { Metadata } from 'next';
import CreateNoteClient from './CreateNoteClient';

export const metadata: Metadata = {
  title: 'Create Note - NoteHub',
  description: 'Create a new note with title, content and tags. Save your thoughts and ideas in NoteHub.',
  openGraph: {
    title: 'Create Note - NoteHub',
    description: 'Create a new note with title, content and tags. Save your thoughts and ideas in NoteHub.',
    url: '/notes/action/create',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Create Note - NoteHub',
      },
    ],
  },
};

function CreateNote() {
  return <CreateNoteClient />;
}

export default CreateNote;