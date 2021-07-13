import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  toast.success("Message Submit Sucessfully", {
    position: "top-center",
  });
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be three or more characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  number: Yup.string()
    .matches(/^[0-9\s]+$/, "Only number are allowed for this field ")
    .required("Number is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  return (
    <div>
      <div className="contact-form">
        <h3>Feedback Form</h3>
        <br />
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </Form.Group>
          <Row>
            <Col md={6} xs={12} className="mt-2">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Contact No <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="number"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.number}
                />
                {formik.touched.number && formik.errors.number ? (
                  <div className="error">{formik.errors.number}</div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={6} xs={12} className="mt-2">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <label htmlFor="">Comment or Message</label>
          <textarea
            name="message"
            id=""
            className="form-control"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
          <br />
          <Button className="btn btn-1" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
