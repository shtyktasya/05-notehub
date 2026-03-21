import css from "./Pagination.module.css";
import ReactPaginateModule from "react-paginate";

const ReactPaginate = (ReactPaginateModule as any)
  .default as typeof ReactPaginateModule;

interface PaginationProps {
  pageCount: number;
  onPageChange: (selected: number) => void;
}
const Pagination = ({ pageCount, onPageChange }: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={(event) => onPageChange(event.selected)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      breakLabel="..."
      previousLabel="←"
      nextLabel="→"
    />
  );
};
export default Pagination;
