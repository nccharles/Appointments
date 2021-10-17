import React, { useState } from "react";
import { removeContact } from "../../store/contact/action";
const ContactPicker = ({contacts,onChange}) => {
  const options = contacts.map((contact) => (
    <option value={contact.id}>{contact.name}</option>
  ));

  return <select onChange={onChange} name="contact">
    <option value={0}>Select...</option>
  {options}</select>;
};

export default ContactPicker;
