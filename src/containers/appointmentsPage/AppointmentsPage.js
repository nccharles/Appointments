import React, { useState } from "react";
import {
  addAppointment,
  clearAppointment,
} from "../../store/appointment/action";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import AppointmentList from "../../components/appointmentList/AppointmentList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import "./AppointmentsPage.css";
const AppointmentsPage = ({
  data,
  contacts,
  onCreatePressed,
  onClearPressed,
}) => {
  /*
  Define state variables for 
  appointment info and duplicate check
  */

  const [appointment, setAppointment] = useState({});
  const [selectedContacts, setContact] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointment.title || !appointment.date || !appointment.time)
      return alert("Please fill all required fields");
    e.target.reset();
    let tmp = appointment;
    tmp.id = data.appointmentTotal + 1;
    tmp.contacts = selectedContacts;
    onCreatePressed(tmp);
    setAppointment({});
    setContact([]);
  };

  const onChange = (e) => {
    setAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSelect = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    if (selectedContacts.includes(value[0])) {
      return alert("Already Selected!!!");
    }
    setContact((op) => [...op, value[0]]);
  };
  return (
    <div className="content">
      <section>
        <h1>Add Appointment</h1>
        <hr />
        <AppointmentForm
          contacts={contacts}
          handleSubmit={handleSubmit}
          onChange={onChange}
          handleSelect={handleSelect}
          selectedContacts={selectedContacts}
        />
      </section>
      <section>
        <div className="appointments-header">
          <h1>Appointments</h1>
          <Button variant="danger" onClick={() => onClearPressed()}>
            Clear All
          </Button>
        </div>
        <hr />
        <AppointmentList />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.appointment,
  contacts: state.contact.contacts,
});
const mapDispatchToProps = (dispatch) => ({
  onClearPressed: () => dispatch(clearAppointment()),
  onCreatePressed: (appointment) => dispatch(addAppointment(appointment)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);
