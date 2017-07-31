import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './styles/toolbox.css';

class Toolbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
        contact:''
        }
    }

    addContact(){
        console.log("Add conatct");
    }

    onContactInputChange(e){
        console.log("input changed " + e.target.value)
    }

    render() {
        return (
            <div className='toolbox'>
                <Form inline>
                    <FormGroup>
                        <Input size="sm" type="text" onChange={this.onContactInputChange} placeholder="New contact" />
                    </FormGroup>
                    <Button size="sm" onClick={this.addContact}>Add Conatct</Button>
                </Form>
            </div>
        )
    }

}


export default Toolbox;