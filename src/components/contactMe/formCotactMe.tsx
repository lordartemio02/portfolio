import * as React from "react";
import TextInput from './TextInputFormik'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty'
import emailjs from 'emailjs-com';

function FormContactMe() {

  return (
    <div>
      <Formik
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(3, 'Name must be at least 3 characters long.')
            .required('Title is required.'),
          email: Yup.string()
            .email('Email no correct')
            .required('Title is required.'),
          message: Yup.string()
            .min(3, 'Message must be at least 3 characters long.')
            .required('Message is required.'),
        })}
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}

        onSubmit={
          (values, actions) => {
          // this could also easily use props or other
          // local state to alter the behavior if needed
          // this.props.sendValuesToServer(values)
          emailjs.send("gmail","template_oyy2jf7",{
            name: values.name,
            email: values.email,
            message: values.message,
          },"user_tzsXRQ7SCSKmI5Rcs3Zml");
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 1000)
        }
        }

        render={({ values, touched, errors, dirty, isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="name"
              label="Name"
              component={TextInput}
            />
            <Field
              type="text"
              name="email"
              label="Email"
              component={TextInput}
            />
            <Field
              type="text"
              name="message"
              label="Message"
              rows="5"
              component={TextInput}
            />
            <button
              type="submit"
              className="submitForm"
            // disabled={isSubmitting || !isEmpty(errors) || !dirty}
            >
              Submit message
            </button>
          </Form>
        )}
      />
    </div>
  )
}

export default FormContactMe;