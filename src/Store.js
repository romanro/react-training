import { createStore } from 'redux';

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

const initialState = { contacts: contacts };

let _id = 100;

function addContact(current, newContact, id) {
     current.forEach(item => {
        if (item.id === id) {
            item.contacts.push({
                id: _id + 1,
                name: newContact,
                type: "Contact",
            })
            _id = _id + 1;

        } else if (item.contacts) {
            addContact(item.contacts, newContact, id)
        }
    })
}

// store takes return value from this function and replaces the old state
const reducer = function (oldState = initialState, action) {
    switch (action.type) {
        case 'RESET_CONTACTS':
            return initialState;
        case 'ADD_CONTACT':
            // never mutate state!!!!!! 
            const newState = {};
            newState.contacts = [...initialState.contacts];
            addContact(newState.contacts, action.payload.name, action.payload.id)
            return newState
        default:
            return oldState;
    }
}

export default createStore(reducer);
