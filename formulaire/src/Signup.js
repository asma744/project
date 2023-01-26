import React from "react";
import { useFormik } from "formik";
import * as Yap from "yup" 

export default function Signup(){
 

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email:""
        },
        validationSchema: Yap.object({
            firstName: Yap.string()
            .max(6, "Must be 15 char or less ")
            .required("Required"),

            lastName: Yap.string()
            .max(20, "Must be 15 char or less ")
            .required("Required"),

            email: Yap.string()
            .email("Invalid email ")
            .required("Required"),


        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    console.log(formik.errors);
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <input id="firstName" 
                name="firstName"
                 type="text"
                placeholder="First Name "
                onChange={formik.handleChange} 
                value={formik.values.firstName} />
                {formik.errors.firstName ? <p> {formik.errors.firstName}</p>:null}


            </div>


            <div className="input-container">
                <input id="lastName" 
                name="lastName"
                 type="text"
                placeholder="Last Name "
                onChange={formik.handleChange} 
                value={formik.values.lastName} />
                 {formik.errors.lastName ? <p> {formik.errors.lastName}</p>:null}

            </div>


            <div className="input-container">
                <input id="email" 
                name="email"
                 type="email"
                placeholder="Email "
                onChange={formik.handleChange} 
                value={formik.values.email} />
                 {formik.errors.email ? <p> {formik.errors.email}</p>:null}

            </div>

<button type="submit">Submit 

</button>

        </form>
    )
}