import React from "react";

const Pagination = ({ perPage, totalPage, paginate, page }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="">
      <nav aria-label="">
        <ul className="pagination">
          <li
            className={
              pageNumbers[0] === page ? "page-item disabled" : "page-item "
            }
          >
            <a
              class="page-link"
              onClick={paginate.bind(null, page - 1)}
              href="#4"
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((item, index) => (
            <li
              className={page === item ? "page-item active" : "page-item"}
              key={index}
            >
              <a onClick={() => paginate(item)} className="page-link" href="#1">
                {item}
              </a>
            </li>
          ))}
          <li
            class={
              pageNumbers[pageNumbers.length - 1] === page
                ? "page-item disabled"
                : "page-item"
            }
          >
            <a
              class="page-link"
              href="#3"
              onClick={paginate.bind(null, page + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
