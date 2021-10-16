import React, { useState } from "react";
import { Contact } from "../contact/Contact";
import { removeContact } from "../../store/contact/action";
import { connect } from "react-redux";

const ContactPicker = ({ data}, props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { contacts } = data;
  const options = contacts.map((contact) => (
    <option value={contact}>{contact.name}</option>
  ));

  return <select onSelect={props.onChange} name="contact">{options}</select>;
};
const mapStateToProps = (state) => ({
  data: state.contact,
});
export default connect(mapStateToProps, null)(ContactPicker);
