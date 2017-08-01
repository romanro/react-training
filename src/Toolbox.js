import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './styles/toolbox.css';
import { ADD_CONTACT, RESET_CONTACTS } from './Actions'

class Toolbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact:''
        }
    }

    addContact(){
        this.props.dispatch(ADD_CONTACT(this.state.contact, this.props.groupId))
    }

    resetContacts() {
        this.props.dispatch(RESET_CONTACTS)
    }

    onContactInputChange(e){
        this.setState({
            contact:e.target.value
        })
    }

    render() {
        return (
            <div className='toolbox'>
                <Form inline>
                    <FormGroup>
                        <Input size="sm" type="text" value={this.state.contact} onChange={this.onContactInputChange.bind(this)} placeholder="New contact" />
                    </FormGroup>
                    <Button size="sm" onClick={this.addContact.bind(this)}>Add Conatct</Button>
                    <Button size="sm" onClick={this.resetContacts.bind(this)}>Reset</Button>

                </Form>
            </div>
        )
    }

}

const connector = connect()
export default connector(Toolbox);