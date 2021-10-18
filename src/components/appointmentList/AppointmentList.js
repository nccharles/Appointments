import React from "react";
import { Appointment } from "../appointment/Appointment";
import { removeAppointment } from "../../store/appointment/action";
import { connect } from "react-redux";
import "./AppointmentList.css";
const ApppointmentList = ({ data, onRemovePressed }) => {
  const { appointments } = data;
  return (
    <div className="appointment-list-header">
      {appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          removeAppointment={onRemovePressed}
        />
      ))}
      {appointments.length === 0 && (
        <div className="empty-list">
          <label>
            📒 No any appointment added yet. Please fill the form to add an
            appointment...
          </label>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.appointment,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (appointment) => dispatch(removeAppointment(appointment)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ApppointmentList);
