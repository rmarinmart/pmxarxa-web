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
        return  <li key={index} className={`list-group-item ${active} ${item[1]}`} aria-current="true" onClick={()=>this.onSelectItem(item[0], index)}>{item[0]}</li>
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