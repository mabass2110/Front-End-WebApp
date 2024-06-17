const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } 
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } 
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.address){
        errors.address = 'Please insert a valid address'
    }
    



    if(!values.password){
        errors.password = 'Required'
    }
    else if (values.password.length < 8) {
        errors.password = 'Your password should contain more than 8 characters'

    }
  
    return errors;
  };


  export default validate