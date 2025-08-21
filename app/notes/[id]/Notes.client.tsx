"use client"
import css from './page.module.css'
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import * as NoteService from "@/lib/api";
import {formatDate} from "@/lib/dateUtils";

export const NoteDetailsClient =  () => {
    const {id} = useParams() as {id: string};
    const {data, isError, isLoading} = useQuery({
        queryKey: ['note', id],
        queryFn: () => NoteService.getNoteById(id)
    })

    return (
        <>
            {data && (
                <div className={css.container}>
                    <div className={css.item}>
                        <div className={css.header}>
                            <h2>{data.title}</h2>
                        </div>
                        <p className={css.content}>{data.content}</p>
                        <p className={css.date}>{formatDate(data.createdAt)}</p>
                    </div>
                </div>
            )}
            {isLoading && (<p>Loading, please wait...</p>)}
            {isError && (<p>Something went wrong.</p>)}
        </>

    );
};