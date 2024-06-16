import { useFormik } from "formik";

const CreateAccount = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            password: ''
        },
        onSubmit: values => {
            alert(`The account was successfully created`);
            // You can handle form submission logic here
        },
    });

    return (
        <div className="card text-center w-100 p-3">
            <div className="card-header">
                <h5 className="card-title">Create Account</h5>
            </div>
            <form className="card-body" onSubmit={formik.handleSubmit}>
                <div className="row gx-5 align-items-center form-floating">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                
                    </div>
                </div>

                <br />

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="email">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="address">Address</label>
                </div>

                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <br />
                <button type="submit" className="btn btn-success">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default CreateAccount;
