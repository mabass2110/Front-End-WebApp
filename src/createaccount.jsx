import { useFormik } from "formik";
import * as Yup from 'yup';
import React,{useContext} from "react";
import AllDataContext from "./alldata_context";


const style = {
    color:"red"
}

function NameInput ({id,value,errors,placeholder,handleChange,touched,onBlur}) {
    return(
            <div class="col">
                <label htmlFor={id}>{placeholder}</label>
                <input 
                type="text"
                className="form-control"
                placeholder={placeholder} 
                aria-label="First name"
                id={id}
                value={value}
                onChange={handleChange}
                onBlur = {onBlur}
                />
                
                {{touched} && {errors} ? <div style={style}>{errors}</div> : null}
            </div>
    )
}


function Input( {type,placeholder,id,label,value,handleChange, errors,touched, onBlur} )  {
    return(
        <div className="form-floating mb-3" >
            <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            />
            <label for={id}>{label}</label> 
            {touched && {errors} ? <div style={style}>{errors}</div> : null}

        </div>
        
    )
}


const CreateAccount = () => {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      });


      const {setFirst,setLast,setMail,setAddr} = useContext(AllDataContext)


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            password: ''
        },validationSchema,

        onSubmit: values => {
            setFirst(values.firstName);
            setLast(values.lastName);
            setMail(values.email);
            setAddr(values.address)
            alert('Account successfully created')
        
        },
    });

    return (
        <div className="card text-center w-100 p-3" style={{ marginTop: '20px' }}>
            <div className="card-header">
                <h5 className="card-title">Create Account</h5>
            </div>
            <form className="card-body" onSubmit={formik.handleSubmit}>
                <div className="row">
                        <NameInput
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        value={formik.values.firstName}
                        handleChange={formik.handleChange}
                        label="First name"
                        errors={formik.errors.firstName}
                        touched={formik.touched.firstName}
                        onBlur={formik.handleBlur}
                        />
                    
                        <NameInput
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            value={formik.values.lastName}
                            handleChange={formik.handleChange}
                            label = "Last Name"
                            errors={formik.errors.lastName}
                            touched={formik.touched.lastName}
                            onBlur={formik.handleBlur}

                        />
                   </div>
                   <br/>

                    <div className="form-floating">
                        <Input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            value={formik.values.email}
                            handleChange={formik.handleChange}
                            label='Email'
                            errors={formik.errors.email}
                            touched={formik.touched.email}
                            onBlur={formik.handleBlur}
                        />

                        
                        <Input   
                            type="address"
                            id="address"
                            placeholder="Address"
                            value={formik.values.address}
                            handleChange={formik.handleChange}
                            label='Address'
                            errors={formik.errors.address}
                            touched={formik.touched.address}
                            onBlur={formik.handleBlur}
                        />
                        

                        
                        <Input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={formik.values.password}
                            handleChange={formik.handleChange}
                            label='Password'
                            errors={formik.errors.password}
                            touched={formik.touched.password}
                            onBlur={formik.handleBlur}
                        />
                </div>
                <button type="submit" className="btn btn-success">
                    Create Account
                </button>
            </form>
        </div>
        
    );
};

export default CreateAccount;