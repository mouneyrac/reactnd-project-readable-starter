//@flow
import React from "react";
import { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import CommentForm from "./CommentForm";
import ReactModal from "react-modal";

class EditCommentBadge extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <span>
        <span
          className="badge badge-pill badge-primary"
          onClick={this.handleOpenModal}
        >
          edit
        </span>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Edit Comment"
          className="Modal__Bootstrap modal-dialog"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={this.handleCloseModal}
              >
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">Edit Comment</h4>
            </div>
            <div className="modal-body">
              <CommentForm />
            </div>
          </div>
        </ReactModal>
      </span>
    );
  }
}

export default EditCommentBadge;
