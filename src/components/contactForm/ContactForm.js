import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>Name</label>
      <input type="text" name={name} onChange={setName}/>
      </div>
      <div>
      <label>Phone</label>
      <input type="tel" name={phone} onChange={setPhone}/>
      </div>
      <div>
      <label>Email</label>
      <input type="email" name={email} onChange={setEmail}/>
      </div>
    </form>
  );
};
