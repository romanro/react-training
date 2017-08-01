import React, { Component } from 'react';
import List from'./List.js';
import Contact from'./Contact.js';
import Toolbox from './Toolbox.js';

import './styles/group.css';


class Group extends Component {
  constructor(opts) {
      super(opts)
      this.state = {
          showContacts: false
      }
  }

  handleClick () {
      this.setState({
          showContacts: !this.state.showContacts
      })
  }
  render() {
    const { group } = this.props;
    const { showContacts } = this.state;
    return (
      <div>
        <div onClick={this.handleClick.bind(this)} className='group-header' ><Contact item={group} /></div>
        {showContacts ? <div><List items={group.contacts} /><Toolbox groupId={group.id} /></div> : null}
        

      </div>
    );
  }
}

export default Group;
