import React from "react";
import "./Appointment.css";
import { Button } from "react-bootstrap";
export const Appointment = ({ appointment, removeAppointment }) => {
  const { contacts } = appointment;
  let contactsList = "";
  for (var i = 0; i < contacts.length; i++) {
    contactsList += contacts[i].name + ", ";
  }
  contactsList = contactsList.slice(0, -2); //remove the trailing space and comma

  return (
    <div className="appointment-container">
      <div className="section">
        <h2>{appointment.title}</h2>
        <h4>{contactsList}</h4>
        <h5>
          {appointment.date} | {appointment.time}
        </h5>
      </div>
      <Button
        variant="danger"
        className="col-md-1"
        onClick={() => removeAppointment(appointment)}
      >
        X
      </Button>
    </div>
  );
};
