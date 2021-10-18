import React from "react";
import "./Appointment.css";
import { Button } from "react-bootstrap";
export const Appointment = ({ appointment, removeAppointment }) => {
  const { contacts } = appointment;
  let contactsList = contacts.map((c) => (
    <label className="attendee">
      👤{c.name} | {c.email}
    </label>
  ));
  return (
    <div className="appointment-container">
      <div className="section">
        <h2>🔖 {appointment.title}</h2>
        {contactsList}
        <h5>
          🗓️ {appointment.date} | 🕑{appointment.time}
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
