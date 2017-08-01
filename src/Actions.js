export const ADD_CONTACT =  (contact, groupId) => ({
    type: 'ADD_CONTACT',
    payload: {
        name: contact,
        id: groupId
    }
})

export const RESET_CONTACTS = {
type: 'RESET_CONTACTS'
}