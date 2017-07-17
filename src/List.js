import React, { Component } from 'react';
import Contact from './Contact';
import Group from './Group';

const renderSingle = function (item, index) {
    if (item.type === "Group"){
        return <Group group={item} key={item.id} />;
    }
    return <Contact item={item} key={item.id} />;
}

class List extends Component {
  render() {
    const { items } = this.props;
    const nodes = items.map(renderSingle)

    return (
      <div>
        {nodes}
      </div>
    );
  }
}

export default List;
