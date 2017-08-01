import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './styles/toolbox.css';

class Toolbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact:''
        }
    }

    static contextTypes = {
        addContact: PropTypes.func
    }

    addContact(){
        this.context.addContact(this.state.contact, this.props.groupId);
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
                </Form>
            </div>
        )
    }

}

export default Toolbox;