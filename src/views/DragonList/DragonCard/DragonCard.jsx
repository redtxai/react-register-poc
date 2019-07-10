import React, { Component } from 'react';
import './DragonCard.scss';

class DragonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      dragon: this.props.dragon
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked () {
    this.setState({ isEditing: !this.state.isEditing} );
  }

  render() {
    if (this.state.isEditing) {
      return (<section>
          <p><input type="checkbox" onChange={this.handleChecked} checked={this.state.isEditing} /></p>
          <p><input type="text" value={this.state.dragon.id}/></p>
          <p><input type="text" value={this.state.dragon.name}/></p>
          <p><input type="text" value={this.state.dragon.createdAt}/></p>
          <p><input type="text" value={this.state.dragon.type}/></p>
          <p><input type="text" value={this.state.dragon.histories}/></p>
        </section>
      )
    }
    return (
      <section>
        <p><input type="checkbox" onChange={this.handleChecked} checked={this.state.isEditing} /></p>
        <p>{this.props.dragon.id}</p>
        <p>{this.props.dragon.name}</p>
        <p>{this.props.dragon.createdAt}</p>
        <p>{this.props.dragon.type}</p>
        <p>{this.props.dragon.histories}</p>
      </section>
    )
  }
}

export default DragonCard;