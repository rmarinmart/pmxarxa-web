import React from "react";

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.toastRef = React.createRef();
  }

  render() {
    return (
      <div
        aria-live="polite"
        aria-atomic="true"
        className="d-flex justify-content-center align-items-center w-100"
      >
        <div className="toast align-items-center text-white bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true" ref={this.toastRef}>
          <div className="d-flex">
            <div className="toast-body">
              {this.props.message}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>


    );
  }
}

export default Toast;


/*

<div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          show="true"
          ref={this.toastRef}
        >
          <div className="toast-header">
            <svg
              class="bd-placeholder-img rounded me-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill={this.props.color}></rect>
            </svg>
            <strong className="me-auto">{this.props.title}</strong>
            <small className="text-muted">{this.props.when}</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{this.props.message}</div>
        </div>
      </div>
 */