import React, { useState } from "react";
import { addAppointment, clearAppointment } from "../../store/appointment/action";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import AppointmentList from "../../components/appointmentList/AppointmentList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import "./AppointmentsPage.css";
const AppointmentsPage = ({ data, onCreatePressed, onClearPressed }) => {
  /*
  Define state variables for 
  appointment info and duplicate check
  */

  const [appointment, setAppointment] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    let tmp = appointment;
    tmp.id = data.appointmentTotal + 1;
    onCreatePressed(tmp);
    setAppointment({});
    /*
    Add appointment info and clear data
    if the appointment name is not a duplicate
    */
  };

  const onChange = (e) => {
    setAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="content row">
      <section className="col-md-4">
        <h1>Add Appointment</h1>
        <hr />
        <AppointmentForm handleSubmit={handleSubmit} onChange={onChange} />
      </section>
      <section className="col-md-4">
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
});
const mapDispatchToProps = (dispatch) => ({
  onClearPressed: () => dispatch(clearAppointment()),
  onCreatePressed: (appointment) => dispatch(addAppointment(appointment)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);
