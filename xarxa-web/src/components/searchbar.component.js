import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className=" input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="inputSearch"
            placeholder={this.props.placeholder}
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <button type="submit" className="btn btn-outline-secondary">
            Buscar
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
