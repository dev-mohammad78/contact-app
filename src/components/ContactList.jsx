import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteHandler }) {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
}

export default ContactList;
