const validation = (values) => {
    let errors = {}
    if(!values.mail){
        errors.mail = "Name Required"
    }
    else if (values.mail.length < 5){
        errors.mail = "Name must more than 5 char"
    }

    if(!values.pass){
        errors.pass = "Password Required"
    }
    else if (values.pass.length < 9){
        errors.pass = "Password must more than 9 char"
    }

    return errors;


}
export default validation;