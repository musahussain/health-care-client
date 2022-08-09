import React from "react";
import bg from '../../assets/images/appointment.png';

const Contact = () => {
  return (
    <section style={{
        background: `url(${bg})`
    }} className="mt-40 mb-28 flex justify-center items-center">
      <div className="card mt-28">
        <h3 className="text-xl text-accent">Contact Us</h3>
        <h2 className="text-2xl text-white">Stay Connected</h2>
        <div className="card-body items-center text-center">
        <input type="text" placeholder="Email Address" className="input w-96" />
        <input type="text" placeholder="Subject" className="input w-96" />
        <textarea className="textarea w-96" placeholder="Your Message"></textarea>
          <div className="card-actions">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
