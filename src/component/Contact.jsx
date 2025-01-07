import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const userId = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact = () => {

    const formRef = useRef();
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();


      console.log(userId)
  
      emailjs
        .sendForm(
          "service_n01sd99", // Your EmailJS Service ID
          "template_x5a4nsk", // Your EmailJS Template ID
          formRef.current, // The form reference,
          userId// Your EmailJS Public Key
        )
        .then(
          (response) => {
            alert("Message Sent Successfully!");
            formRef.current.reset(); // Reset the form
            setErrorMessage(""); // Clear any previous errors
          },
          (error) => {
            alert("Message Sending Failed: " + error.text);
            console.error("Error:", error.text);
            setErrorMessage("Message Sending Failed: " + error.text);
          }
        );
    };
  



  return (
    <section className="flex flex-col items-center py-12 px-4">
    <h1 className="text-4xl font-semibold mb-6 text-white">Connect with Me</h1>
    <p className="text-xl text-gray-200 mb-10 text-center max-w-lg ">
        Feel free to reach out with any questions or opportunities. I’d love to connect and contribute to your organization.
    </p>


    <form id="contact-form"  ref={formRef}
        onSubmit={handleSubmit} className=" bg-gradient-to-br from-sky-50 to-gray-200 p-8 rounded-lg shadow-lg w-full max-w-lg text-black">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1 ">Your Name</label>
        <input type="text" id="name" name="from_name" required placeholder="Enter Name"
          className="w-full border-2 border-gray-300  bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
        <input type="email" id="email" name="from_email" required placeholder="Enter email address"
          className="w-full border-2 border-gray-300  bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
        <input type="text" id="phone" name="phone" required placeholder="Enter your phone number"
          className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Enter message"
          className=" border-2 border-gray-300  w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <input type="hidden" id="to_name" name="to_name" value="Prathamesh"/>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <div className="flex justify-center mt-4">
        <button type="submit"
          className="uppercase text-sm font-bold bg-blue-900 text-gray-100 p-3 rounded-lg w-1/2 focus:outline-none focus:shadow-outline hover:opacity-65">
          Send Message
        </button>
      </div>
    </form>
  </section>
  )
}

export default Contact