import css from './page.module.css';
import {TAG_LIST} from "@/constants";
import Link from 'next/link';

const NotesSidebar = () => {
    return (
        <>
            <h2 className={css.title}>Filter by Tag</h2>
            <ul className={css.menuList}>
                <li className={css.menuItem}>
                    <Link 
                        href="/notes/filter/all" 
                        className={css.menuLink}
                    >
                        All notes
                    </Link>
                </li>
                {TAG_LIST.map((tag) => (
                    <li key={tag.id} className={css.menuItem}>
                        <Link 
                            href={`/notes/filter/${tag.name}`} 
                            className={css.menuLink}
                        >
                            {tag.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NotesSidebar;