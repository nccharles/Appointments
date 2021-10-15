import React from "react";
export const Tile = ({ contact,removeContact }) => {
  return (
    <div className="tile-container">
      <div>{contact.name}</div>
      <div>{contact.phone}</div>
      <div>{contact.email}</div>
      <button onClick={() => removeContact(contact)}>Remove</button>
    </div>
  );
};
