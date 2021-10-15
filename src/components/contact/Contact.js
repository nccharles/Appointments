import React from "react";
import "./Contact.css"
import { Button } from 'react-bootstrap';
export const Contact = ({ contact,removeContact }) => {
  return (
    <div className="contact-container">
      <div className="section">
      <h2>{contact.name}</h2>
      <h4>{contact.email}</h4>
      <h5>{contact.phone}</h5>
      </div>
      <Button variant="danger" className="col-md-1" onClick={() => removeContact(contact)}>X</Button>
    </div>
  );
};
