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