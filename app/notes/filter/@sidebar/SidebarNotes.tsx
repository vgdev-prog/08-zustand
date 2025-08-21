'use client';

import css from './page.module.css';
import {TAG_LIST} from "@/constants";
import { useParams } from 'next/navigation';
import Link from 'next/link';

const SidebarNotes = () => {
    const params = useParams();
    const currentTag = Array.isArray(params.slug) ? params.slug[0] : params.slug || 'all';

    return (
        <>
            <h2 className={css.title}>Filter by Tag</h2>
            <ul className={css.menuList}>
                <li className={css.menuItem}>
                    <Link 
                        href="/notes/filter/all" 
                        className={`${css.menuLink} ${currentTag === 'all' ? css.active : ''}`}
                    >
                        All notes
                    </Link>
                </li>
                {TAG_LIST.map((tag) => (
                    <li key={tag.id} className={css.menuItem}>
                        <Link 
                            href={`/notes/filter/${tag.name}`} 
                            className={`${css.menuLink} ${currentTag === tag.name ? css.active : ''}`}
                        >
                            {tag.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SidebarNotes;