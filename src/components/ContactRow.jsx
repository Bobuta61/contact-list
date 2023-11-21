function ContactRow ({contact, setSelectedContactId}) {
    return (
        <tr onClick={() => {
            console.log(contact.id)
            setSelectedContactId(contact.id);

        }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )

}

export default ContactRow;