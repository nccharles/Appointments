import React from "react";
import { Contact } from "../contact/Contact";
import { removeContact } from "../../store/contact/action";
import { connect } from 'react-redux';
import "./ContactList.css"
const ContactList = ({ data, onRemovePressed }) => {
  const { contacts } = data;
  return (
    <div className="contact-list-header">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} removeContact={onRemovePressed} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.contact,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (contact) => dispatch(removeContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
