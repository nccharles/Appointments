import React from "react";
import "./Appointment.css"
import { Button } from 'react-bootstrap';
export const Appointment = ({ appointment,removeAppointment }) => {
    const {name,email,phone} = appointment.contact
  return (
    <div className="appointment-container">
      <div className="section">
      <h2>{appointment.title}</h2>
      <h4>{name}</h4>
      <h5>{appointment.date} | {appointment.time}</h5>
      </div>
      <Button variant="danger" className="col-md-1" onClick={() => removeAppointment(appointment)}>X</Button>
    </div>
  );
};
