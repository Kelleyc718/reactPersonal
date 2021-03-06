import React, { Component } from 'react';
import '../css/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-bg">
        <a name="contact" alt="contact-link"> </a>
        <form method="POST" action="https://formspree.io/kelleyc718@gmail.com">
          <h3>To get in touch, click on my social icons or shoot me a message</h3>
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Shoot me a message, or reach out to me on LinkedIn!"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
};

export default Contact;
