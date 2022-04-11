import React from "react";
import Emoji from "./emoji.component";

class EmojiSpinner extends React.Component {
  render() {
    if (this.props.activeSpinner)
      return (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    return <Emoji symbol={this.props.symbol} />;
  }
}

export default EmojiSpinner;
