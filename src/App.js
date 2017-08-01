import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardHeader, CardBlock } from 'reactstrap';
import './styles/app.css';
import List from './List.js';

class App extends Component {
  render() {
    const { contacts } = this.props;
    console.log(this.props)
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

const connector = connect(function (state) {
  return {
    contacts: state.contacts
  }
})
export default connector(App);
