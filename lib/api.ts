import axios from "axios";
import {type Note} from "@/types/note";
import {API_URL} from "@/constants";

interface NoteResponse {
    notes: Note[];
    totalPages: number;
}

export enum Sorting {
    CREATED = 'created',
}

export const getAllNotes = async (
    search: string,
    page: number = 1,
    sorting: Sorting = Sorting.CREATED,
    perPage: number = 10,
    tag?: string
):Promise<NoteResponse> => {
    const params = new URLSearchParams();

    params.append('page', String(page));
    params.append('sortBy', sorting);
    params.append('perPage', String(perPage));

    if (search) {
        params.append('search', search);
    }

    if (tag) {
        params.append('tag', tag);
    }

    const response = await axios.get(`${API_URL}/notes?${params.toString()}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
        },
    });
    return response.data as NoteResponse;
}

export const createNote = async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> => {
    const response = await axios.post(`${API_URL}/notes`, note, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
        },
    });
    return response.data as Note;
}

export const getNoteById = async (id: string): Promise<Note> => {
    const response = await axios.get(`${API_URL}/notes/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
        },
    });
    return response.data as Note;
}

export const deleteNote = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/notes/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
        },
    });
}