import { useState, useEffect } from 'react';

function SelectedContact ({selectedContactId, setSelectedContactId}) {
    const [ contact, setContact ] = useState(null);

    useEffect(() => {
        async function fetchContact () {
            try {
                const rsp = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await rsp.json();
               console.log("Contact:", data);
               setContact(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchContact();

    }, []);


    return ( contact && (
        <>
        <table>
            <thead>
                <tr>
                <th colSpan="2">{contact.name} - {contact.name} </th>
                </tr>

            </thead>

           <tbody>
               <tr>
                <th>E-Mail</th>
                <td>{contact.email}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{contact.phone}</td>
            </tr>
            <tr>
                <th>Website</th>
                <td>{contact.website}</td>
            </tr>
            <tr>
                <th>Company</th>
                <td>{contact.company.name}</td>
            </tr>

            </tbody>
        </table>
        <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
        </>
    )
    );
}

export default SelectedContact;