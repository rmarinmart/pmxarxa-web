import React from "react";

class ListGroup extends React.Component {
state = {selectedItem: 0};
onSelectItem = (item, index)=>{
    this.props.onSelectItem(item);
    this.setState({selectedItem: index});
}

renderItems = ()=> {
    return this.props.items.map((item, index)=> {        
        const active = index === this.state.selectedItem?"active":"";
        return  <li key={index} className={`list-group-item ${active}`} aria-current="true" onClick={()=>this.onSelectItem(item, index)}>{item}</li>
    });
}

render() {
    return (
    <ul className="list-group">
        {this.renderItems()}
    </ul>
    );
}

}

export default ListGroup;