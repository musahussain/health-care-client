import React from "react";
import bg from '../../assets/images/appointment.png';

const Contact = () => {
  return (
    <section style={{
        background: `url(${bg})`
    }} className="mt-40 mb-28 flex justify-center items-center">
      <div class="card mt-28">
        <h3 className="text-xl text-accent">Contact Us</h3>
        <h2 className="text-2xl text-white">Stay Connected</h2>
        <div class="card-body items-center text-center">
        <input type="text" placeholder="Email Address" class="input w-96" />
        <input type="text" placeholder="Subject" class="input w-96" />
        <textarea class="textarea w-96" placeholder="Your Message"></textarea>
          <div class="card-actions">
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
