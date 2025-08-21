import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface NoteFormData {
  title: string;
  content: string;
  tag: string;
}

export const initialDraft: NoteFormData = {
  title: '',
  content: '',
  tag: 'Todo',
};

interface NoteStore {
  draft: NoteFormData;
  setDraft: (note: Partial<NoteFormData>) => void;
  clearDraft: () => void;
}

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note: Partial<NoteFormData>) =>
        set((state) => ({
          draft: { ...state.draft, ...note },
        })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: 'note-draft-storage',
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);