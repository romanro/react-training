import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from './App';
import store from './Store.js'


let _id = 100;

// reducer
function _addContact(current, newContact, id) {
     current.forEach(item => {
        if (item.id === id) {
            item.contacts.push({
                id: _id + 1,
                name: newContact,
                type: "Contact",
            })
            _id = _id + 1;
            ReactDOM.render(<App addContact={addContact} />, document.getElementById('root'));

        } else if (item.contacts) {
            _addContact(item.contacts, newContact, id)
        }
    })
}

// dispatch(action); action = { type: 'ADD_CONTACT', payload: { name, id }}
function addContact (newContact, id) {
    _addContact([], newContact, id)
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

