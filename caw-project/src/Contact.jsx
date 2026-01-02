import styles from "./css/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/xwvpeqlj"
        method="POST"
      >
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" required /><br />

          <label>Email:</label><br />
          <input type="email" name="email" required /><br />
        </div>
        <div>
          <label>Message:</label><br />
          <textarea name="message" required></textarea><br />

          <button type="submit">Send</button>
        </div>      
      </form>

    
    </div>
  );
}

export default Contact;
