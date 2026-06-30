import { useState } from "react";
import { v4 } from "uuid";

import inputs from "../constant/inputs";
import ContactList from "./ContactList";

function Contact() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please fill all the fields");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
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
      <div>
        {inputs.map((input) => (
          <input
            key={input.id}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            onChange={changeHandler}
            value={contact[input.name]}
          />
        ))}

        <button onClick={addHandler}>Add</button>
        <div>{alert && <p>{alert}</p>}</div>
      </div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Contact;
