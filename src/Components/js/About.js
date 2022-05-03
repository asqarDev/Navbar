import React, { useState } from "react";

import about from "./../css/About.module.css";
import Pagination from "./Pagination";
export const About = ({ getData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [pageNamberLimit, setPageNamberLimit] = useState(10);
  const [maxNamberLimit, setMaxNamberLimit] = useState(10);
  const [minNamberLimit, setMinNamberLimit] = useState(0);

  const indexLastOf = currentPage * perPage;
  const indexFirsOf = indexLastOf - perPage;
  const CommintData = getData.slice(indexFirsOf, indexLastOf);
  const Numbers = [];
  for (let i = 1; i <= Math.ceil(getData.length / perPage); i++) {
    Numbers.push(i);
  }
  const pageNumber = (Number) => {
    setCurrentPage(Number);
  };
  const pageNumberNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxNamberLimit) {
      setMaxNamberLimit(maxNamberLimit + pageNamberLimit);
      setMinNamberLimit(minNamberLimit + pageNamberLimit);
    }
  };
  const pageNumberPrev = (Numbers) => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNamberLimit == 0) {
      setMaxNamberLimit(maxNamberLimit - pageNamberLimit);
      setMinNamberLimit(minNamberLimit - pageNamberLimit);
    }
  };
  return (
    <div className="">
      <div className={about.aboutImage}>
        <h1>Hello About js</h1>
      </div>

      <div className="container pt-5">
        <div className="row">
          {getData.length
            ? CommintData.map((item, index) => (
                <div className="col-lg-8 my-3" key={index}>
                  <div className="card p-4">
                    <h5>
                      {item.id} {item.title}
                    </h5>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))
            : "NO DATA"}
        </div>
        <div className="row">
          <nav className="" aria-label="">
            <ul className="pagination">
              <li
                className={
                  Numbers[0] === currentPage
                    ? "page-item disabled"
                    : "page-item"
                }
              >
                <a className="page-link" href="#2" onClick={pageNumberPrev}>
                  prev
                </a>
              </li>
              {Numbers.map((number) => {
                if (number < maxNamberLimit + 1 && number > minNamberLimit) {
                  return (
                    <li
                      className={
                        currentPage == number ? "page-item active" : "page-item"
                      }
                      key={number}
                      id={number}
                    >
                      <a
                        href="#1"
                        className="page-link"
                        onClick={() => pageNumber(number)}
                      >
                        {number}
                      </a>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
              <li
                className={
                  Numbers[Numbers.length - 1] === currentPage
                    ? "page-item disabled"
                    : "page-item"
                }
              >
                <a className="page-link" href="#2" onClick={pageNumberNext}>
                  next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
