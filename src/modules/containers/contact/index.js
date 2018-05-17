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
        // <div>
        //     <form onSubmit={handleSubmit}>
        //     <div>
        //         <label htmlFor="name">Name</label>
        //         <Field name="name" component="input" type="text" />
        //     </div>
        //     <div>
        //         <label htmlFor="email">Email</label>
        //         <Field name="email" component="input" type="email" />
        //     </div>
        //     <div>
        //         <label htmlFor="message">Message</label>
        //         <Field name="message" component="input" type="textarea" />
        //     </div>
        //     <button type="submit">Submit</button>
        //     </form>
        // </div>
        <form id="contact-form" method="post" action="contact.php" role="form">
            <div className="messages"></div>
                <div className="controls">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_name">First Name *</label>
                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your first name" required="required" data-error="Firstname is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_lastname">Last Name *</label>
                                <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your last name" required="required" data-error="Lastname is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email address" required="required" data-error="Valid email is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_phone">Phone</label>
                                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone number" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name="message" className="form-control" placeholder="Please type your message here" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="submit" className="btn btn-success btn-send" value="Send message" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-muted"><strong>*</strong> These fields are required.</p>
                        </div>
                    </div>
                </div>
            </form>

  )
}

Contact = reduxForm({
  form: 'contact'
})(Contact)

export default Contact
