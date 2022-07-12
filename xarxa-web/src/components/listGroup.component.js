import React from "react";

class ListGroup extends React.Component {
  onSelectItem = (item, index) => {
    this.props.onSelectItem(item, index);
  };

  renderItems = () => {
    return this.props.items.map((item, index) => {
      const active = index === this.props.selectedItem ? "active" : "";
      return (
        <li
          key={index}
          className={`list-group-item ${active} ${item[1]}`}
          aria-current="true"
          onClick={() => this.onSelectItem(index)}
        >
          {item[0]}
        </li>
      );
    });
  };

  render() {
    return <ul className="list-group">{this.renderItems()}</ul>;
  }
}

export default ListGroup;
