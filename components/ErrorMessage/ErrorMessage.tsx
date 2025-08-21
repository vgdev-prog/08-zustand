import { MdErrorOutline } from "react-icons/md";
import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <span className={css.error}>
        <MdErrorOutline />
        {message}
    </span>
);

export default ErrorMessage;