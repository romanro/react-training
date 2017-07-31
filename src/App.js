import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBlock } from 'reactstrap';
import './styles/app.css';
import List from './List.js';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props
    }
  }


  render() {
    const { contacts } = this.state.contacts;
    console.log(contacts);


    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Card className='app-wrapper'>
              <CardHeader tag="h3">Contact Tree</CardHeader>
              <CardBlock>
                <List items={contacts} />
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
