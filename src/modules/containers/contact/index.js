import React from 'react';
// import { Input, Button, Fa } from 'mbdbootstrap';
import { Field, reduxForm } from 'redux-form';

// const Contact = () => (
//     <div>
//         Contact Us!            
//     </div>
// )

// export default Contact;

const Contact = props => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <Field name="message" component="input" type="textarea" />
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
  )
}

Contact = reduxForm({
  form: 'contact'
})(Contact)

export default Contact
