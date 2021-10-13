import React,{useState} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm"
const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contact, setContact] = useState({})
  const [isAdded,setCheck]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact)
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 const onChange=e=>{
 setContact(prevState=>({...prevState,[e.target.name]:e.target.value}))
 }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} onChange={onChange}/>
      </section>
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

export default ContactsPage