import React from "react";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../elements/input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  fname: "",
  lname: "",
  companyname: "",
  street1: "",
  street2: "",
  city: "",
  country: "",
  phone: "",
  passcode: "",
  email: "",
  message: "",
};

const onSubmit = (values, submitProps) => {
  console.log("Checkout data", values);
  toast.success("Checkout Data", {
    position: "top-center",
  });
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};
const validationSchema = Yup.object({
  fname: Yup.string()
    .min(3, "First Name must be three or more characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("First Name is required"),
  lname: Yup.string()
    .min(3, "Last Name must be three or more characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Last Name is required"),
  country: Yup.string().required("Country is required"),
  street1: Yup.string().required("Street 1 is required"),
  city: Yup.string().required("City 1 is required"),
  passcode: Yup.string().required("Postcode 1 is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),
  phone: Yup.string()
    .matches(/^[0-9\s]+$/, "Only number are allowed for this field ")
    .required("number is required"),
  message: Yup.string().required("message is required"),
});

const checkoutForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  return (
    <div className="checkout-form">
      <Container>
        <div className="p-3 coupon">
          <p className="mb-0 c">
            <FaInfoCircle className="icon" />
            Have you coupon?
            <Link href="">Click here to enter your code</Link>
          </p>
        </div>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={7} xs={12} sm={12}>
              <div className="billing-details">
                <h2>Billing details</h2>
                <hr />
                <br />
                <Row>
                  <Col md={6} sm={12}>
                    <Input
                      Label="First Name"
                      type="text"
                      name="fname"
                      required="*"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fname}
                    />
                    {formik.touched.fname && formik.errors.fname ? (
                      <div className="error">{formik.errors.fname}</div>
                    ) : null}
                  </Col>
                  <Col md={6} sm={12}>
                    <Input
                      Label="Last Name"
                      type="text"
                      name="lname"
                      required="*"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lname}
                    />
                    {formik.touched.lname && formik.errors.lname ? (
                      <div className="error">{formik.errors.lname}</div>
                    ) : null}
                  </Col>
                </Row>
                <Input
                  Label="Company Name (Optional)"
                  type="text"
                  name="companyname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyname}
                />
                <Input
                  Label="Country / Region "
                  type="text"
                  name="country"
                  required="*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className="error">{formik.errors.country}</div>
                ) : null}
                <Input
                  Label="Street address"
                  type="text"
                  name="street1"
                  placeholder="House number and street name"
                  required="*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street1}
                />
                {formik.touched.street1 && formik.errors.street1 ? (
                  <div className="error">{formik.errors.street1}</div>
                ) : null}
                <Input
                  type="text"
                  name="street2"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street2}
                />
                <Input
                  Label="Town / City"
                  required="*"
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="error">{formik.errors.city}</div>
                ) : null}
                <Input
                  Label="County (optional)"
                  type="text"
                  name="city1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city1}
                />
                <Input
                  Label="Postcode "
                  required="*"
                  type="text"
                  name="passcode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passcode}
                />
                {formik.touched.passcode && formik.errors.passcode ? (
                  <div className="error">{formik.errors.passcode}</div>
                ) : null}
                <Input
                  Label="Phone "
                  required="*"
                  type="text"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}
                <Input
                  Label="Email address "
                  required="*"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
                <h2>Additional information</h2>
                <hr />
                <label htmlFor="">Order notes (optional)</label>
                <textarea
                  name="message"
                  id=""
                  rows="3"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
              </div>
            </Col>
            <Col md={5} xs={12} sm={12}>
              <div className="order-details p-5">
                <h2>Your Order</h2>
                <hr />
                <div className="d-flex-1">
                  <p>Product</p>
                  <p className="number">Subtotal</p>
                </div>
                <div className="d-flex-1">
                  <p>Affordable Fashionable Men Leather Jacket</p>
                  <p className="number">£82.00</p>
                </div>
                <div className="d-flex-1">
                  <p>Subtotal</p>
                  <p className="number">£82.00</p>
                </div>
                <div className="d-flex-1">
                  <p>Total</p>
                  <p className="number">£82.00</p>
                </div>
                <br />
                <div className="restriction p-3">
                  <div className="icon">
                    <FaInfoCircle />
                  </div>

                  <p>
                    Sorry, it seems that there are no available payment methods
                    for your state. Please contact us if you require assistance
                    or wish to make alternate arrangements.
                  </p>
                </div>
                <br />
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
                <br />
                <button type="submit" className="btn btn-1 w-100">
                  Place Order
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default checkoutForm;
