import css from './Footer.module.css';
interface Props {
    className?: string
}


const Footer = ({}: Props) => {
    return (
        <footer className={css.footer}>
            <div >
                <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
                <div className={css.wrap}>
                    <p>Developer: Vladyslav Honchar</p>
                    <p>
                        <span className={css.contact}>Contact us:</span>
                        <a href="mailto:dr.tienam@gmail.com">dr.tienam123@gmail.com</a>
                    </p>
                </div>
            </div>
        </footer>

    );
};
export default Footer