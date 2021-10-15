import React, { useState, useEffect } from "react";
import { addContact, clearContact } from "../../store/contact/action";
import { connect } from "react-redux";
import TileList from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";
const ContactsPage = ({ contacts, onCreatePressed, onClearPressed }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [contact, setContact] = useState({});
  const [isAdded, setCheck] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let tmp = contact;
    tmp.id = contacts.contactTotal + 1;
    onCreatePressed(tmp);
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  const onChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} onChange={onChange} />
      </section>
      <section>
        <h2>Contacts</h2>
        <button onClick={() => onClearPressed()}>Clear</button>
        <TileList />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contact,
});
const mapDispatchToProps = (dispatch) => ({
  onClearPressed: () => dispatch(clearContact()),
  onCreatePressed: (contact) => dispatch(addContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
