import React from "react"
import { Formik } from "formik"

const Signup = () => {

  const usersubmit = (formdata) => {
    console.Console.log(formdata);
  }
  return (
    <div style={{ backgroundColor: "#eee", height: "100vh" }}>
      <div className="col-md-6 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={usersubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center">Signup Here</h3>

                  <label>Name</label>
                  <input className="form-control mb-3" name="username" onChange={handleChange} value={values.username} />

                  <label>Email</label>
                  <input type="email" className="form-control mb-3" name="email" onChange={handleChange} value={values.email} />

                  <label>Password</label>
                  <input type="password" className="form-control mb-3" name="password" onChange={handleChange} value={values.password} />

                  <button type="submit" className="btn btn-primary mt-5">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup