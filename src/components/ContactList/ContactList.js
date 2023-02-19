import React from "react";
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
     <ul className={css.ContactList}>  
            <p className={css.ContactList_find}>Total contacts: {contacts.length}</p>
            {contacts.map(({id,name,number}) => (
            <li key={id} className={css.ContactList__item}>
                <p className={css.ContactList__text}>{name}: {number}</p>
                <button className={css.ContactList__btn} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
        </ul>
)
 

export default ContactList;


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func,
};