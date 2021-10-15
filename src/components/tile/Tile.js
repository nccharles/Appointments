import React from "react";
import "./Tile.css"
import { Button } from 'react-bootstrap';
export const Tile = ({ contact,removeContact }) => {
  return (
    <div className="tile-container row">
      <section>
      <h2>{contact.name}</h2>
      <h4>{contact.phone}</h4>
      <h5>{contact.email}</h5>
      </section>
      <Button variant="danger" className="col-md-1" onClick={() => removeContact(contact)}>X</Button>
    </div>
  );
};
