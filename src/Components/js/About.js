import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import about from "./../css/About.module.css";
export const About = () => {
  const [getcomment, setGetcomment] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setGetcomment(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPostData = () => {
    handleClose();

    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res))
      .catch((error) => {
        console.log("error");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <div className={about.aboutImage}>
        <h1>Hello About js</h1>
      </div>

      <div className="container pt-5">
        <button className="btn btn-success" onClick={handleShow}>
          new post
        </button>
        <div className="row">
          {getcomment.length
            ? getcomment.map((item, index) => (
                <div className="col-lg-8 my-3" key={index}>
                  <div className="card p-4">
                    <h5>
                      {item.id} {item.title}
                    </h5>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
            <div class="mb-3">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                aria-describedby="emailHelp"
              />
              <div id="title" class="form-text">
                We'll never share your Name with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="textaria"
                ></textarea>
                <label for="textaria">Comments</label>
              </div>
            </div>
            <div class="mb-3">
              <label for="userId" class="form-label">
                postId
              </label>
              <input
                type="number"
                className="form-control"
                id="userId"
                aria-describedby="emailHelp"
              />
              <div id="userId" class="form-text">
                We'll never share your postId with anyone else.
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={getPostData}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};
