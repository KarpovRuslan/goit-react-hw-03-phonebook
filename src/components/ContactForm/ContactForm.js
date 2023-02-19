import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";


class ContactForm extends Component {
    state = {
    name: '',
    number: ''
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleInputChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value })
        console.log(evt)
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);
        console.log(evt)
        this.reset();
        
    };
    
    reset = () => {
        this.setState({ name: '', number: '' })
    };

    render() {
        
        return (
            <>
                <form onSubmit={this.handleSubmit} className={css.ContactForm}>
                    <label htmlFor="this.nameInputId" className={css.ContactForm__name}>Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        id={this.nameInputId}
                        className={css.ContactForm__input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    
                <label htmlFor="numberInputId" className={css.ContactForm__name}>Number</label>
                <input
                        type="tel"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        name="number"
                        id={this.numberInputId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    <button type="submit" className={css.ContactForm__btn}>Add contact</button>
                </form>
                

            </>
            
        );
    }
};

export default ContactForm;

ContactForm.propTypes = {
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};