import css from './TagsMenu.module.css';
import { TAG_LIST } from '@/constants';
import Link from 'next/link';

const TagsMenu = () => {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>
        Notes ▾
      </button>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href="/notes/filter/all" className={css.menuLink}>
            All notes
          </Link>
        </li>
        {TAG_LIST.map((tag) => (
          <li key={tag.id} className={css.menuItem}>
            <Link href={`/notes/filter/${tag.name}`} className={css.menuLink}>
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsMenu;