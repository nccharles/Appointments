import React from "react";

export const ContactForm = ({
  onChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>Name</label>
      <input type="text" name="name" onChange={onChange}/>
      </div>
      <div>
      <label>Phone</label>
      <input type="tel" name="phone" onChange={onChange}/>
      </div>
      <div>
      <label>Email</label>
      <input type="email" name="email" onChange={onChange}/>
      </div>
      <input type="submit" value="ADD"/>
    </form>
  );
};
