import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useFormik } from 'formik';
import InputField from "../components/InputField";
import { ContactSchema } from "../utilities/schemas";
import TextArea from "../components/TextArea";


const ContactScreen = () => {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  }

  const contactHandler = (data) => {
    console.log({data})
  }

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } =
  useFormik({
      initialValues,
      validationSchema: ContactSchema,
      onSubmit: (data) => contactHandler(data),
      enableReinitialize: true
  });

  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/assets/img-13.webp)",
        }}
      >
        <div className="flex flex-col items-center bg-black bg-opacity-50 py-28">
          <p className="text-white text-3xl font-semibold">Contact Us</p>
          <div>
            <Breadcrumbs page="contact" secondary />
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row gap-6 items-start pb-16 pt-4 my-8">
        <div className="w-full md:w-2/3 shadow p-4 rounded">
          <div className="text-sm font-medium my-4">
            <p className="text-2xl font-medium uppercase">Leave us a message</p>
            <p className="text-sm font-medium pb-4">Use the form below to get in touch with the sales team</p>
          </div>
          <div className="">
            <div className="flex md:flex-row flex-col gap-4">
              <div className="w-full">
              <InputField 
                  label="First Name"
                  id="firstname"
                  required
                  type="text"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  errorMsg={touched.firstName ? errors.firstName : undefined}
                  placeholder="Enter your first name"
              />
              </div>
        
              <div className="w-full">
              <InputField 
                  label="Last Name"
                  id="lastname"
                  type="text"
                  required
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  errorMsg={touched.lastName ? errors.lastName : undefined}
                  placeholder="Enter your last name"
              />
              </div>
            </div>
            <InputField 
                  label="Email"
                  id="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange("email")}
                  errorMsg={touched.email ? errors.email : undefined}
                  placeholder="Enter your email address"
              />
              <InputField 
                  label="Subject"
                  id="subject"
                  type="text"
                  required
                  value={values.subject}
                  onChange={handleChange("subject")}
                  errorMsg={touched.subject ? errors.subject : undefined}
                  placeholder="Enter your email address"
              />
             <TextArea 
                  label="Message"
                  required
                  type="text"
                  value={values.message}
                  onChange={handleChange("message")}
                  errorMsg={touched.message ? errors.message : undefined}
              />
            <div className="my-8">
              <button
                onClick={handleSubmit}
                className="w-full block text-center bg-primary border-primary text-white border px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 shadow p-4 rounded">
          <p className="text-gray-800 text-lg mb-4 font-medium uppercase">Our stores</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <i className="fas fa-location pr-1"></i>
              <p className="text-sm text-gray-600">18, Oremeji street, Computer Village, Ikeja</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-location pr-1"></i>
              <p className="text-sm text-gray-600">+2348103431851, +2347051405791</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-location pr-1"></i>
              <p className="text-sm text-gray-600">info@bitshub.it</p>
            </div>
          </div>
          <p className="text-gray-800 text-lg mt-8 font-medium uppercase">Hours of Operation</p>
          <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
            <p className="text-sm text-gray-600">Sunday- Monday</p>
            <p className="text-sm text-gray-600">24 Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
