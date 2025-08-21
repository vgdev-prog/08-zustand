import { notFound } from 'next/navigation';
import * as NoteService from "@/lib/api";
import css from './page.module.css';
import {HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {dehydrate} from "@tanstack/query-core";
import {NoteDetailsClient} from "@/app/notes/[id]/Notes.client";
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    
    try {
        const note = await NoteService.getNoteById(id);
        
        const truncatedContent = note.content.length > 150 
            ? `${note.content.substring(0, 150)}...`
            : note.content;
            
        return {
            title: `${note.title} - NoteHub`,
            description: truncatedContent || `Read the full note "${note.title}" on NoteHub. Tagged as ${note.tag}.`,
            openGraph: {
                title: `${note.title} - NoteHub`,
                description: truncatedContent || `Read the full note "${note.title}" on NoteHub. Tagged as ${note.tag}.`,
                url: `https://08-zustand-henna.vercel.app/notes/${id}`,
                images: [
                    {
                        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                        width: 1200,
                        height: 630,
                        alt: `NoteHub - ${note.title}`,
                    },
                ],
            },
        };
    } catch (error) {
        return {
            title: 'Note Not Found - NoteHub',
            description: 'The requested note could not be found on NoteHub.',
            openGraph: {
                title: 'Note Not Found - NoteHub',
                description: 'The requested note could not be found on NoteHub.',
                url: `https://08-zustand-henna.vercel.app/notes/${id}`,
                images: [
                    {
                        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                        width: 1200,
                        height: 630,
                        alt: 'NoteHub - Note Not Found',
                    },
                ],
            },
        };
    }
}

const Page = async ({params}: PageProps) => {
    const {id} = await params;
    const queryClient = new QueryClient();


    const note = await NoteService.getNoteById(id).catch(() => {
        notFound();
    });

    if (!note) {
        notFound();
    }

    await queryClient.prefetchQuery({
        queryKey: ['note',id],
        queryFn: () => NoteService.getNoteById(id),
    })


    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient />
        </HydrationBoundary>
    );
};

export default Page;