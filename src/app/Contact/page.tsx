"use client";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import "./contact.css";
// import * as yup from "yup";
import { Image } from "react-bootstrap";
// import { useFormik } from "formik";

export const page = () => {
  // contact Validation
  // const contactValidation = yup.object({
  //   name: yup.string().required("name is required"),
  //   email: yup
  //     .string()
  //     .required("email is required")
  //     .email("enter a valid email address"),
  // });

  {
    /* // initailizes the ContactFormik */
  }
  // const contactFormik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //   },
  //   validationSchema: contactValidation,

  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <div>
      {/* Front Image */}
      <div className="d-flex justify-content-center align-items-center shop">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Image src="/ShopImages/mablelogo/Meubel House_Logos-05.png" alt="" />
          <p className="pageHeading">Contact</p>
          <p className="breadcrums">
            <span style={{ fontWeight: "500" }}>Home &gt;</span> contact
          </p>
        </div>
      </div>

      <div className="container p-5 mt-5">
        <div style={{ textAlign: "center" }}>
          <h3>Get In touch with Us</h3>
          <p className="toppicspara">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="container  ">
          {/* Contact Detail */}
          <div className="row ">
            {/* address and phone details */}
            {/* py-sm-5 px-sm-4  */}
            <div className="col-md-6 col-12  py-3 d-flex flex-column align-items-center ">
              {/* address */}
              <div className="d-flex col-12 col-sm-6 gap-3">
                <div>
                  <HiLocationMarker className="icons" />
                </div>

                <div>
                  <p className="price">Address</p>
                  <p className="title">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* phone */}
              <div className="d-flex col-12 col-sm-6 gap-3">
                <div>
                  <FaPhone className="icons" />
                </div>

                <div>
                  <p className="price">Phone</p>
                  <p className="title">
                    Mobile: +(84) 546-6789
                    <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time*/}
              <div className="d-flex col-12 col-sm-6 gap-3">
                <div>
                  <GoClockFill className="icons" />
                </div>

                <div>
                  <p className="price">Working Time</p>
                  <p className="title">
                    Monday-Friday: 9:00 - 22:00
                    <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* contact Details form*/}
            <div className="col-md-6 col-12">
            {/* onSubmit={contactFormik.handleSubmit} */}
              <form >
                {/* name div */}
                <div className="my-3 col-12 row">
                  <label htmlFor="companyName">
                    <p className="username">Your name</p>
                    <input
                      type="text"
                      name="name"
                      // value={contactFormik.values.name}
                      // onChange={contactFormik.handleChange}
                      placeholder="Abc"
                      id="companyName"
                      className="inputField "
                    />
                  </label>
                  {/* {contactFormik.touched.name &&
                  Boolean(contactFormik.errors.name) ? (
                    <p className="requiredError">
                      {contactFormik.touched.name && contactFormik.errors.name}
                    </p>
                  ) : null} */}
                </div>

                {/* Email address */}
                <div className="my-3 col-12 row">
                  <label htmlFor="emailAddress">
                    <p className="username">Email address</p>
                    <input
                      type="email"
                      placeholder="Abc@def.com"
                      id="emailAddress"
                      className="inputField"
                      name="email"
                      // value={contactFormik.values.email}
                      // onChange={contactFormik.handleChange}
                    />
                  </label>
                  {/* {contactFormik.touched.email &&
                  Boolean(contactFormik.errors.email) ? (
                    <p className="requiredError">
                      {contactFormik.touched.email &&
                        contactFormik.errors.email}
                    </p>
                  ) : null} */}
                </div>

                {/* Subject */}
                <div className="my-3 col-12 row">
                  <label htmlFor="emailAddress">
                    <p className="username">Subject</p>
                    <input
                      type="text"
                      id="emailAddress"
                      className="inputField"
                      placeholder="This is on optional"
                    />
                  </label>
                </div>

                {/* Message */}
                <div className="my-3 col-12 row">
                  <label htmlFor="message">
                    <p className="username">Message</p>
                    <textarea
                      name="comment"
                      placeholder="Hi! I'd like to ask about"
                      id="message"
                      className="inputField "
                    ></textarea>
                  </label>
                </div>

                {/* register button */}
                <div className="mt-4">
                  <button type="submit" className="loginButton">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* // */}
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
