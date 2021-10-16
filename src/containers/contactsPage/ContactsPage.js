import React, { useState } from "react";
import { addContact, clearContact } from "../../store/contact/action";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import ContactList from "../../components/contactList/ContactList";
import { ContactForm } from "../../components/contactForm/ContactForm";
import "./contactsPage.css";
const ContactsPage = ({ contacts, onCreatePressed, onClearPressed }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [contact, setContact] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let tmp = contact;
    if (!contact.name || !contact.phone || !contact.email)
      return alert("Please add contact");
    let index = contacts.contacts.find(
      (c) =>
        c.phone === contact.phone ||
        c.email === contact.email ||
        c.name === contact.name
    );
    if (index) return alert("Already Exist");
    tmp.id = contacts.contactTotal + 1;
    onCreatePressed(tmp);
    setContact({});
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
        <hr />
        <ContactForm handleSubmit={handleSubmit} onChange={onChange} />
      </section>
      <section className="col-md-4">
        <div className="contacts-header">
          <h1>Contacts</h1>
          <Button variant="danger" onClick={() => onClearPressed()}>
            Clear All
          </Button>
        </div>
        <hr />
        <ContactList />
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
