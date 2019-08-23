import React, { Component } from 'react';

class Input extends Component {
  render() {
    const type = this.props.type;
    return (
      <span>
          {type === "input" ? (
            <input value={this.props.value} onChange={this.props.updateval} className="form-control"/>
            ) : (
            <textarea onChange={this.props.updateval} className="form-control" rows="3">{this.props.value}</textarea>
          )}
     </span>
    );
  }
}

export default Input;