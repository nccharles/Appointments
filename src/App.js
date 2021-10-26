import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import "./App.css";
import ColorSchemeToggle from './components/ColorScheme/ColorSchemeToggle';
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <div className="nav-header">
          <NavLink
            to={ROUTES.CONTACTS}
            className="link"
            activeClassName="active"
          >
            Contacts
          </NavLink>
          <NavLink
            to={ROUTES.APPOINTMENTS}
            className="link"
            activeClassName="active"
          >
            Appointments
          </NavLink>
          <ColorSchemeToggle />
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
