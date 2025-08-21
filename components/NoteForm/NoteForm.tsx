'use client';

import css from './NoteForm.module.css';
import { useNoteStore, initialDraft } from "@/lib/store/noteStore";
import * as NoteService from "@/lib/api";
import { TAG_LIST } from "@/constants";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NoteForm = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { draft, setDraft, clearDraft } = useNoteStore();

    const createNoteMutation = useMutation({
        mutationFn: NoteService.createNote,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] });
            clearDraft();
            router.back();
        },
        onError: (error) => {
            console.error('Error creating note:', error);
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDraft({ ...draft, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        createNoteMutation.mutate({
            title: currentValues.title,
            content: currentValues.content,
            tag: currentValues.tag
        });
    };

    const currentValues = {
        title: draft.title || initialDraft.title,
        content: draft.content || initialDraft.content,
        tag: draft.tag || initialDraft.tag,
    };

    return (
        <form 
            className={css.form} 
            onSubmit={handleSubmit}
        >
            <div className={css.formGroup}>
                <label htmlFor="title">Title</label>
                <input 
                    id="title"
                    type="text"
                    name="title"
                    value={currentValues.title}
                    onChange={handleChange}
                    className={css.input}
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    name="content"
                    value={currentValues.content}
                    onChange={handleChange}
                    rows={8}
                    className={css.textarea}
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="tag">Tag</label>
                <select 
                    id="tag"
                    name="tag"
                    value={currentValues.tag}
                    onChange={handleChange}
                    className={css.select}
                >
                    {TAG_LIST.map(tag => (
                        <option key={tag.id} value={tag.name}>
                            {tag.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={css.actions}>
                <button 
                    type="button"
                    className={css.cancelButton}
                    onClick={() => router.back()}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className={css.submitButton}
                >
                    Create note
                </button>
            </div>
        </form>
    );
};
export default NoteForm