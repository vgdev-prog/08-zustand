import NotesClient from "./NotesClient";
import {HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getAllNotes} from "@/lib/api";
import {dehydrate} from "@tanstack/query-core";
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const filterValue = slug[0];
    
    const getFilterDisplayName = (filter: string) => {
        switch (filter) {
            case 'all':
                return 'All Notes';
            case 'Todo':
                return 'Todo Notes';
            case 'Work':
                return 'Work Notes';
            case 'Personal':
                return 'Personal Notes';
            case 'Meeting':
                return 'Meeting Notes';
            case 'Shopping':
                return 'Shopping Notes';
            default:
                return `${filter} Notes`;
        }
    };
    
    const filterName = getFilterDisplayName(filterValue);
    
    return {
        title: `${filterName} - NoteHub`,
        description: `Browse and manage your ${filterName.toLowerCase()} in NoteHub. Organize your thoughts and ideas efficiently.`,
        openGraph: {
            title: `${filterName} - NoteHub`,
            description: `Browse and manage your ${filterName.toLowerCase()} in NoteHub. Organize your thoughts and ideas efficiently.`,
            url: `https://your-domain.com/notes/filter/${filterValue}`,
            images: [
                {
                    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 630,
                    alt: `NoteHub - ${filterName}`,
                },
            ],
        },
    };
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const filterValue = slug[0];
    
    const tag = filterValue === 'all' ? undefined : filterValue;
    
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['notes', '', 1, tag],
        queryFn: () => getAllNotes('', 1, undefined, 10, tag),
    })

    return (
        <>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NotesClient filterTag={tag} />
            </HydrationBoundary>
        </>
    );
};

export default Page;