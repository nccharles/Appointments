import React from "react";
import ContactPicker from '../contactPicker/ContactPicker'
export const AppointmentForm = ({
  onChange,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label>Title</label>
      <input type="text" name="title" onChange={onChange}/>
      </div>
      <div className="form-group">
      <label>Contact</label>
      <ContactPicker name="contact"  onChange={onChange}/>
      </div>
      <div className="form-group">
      <label>Date</label>
      <input type="date" name="date" onChange={onChange}/>
      </div>
      <div className="form-group">
      <label>Time</label>
      <input type="time" name="time" onChange={onChange}/>
      </div>
      <input type="submit" value="ADD"/>
    </form>
  );
};
