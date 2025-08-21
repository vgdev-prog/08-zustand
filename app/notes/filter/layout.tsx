import {ReactNode} from "react";
import css from './layout.module.css';

const NotesLayout = ({children, sidebar}: {
    children: ReactNode;
    sidebar: ReactNode;
}) => {
    return (
        <div className={css.container}>
            <div className={css.sidebar}>
                {sidebar}
            </div>
            <div className={css.main}>
                {children}
            </div>
        </div>
    );
};

export default NotesLayout;