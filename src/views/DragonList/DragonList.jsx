import React, { Component } from 'react';
import './DragonList.scss';

import DragonCard from './DragonCard';

class DragonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragonCardList: [
        {
          "id": "146",
          "createdAt": "08/07/2019 23:11:36",
          "name": "Drokaa",
          "type": "Fire",
          "histories": []
        },
        {
          "id": "147",
          "createdAt": "08/07/2019 23:11:49",
          "name": "Druuk",
          "type": "Ice",
          "histories": []
        }
      ]
    };
  }

  render() {
    return (
      <article>
        {this.state.dragonCardList.map((dragon) =>
          <DragonCard key={dragon.id} value={dragon}/>
        )}
      </article>
    )
  }
}

export default DragonList;