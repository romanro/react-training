import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from './App';

const contacts = [
    {
        id:1,
        name: "Friends",
        type: "Group",
        contacts: [
            {id:2, name: "Udi", type: "Contact"},
            {id:3, name: "Tommy", type: "Contact"},
            {
                id:6,
                name: "Old Friends",
                type: "Group",
                contacts: [
                    {id:7, name: "Itay", type: "Contact"},
                ]
            },
        ]
    },
    {
        id:4,
        name: "Family",
        type: "Group",
        contacts: [
            {id:5, name: "Roni", type: "Contact"},
        ]
    },
    {id: 8, name: "Ori", type: "Contact"},
];

let _id = 100;

function _addContact(current, newContact, id) {
     current.forEach(item => {
        if (item.id === id) {
            item.contacts.push({
                id: _id + 1,
                name: newContact,
                type: "Contact",
            })
            _id = _id + 1;
            ReactDOM.render(<App contacts={contacts} addContact={addContact} />, document.getElementById('root'));

        } else if (item.contacts) {
            _addContact(item.contacts, newContact, id)
        }
    })
}

function addContact (newContact, id) {
    _addContact(contacts, newContact, id)
}

ReactDOM.render(<App contacts={contacts} addContact={addContact} />, document.getElementById('root'));
