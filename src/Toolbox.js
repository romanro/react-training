import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './styles/toolbox.css';

class Toolbox extends Component {
    render() {
        return (
            <div className='toolbox'>
                <Form inline>
                    <FormGroup>
                        <Input type="text" name="email" id="exampleEmail" placeholder="New contact" />
                    </FormGroup>
                    <Button>Add Conatct</Button>
                </Form>
            </div>
        )
    }

}


export default Toolbox;