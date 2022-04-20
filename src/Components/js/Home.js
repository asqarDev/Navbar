import axios from "axios";
import React, { Component } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import home from "./../css/HomePage.module.css";
export default class Home extends Component {
  state = {
    jsonData: [],
    show: false,
    loader: false,
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  submit = () => {
    this.handleClose();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: this.state.userId,
        title: this.state.title,
        body: this.state.body,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log("error");
      });
      
  };
  getData = () => {
    this.setState({
      loader: true,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(
        (res) => (
          console.log(res),
          this.setState({
            jsonData: res.data,
            loader: false,
          })
        )
      )
      .catch((error) =>
        this.setState({
          loader: false,
        })
      );
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { jsonData } = this.state;

    return (
      <div className="">
        <div className={`${home.homeImage} `}>
          <h1 className="text-center">Hello Home js</h1>
        </div>

        <div className={`${home.homeDiv} container my-4`}>
          <button className="btn btn-success" onClick={this.handleShow}>
            New Data
          </button>
          <div className="row justify-content-center">
            {this.state.loader ? (
              <div className="col-lg-2 offset-lg-5 text-center">
                <Spinner color="dark" />
              </div>
            ) : (
              jsonData.map((item, index) => (
                <div className="col-lg-8 my-3" key={index}>
                  <div className="card p-4">
                    <h5>
                      {item.id} {item.title}
                    </h5>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.submit}>
            <Modal.Body>
              <div class="input-group mb-3">
                <input
                  onChange={(e) => this.setState({ userId: e.target.value })}
                  type="text"
                  name="userId"
                  id="userId"
                  class="form-control"
                  placeholder="UserId"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={this.state.userId}
                />
              </div>

              <div class="input-group mb-3">
                <input
                  onChange={(e) => this.setState({ title: e.target.value })}
                  type="text"
                  name="title"
                  id="title"
                  class="form-control"
                  placeholder="Title"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={this.state.title}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  onChange={(e) => this.setState({ body: e.target.value })}
                  type="text"
                  name="body"
                  id="body"
                  class="form-control"
                  placeholder="Body"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={this.state.body}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>this.submit()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
