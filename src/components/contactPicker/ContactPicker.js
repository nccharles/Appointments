import React from "react";
const ContactPicker = ({ contacts, data, handleSelect, selectedOptions }) => {
  const options = contacts.map((contact) => (
    <option value={contact.id} key={contact.id}>{contact.name}</option>
  ));

  return (
    <select
      multiple={true}
      value={selectedOptions}
      onChange={handleSelect}
      name="contact"
    >
      <option value={0}>Select...</option>
      {options}
    </select>
  );
};

export default ContactPicker;
