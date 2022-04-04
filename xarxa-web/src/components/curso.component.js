import React from "react";

class Curso extends React.Component {
  render() {
    const {
      checkedPres,
      checkedDev,
      presObs,
      devObs,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged,
    } = this.props;
    return (
      <div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={checkedPres}
            onChange={(element) => onPresChanged(element.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Préstamo realizado
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Observaciones préstamo
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(element) => onPresObsChanged(element.target.value)}
            value={presObs}
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault2"
            checked={checkedDev}
            onChange={(element) => onDevChanged(element.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Devolución realizada
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Observaciones devolución
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(element) => onDevObsChanged(element.target.value)}
            value={devObs}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Curso;
