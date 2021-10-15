import React, { useState } from "react";
import { addContact, clearContact } from "../../store/contact/action";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import TileList from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";
import "./contactsPage.css"
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
    <div className="content row">
      <section className="col-md-4">
        <h1>Add Contact</h1>
        <ContactForm handleSubmit={handleSubmit} onChange={onChange} />
      </section>
      <section className="col-md-4">
        <div className="contacts-header">
        <h1>Contacts</h1>
        <Button variant="danger" onClick={() => onClearPressed()}>Clear All</Button>
        </div>
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
