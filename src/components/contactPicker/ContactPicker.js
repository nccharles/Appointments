import React from "react";
const ContactPicker = ({ contacts, data, handleSelect, selectedContacts }) => {
  const options = contacts.map((contact) => (
    <option value={contact.id} key={contact.id}>
      {contact.name}
    </option>
  ));

  return (
    <select
      multiple={true}
      value={selectedContacts}
      onChange={handleSelect}
      name="contact"
    >
      {options}
    </select>
  );
};

export default ContactPicker;
