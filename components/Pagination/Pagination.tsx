import css from './Pagination.module.css';
import ReactPaginate from "react-paginate";

interface  PaginationProps {
    totalPages: number
    page: number
    setPage: (page: number) => void
}
const Pagination = ({ totalPages, page, setPage }: PaginationProps) => {
    if (totalPages <= 1) {
        return null
    }
    const componentKey = `${page}-${totalPages}`;


    return (
        <ReactPaginate
            key={componentKey}
            pageCount={totalPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={({ selected }) => {
                setPage(selected + 1);
            }}
            initialPage={page - 1}
            containerClassName={css.pagination}
            activeClassName={css.active}
            nextLabel="→"
            previousLabel="←"
        />
    );
};
export default Pagination