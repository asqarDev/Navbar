import axios from "axios";
import React, { useEffect, useState } from "react";

const Paginations = () => {
  const [loader, setLoader] = useState(true);

  const [datas, setDatas] = useState([]);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const [maxPageLimit, setMaxPageLimit] = useState(10);
  const [numberPerPage, setNumberPerPage] = useState(10);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const indexLastOf = page * perPage;
  const indexFirstOf = indexLastOf - perPage;
  const Malumotlar = datas.slice(indexFirstOf, indexLastOf);

  const getStudents = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((result) => {
        setDatas(result.data);
        console.log(result.data);
        setLoader(false);
      })
      .catch((resulst) => {
        console.log("Error");
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const pageClick = (NumberPage) => {
    setPage(NumberPage);
  };

  const nextPage = () => {
    setPage(page + 1);
    if (page + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + numberPerPage);
      setMinPageLimit(minPageLimit + numberPerPage);
    }
  };
  const prevPage = () => {
    setPage(page - 1);
    if ((page + 1) % numberPerPage == 0) {
      setMaxPageLimit(maxPageLimit - numberPerPage);
      setMinPageLimit(minPageLimit - numberPerPage);
    }
  };

  const NumberPage = [];
  for (let i = 1; i <= Math.ceil(datas.length / perPage); i++) {
    NumberPage.push(i);
  }
  return (
    <div className="container">
      <h3 className="text-center">Pagination</h3>
      <div className="row">
        {loader ? (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <ul className="" style={{ listStyleType: "none" }}>
              {datas.length
                ? Malumotlar.map((item, index) => (
                    <div>
                      <li
                        className=""
                        key={index}
                        style={{
                          border: "1px solid blue",
                          padding: "4px",
                          borderRadius: "3px    ",
                        }}
                      >
                        {item.id} {item.title}
                      </li>
                    </div>
                  ))
                : "NO DATA"}
            </ul>
          </div>
        )}
      </div>
      <div className="row justify-content-center">
        <div className="text-center">
          <i>
            length: {Math.ceil(datas.length / perPage)} of {page}
          </i>
          <nav className="d-flex justify-content-center" aria-label="...">
            <ul className="pagination">
              <li
                className={
                  NumberPage[0] === page ? "page-item disabled" : "page-item"
                }
              >
                <a className="page-link" href="#2" onClick={prevPage}>
                  prev
                </a>
              </li>
              {NumberPage.map((number) => {
                if (number < maxPageLimit + 1 && number > minPageLimit) {
                  return (
                    <li
                      className={
                        page === number ? "page-item active" : "page-item"
                      }
                    >
                      <a
                        className="page-link"
                        href="#2"
                        onClick={() => pageClick(number)}
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
                  NumberPage[NumberPage.length - 1] === page
                    ? "page-item disabled"
                    : "page-item"
                }
              >
                <a href="#2" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginations;
