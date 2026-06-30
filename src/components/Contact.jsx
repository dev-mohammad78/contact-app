import { useState } from "react";

import inputs from "../constant/inputs";

function Contact() {
  const [alert, setAlert] = useState("");
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

      <div>{alert && <p>{alert}</p>}</div>
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default Contact;
