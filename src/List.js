import React, { Component } from 'react';
import Contact from './Contact';
import Group from './Group';
import './styles/list.css'

const renderSingle = function (item, index) {
  if (item.type === "Group") {

    return <Group group={item} key={item.id} />;
  }
  return <Contact item={item} key={item.id} />;
}


class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props
    }
  }


  render() {
    const { items } = this.state.items;
    const nodes = items.map(renderSingle);

   // console.log(items)

    return (
      <div className='list'>
        {nodes}
      </div>
    );
  }
}

export default List;
