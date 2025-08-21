'use client';

import css from './page.module.css';
import * as NoteService from "@/lib/api";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import {useState} from "react";
import {useDebounce} from "use-debounce";
import NoteList from "@/components/NoteList/NoteList";
import Link from "next/link";

interface NotesProps {
    filterTag?: string;
}

export default function Notes({ filterTag }: NotesProps) {
    const [query, setQuery] = useState<string>('')
    const [debouncedQuery] = useDebounce(query, 500);
    const [page, setPage] = useState<number>(1)

    const {data, isError, isLoading} = useQuery({
        queryKey: ['notes', debouncedQuery, page, filterTag],
        queryFn: () => NoteService.getAllNotes(debouncedQuery, page, undefined, 10, filterTag),
        placeholderData: keepPreviousData
    })

    const setCurrentPage = (newPage: number) => {
        setPage(newPage);
    }

    const setSearchQuery = (searchQuery: string) => {
        setQuery(searchQuery);
        setPage(1);
    }


    return (
        <div className={css.toolbar}>
            <div className={`container ${css.toolbarRow}`}>
                <SearchBox query={query}
                           setQuery={setSearchQuery}
                />
                {data && data.totalPages > 1 && (
                    <Pagination page={page}
                                setPage={setCurrentPage}
                                totalPages={data.totalPages}
                    />
                )}

                <Link href="/notes/action/create" className={css.button}>
                    Create note +
                </Link>

            </div>
            {data && data.notes.length > 0 && (
                <NoteList notes={data.notes}/>
            )}
            {isError && (<p>Something went wrong.</p>)}
            {isLoading && (<p>Loading, please wait...</p>)}
        </div>

    );
}