import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';
import SelectedContact from './SelectedContact';

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

function ContactList ({setSelectedContactId}) {
    const [contacts, setContacts] = useState(dummyContacts);

    console.log(contacts);

    useEffect(() => {
        // fetch the contacts
        // update contact state to reflect fetched data
    
    async function fetchContacts () {
        try {
            const rsp = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
            const data = await rsp.json();
            //console.log("Contacts:", info);
            setContacts(data);

        } catch (err) {
            console.error(err);
        }
    }
    
    fetchContacts();
}, []);

    // console.log(contacts);

    return (
        <>
        
        
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>

            <tbody>
             <tr>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Phone</th>
             </tr>

            
              {
                contacts.map((contact, index) => {
                    return (
                        <ContactRow key={index} contact={contact} setSelectedContactId={setSelectedContactId} />
                    )
                })
              }
            </tbody>
        </table>
        </>
    )

}

export default ContactList;