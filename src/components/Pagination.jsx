import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import portfolio1 from "../assets/images/portfolio-1.jpg";

const portfolio = [
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
  {
    imgUrl: portfolio1,
    link: "https://google.com",
  },
];

const Pagination = ({ itemsPerPage, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(portfolio.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(portfolio.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % portfolio.length;
    setItemOffset(newOffset);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<GrNext />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={<GrPrevious />}
      renderOnZeroPageCount={null}
      activeClassName="active-pagination"
      subContainerClassName="pages pagination"
      containerClassName="pagination"
      breakLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="prev-btn"
      nextClassName="page-item"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextLinkClassName="next-btn"
    />
  );
};

export default Pagination;
