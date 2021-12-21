
import * as React from "react";
import TextInput from './TextInputFormik'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty'
import FormContactMe from "./formCotactMe";
const ContactMe= () => {

    return (
        <section className="contactMe columns">
            <div className="column">
                <p className="contactMe-title">
                    Let's get started
                </p>
                <p className="contactMe-subtitle">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore in adipisci dolore fuga debitis quisquam aliquid quae. Libero, praesentium fugit alias hic nobis commodi veritatis exercitationem? Praesentium aspernatur amet reprehenderit!
                </p>
            </div>
            <div className="column">
            <FormContactMe />
            </div>
        </section>
    )
}

export default ContactMe;





