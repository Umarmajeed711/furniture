"use client";
import { useFormik } from "formik";
import "./account.css";
import { Image } from "react-bootstrap";
import * as yup from "yup";

export const page = () => {
  // login Validation
  const loginValidation = yup.object({
    userName: yup.string().required("Name is required"),
    password: yup.string().required("password is required"),

    // regax code for password validation
    // matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$" ,
    //  "Minimum eight and maximum 10 characters, at least one uppercase letter,
    //  one lowercase letter, one number and one special character")
  });

  // initailizes the loginFormik
  const loginFormik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    validationSchema: loginValidation,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      {/* Front Image */}
      <div className="d-flex justify-content-center align-items-center shop">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Image src="/ShopImages/mablelogo/Meubel House_Logos-05.png" alt="" />
          <p className="pageHeading">My Account</p>
          <p className="breadcrums">
            <span style={{ fontWeight: "500" }}>Home &gt;</span> My account
          </p>
        </div>
      </div>

      {/* login form */}

      <div className="container   ">
        <div className="row d-flex justify-content-center ">

          {/* login div */}
          <div className="col-12 p-5 col-md-6 row ">
            <form onSubmit={loginFormik.handleSubmit}>
              <p className="login">Login</p>

              {/* username div */}
              <div className="my-3 col-12  row">
                <label htmlFor="username">
                  <p className="username">Username or email address</p>
                  <input
                    type="text"
                    name="userName"
                    value={loginFormik.values.userName}
                    onChange={loginFormik.handleChange}
                    required
                    id="username"
                    className="inputField "
                  />
                </label>
                {loginFormik.touched.userName &&
                Boolean(loginFormik.errors.userName) ? (
                  <p style={{ color: "red", margin: "0" }}>
                    {loginFormik.touched.userName &&
                      loginFormik.errors.userName}
                  </p>
                ) : null}
              </div>

              {/* password div */}
              <div className="my-3 col-12  row">
                <label htmlFor="password">
                  <p className="username">Password</p>
                  <input
                    type="password"
                    name="password"
                    value={loginFormik.values.password}
                    onChange={loginFormik.handleChange}
                    required
                    id="password"
                    className="inputField"
                  />
                </label>
                {loginFormik.touched.password &&
                Boolean(loginFormik.errors.password) ? (
                  <p style={{ color: "red", margin: "0" }}>
                    {loginFormik.touched.password &&
                      loginFormik.errors.password}
                  </p>
                ) : null}
              </div>

              {/* remember me check box */}
              <p className="my-3">
                <input type="checkBox" /> Remember me
              </p>

              {/* login button */}
              <div
                className="d-flex gap-5 align-items-center "
                style={{ height: "50px" }}
              >
                <button type="submit" className="loginButton">
                  <span className="buttonText"> Login</span>
                </button>
                <p className="lostPassword">Lost your password?</p>
              </div>
            </form>
          </div>

          {/* Register div */}
          <div className="col-12 col-md-6 p-5  row">
            <form>
              <p className="login">Register</p>

              {/* email address div */}
              <div className="col-12  row">
                <label htmlFor="username">
                  <p className="username">email address</p>
                  <input
                    type="email"
                    required
                    id="username"
                    className="inputField"
                  />
                </label>
              </div>

              {/* policy detail div */}
              <div className="my-4">
                <p className="policyDetails">
                  A link to set a new password will be sent to your email
                  address.
                </p>
                <p className="policyDetails">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="privacyPolicy">privacy policy.</span>{" "}
                </p>
              </div>

              {/* register button */}
              <div>
                <button type="submit" className="loginButton">
                  <span className="buttonText">Register</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Properties div */}
      <div className="property d-flex justify-content-center ">
        <div className="row container ">
          <div className="col-12 col-sm-4">
            <p className="propertyHeading">Free Delivery</p>
            <p className="propertypara">
              For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>

          <div className="col-12 col-sm-4">
            <p className="propertyHeading">90 Days Return</p>
            <p className="propertypara">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          <div className="col-12 col-sm-4">
            <p className="propertyHeading">Secure Payment</p>
            <p className="propertypara">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
