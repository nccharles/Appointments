import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";
import { NavLink } from "react-router-dom";
import "./AppointmentForm.css";
export const AppointmentForm = ({
  onChange,
  contacts,
  handleSubmit,
  handleSelect,
  selectedOptions,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" name="title" onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Contact</label>{" "}
        {contacts.length === 0 && (
          <NavLink to="/contacts" className="link">
            🆕 Add contact
          </NavLink>
        )}
        <ContactPicker
          name="contact"
          handleSelect={handleSelect}
          selectedOptions={selectedOptions}
          contacts={contacts}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input type="date" name="date" onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input type="time" name="time" onChange={onChange} />
      </div>
      <input type="submit" value="ADD" />
    </form>
  );
};
