import { useState } from "react";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    console.log(contacts);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        onChange={changeHandler}
        value={contact.name}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Enter your lastName"
        onChange={changeHandler}
        value={contact.lastName}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={changeHandler}
        value={contact.email}
      />
      <input
        type="number"
        name="phone"
        placeholder="Enter your phone"
        onChange={changeHandler}
        value={contact.phone}
      />
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default Contact;
