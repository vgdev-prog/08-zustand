import css from './SearchBox.module.css';

interface SearchBoxProps {
    query: string;
    setQuery: (query: string) => void;
}
const SearchBox = ({ query, setQuery }: SearchBoxProps) => {
    return (
        <input
            className={css.input}
            type="text"
            placeholder="Search notes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};
export default SearchBox;