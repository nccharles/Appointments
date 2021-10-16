import React from "react";
import { Contact } from "../contact/Contact";
import { removeContact } from "../../store/contact/action";
import { connect } from "react-redux";
const ContactPicker = ({ data}) => {
  const { contacts } = data;
  const options = [
    contacts.map((contact) => ({
      value: contact.email,
      label: `${contact.name}(${contact.email})`,
    })),
  ];

  return (
    <>
      <select options={options} />
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.contact,
});
export default connect(mapStateToProps)(ContactPicker);
