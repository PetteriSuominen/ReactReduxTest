import React from 'react'
import { Field, reduxForm } from "redux-form";

const Form = (props) => {
    return (
        <div>
            <form>
                <Field name="name" component="input" type="text"/>
            </form>
        </div>
    )
}

export default reduxForm({form: 'basicForm'})(Form);
