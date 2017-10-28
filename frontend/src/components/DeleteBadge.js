//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import * as api from "../utils/api";
import { deletePost } from "../actions";
import { connect } from "react-redux";

import ReactModal from "react-modal";

class DeleteBadge extends React.Component {
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

  handleSaveClicked() {
    api.deletePost(this.props.postId).then(response => {
      this.props.deletePost(this.props.postId);
    });
  }

  render() {
    return (
      <span>
        <span
          className="badge badge-pill badge-danger"
          onClick={this.handleOpenModal}
        >
          delete
        </span>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Delete"
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
              <h4 className="modal-title">Confirmation</h4>
            </div>
            <div className="modal-body">
              <h4>Delete the item</h4>
              <p>This action can not be reverted, are you sure?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.handleCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.handleSaveClicked()}
              >
                Delete
              </button>
            </div>
          </div>
        </ReactModal>
      </span>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: data => dispatch(deletePost(data))
  };
}

export default connect(null, mapDispatchToProps)(DeleteBadge);
