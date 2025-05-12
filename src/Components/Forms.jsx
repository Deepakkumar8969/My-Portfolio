import React from 'react'

const Forms = () => {

  const submitForm = (event) => {
    event.preventDefault();
    // Add your form handling logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <form onSubmit={submitForm} id="contact">
        <div className="form1">
          <h1>Contact me</h1>
          <h3>Questions, thoughts, or just want to say hello?</h3>
        </div>

        <div className="form2">
          <input type="text" id="name" placeholder="Enter your name" name="name" />
          <input type="email" id="email" placeholder="Enter your email" name="email" />
          <input type="text" id="subject" placeholder="Enter your subject" name="subject" />
          <textarea id="message" placeholder="Enter your message" cols="30" rows="10" name="message"></textarea>

          <div className="subbmit">
            <button type="submit">Send message</button>
          </div>

          <a
            href="https://www.google.com/maps?q=Chennai,+Tamil+Nadu,+India"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chennai, Tamil Nadu, India
          </a>
        </div>
      </form>
    </div>
  );
};

export default Forms
