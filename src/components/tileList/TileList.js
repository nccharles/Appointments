import React from "react";
import { Tile } from "../tile/Tile";
import { removeContact } from "../../store/contact/action";
import { connect } from 'react-redux';
import "./TileList.css"
const TileList = ({ data, onRemovePressed }) => {
  const { contacts } = data;
  return (
    <div className="tile-list-header">
      {contacts.map((contact) => (
        <Tile contact={contact} removeContact={onRemovePressed} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.contact,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (contact) => dispatch(removeContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TileList);
