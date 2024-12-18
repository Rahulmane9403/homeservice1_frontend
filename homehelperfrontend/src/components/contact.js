// import React, { Component } from 'react';
// import ScrollReveal from 'scrollreveal';
// import qw from './Images/qw.jpg';

// class Contact extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {};
//     }

//     componentDidMount() {
//         // Initialize ScrollReveal
//         const sr = ScrollReveal();

//         // Define the configuration for the reveal animation
//         const revealConfig = {
//             distance: '500px',  // Distance to reveal element
//             duration: 2000,    // Duration of animation in milliseconds
//             delay: 200,        // Delay before animation starts
//             origin: 'right',  // Origin of animation
//             easing: 'ease-out', // Easing function
//             reset: true,       // Reset on container scroll
//         };

//         // Use ScrollReveal on table, tr, th, and td elements
//         sr.reveal(this.tableRef, revealConfig);
//         sr.reveal(this.tableRef, revealConfig);
//     }

//     render() {
//         return (
//             <div style={{ backgroundImage: `url(${qw})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
//                 <div ref={ref => (this.tableRef = ref)}>
//                     <h1 style={{ color: "black" }}>CONTACT</h1><br /><br />
//                     <b>
//                         <center>
//                             <table border=' solid 40' className="table table-bordered table-solid">
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Email ID</th>
//                                         <th>Contact Number</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>Rajshri Jaiswal</td>
//                                         <td>rajshrijaiswal717@gmail.com</td>
//                                         <td>7770066701</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Prajwal Shirsat</td>
//                                         <td>prajwalshirsat2105@gmail.com</td>
//                                         <td>8888241766</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Pratik Ohol</td>
//                                         <td>pratikohol21@gmail.com</td>
//                                         <td>9763837089</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Dhiraj Brahmankar</td>
//                                         <td>dhirajsb1995@gmail.com</td>
//                                         <td>9604409397</td>
//                                     </tr>
//                                     <tr>
//                                         <td></td>
//                                         <td></td>
//                                         <td></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </center>
//                     </b>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Contact;






// import React from "react";

// const ContactPage = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Contact Us</h1>
//       <p style={styles.subHeading}>
//         We'd love to hear from you! Reach out to us for any queries or assistance.
//       </p>

//       {/* Contact Form */}
//       <div style={styles.formContainer}>
//         <form style={styles.form}>
//           <label style={styles.label} htmlFor="name">
//             Name:
//           </label>
//           <input type="text" id="name" name="name" style={styles.input} required />

//           <label style={styles.label} htmlFor="email">
//             Email:
//           </label>
//           <input type="email" id="email" name="email" style={styles.input} required />

//           <label style={styles.label} htmlFor="city">
//             Select a city:
//           </label>
//           <select id="city" name="city" style={styles.select} required>
//             <option value="">Select a city</option>
//             <option value="new-york">Pune</option>
//             <option value="los-angeles">Mumbai</option>
//             <option value="chicago">Nagpur</option>
//             <option value="houston">Nashik</option>
//             <option value="miami">Solapur</option>
//             {/* Add more cities as needed */}
//           </select>

//           <label style={styles.label} htmlFor="message">
//             Message:
//           </label>
//           <textarea id="message" name="message" style={styles.textarea} required />

//           <button type="submit" style={styles.button}>
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Contact Details */}
//       <div style={styles.details}>
//         <h3>Our Office</h3>
//         <p>123 Maid Street, Clean City, Country - 123456</p>
//         <p>Phone: +1 234 567 890</p>
//         <p>Email: support@maidbooking.com</p>
//       </div>

//       {/* Social Media */}
//       <div style={styles.social}>
//         <h3>Connect With Us</h3>
//         <a href="#" style={styles.link}>
//           Facebook
//         </a>
//         <a href="#" style={styles.link}>
//           Twitter
//         </a>
//         <a href="#" style={styles.link}>
//           Instagram
//         </a>
//       </div>
//     </div>
//   );
// };

// // Inline CSS for styling
// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     padding: "2rem",
//     maxWidth: "800px",
//     margin: "auto",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: "2rem",
//     color: "#333",
//   },
//   subHeading: {
//     textAlign: "center",
//     marginBottom: "1rem",
//     color: "#555",
//   },
//   formContainer: {
//     marginBottom: "2rem",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     marginBottom: "0.5rem",
//     fontWeight: "bold",
//   },
//   input: {
//     marginBottom: "1rem",
//     padding: "0.5rem",
//     fontSize: "1rem",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   },
//   select: {
//     marginBottom: "1rem",
//     padding: "0.5rem",
//     fontSize: "1rem",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   },
//   textarea: {
//     marginBottom: "1rem",
//     padding: "0.5rem",
//     fontSize: "1rem",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     height: "100px",
//   },
//   button: {
//     padding: "0.75rem",
//     fontSize: "1rem",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   details: {
//     textAlign: "center",
//     marginBottom: "2rem",
//   },
//   social: {
//     textAlign: "center",
//   },
//  link: {
//     margin: "0 1rem",
//     color: "#007bff",
//     textDecoration: "none",
//   },
// };

// export default ContactPage;

import React from "react";

const ContactPage = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.subHeading}>
          We'd love to hear from you! Reach out to us for any queries or assistance.
        </p>

        {/* Contact Form */}
        <div style={styles.formContainer}>
          <form style={styles.form}>
            <label style={styles.label} htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" name="name" style={styles.input} required />

            <label style={styles.label} htmlFor="email">
              Email:
            </label>
            <input type="email" id="email" name="email" style={styles.input} required />

            <label style={styles.label} htmlFor="city">
              Select a city:
            </label>
            <select id="city" name="city" style={styles.select} required>
              <option value="">Select a city</option>
              <option value="new-york">Pune</option>
              <option value="los-angeles">Mumbai</option>
              <option value="chicago">Nagpur</option>
              <option value="houston">Nashik</option>
              <option value="miami">Solapur</option>
              {/* Add more cities as needed */}
            </select>

            <label style={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea id="message" name="message" style={styles.textarea} required />

            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div style={styles.details}>
          <h3>Our Office</h3>
          <p>123 Maid Street, Clean City, Country - 123456</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: support@maidbooking.com</p>
        </div>

        {/* Social Media */}
        <div style={styles.social}>
          <h3>Connect With Us</h3>
          <a href="#" style={styles.link}>
            Facebook
          </a>
          <a href="#" style={styles.link}>
            Twitter
          </a>
          <a href="#" style={styles.link}>
            Instagram
          </a>
        </div>

        {/* Footer */}

      </div>



      <footer style={styles.footer}>
        <div style={styles.textContainer}>
        <p style={styles.footerText}>© 2023 Maid Booking. All rights reserved.</p>
        <p style={styles.footerText}>
          <a href="#" style={styles.footerLink}>Privacy Policy</a> | <a href="#" style={styles.footerLink}>Terms of Service</a>
        </p>
        </div>
      </footer>

    </>

  );
};

// Inline CSS for styling
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#333",
  },
  subHeading: {
    textAlign: "center",
    marginBottom: "1rem",
    color: "#555",
  },
  formContainer: {
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  select: {
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    height: "100px",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  details: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  social: {
    textAlign: "center",
  },
  link: {
    margin: "0 1rem",
    color: "#007bff",
    textDecoration: "none",
  },
  footer: {
    backgroundColor: "black",
    textAlign: "center",
    marginTop: "2rem",
    padding: "1rem 0",
    borderTop: "1px solid #ccc",
    height: "220px"
  },
  footerText: {
    fontSize:"20px",
    margin: "0.5rem 0",
    color: "white",
  },
  textContainer:{
    margin:"50px"
  },
  footerLink: {
    color: "#007bff",
    textDecoration: "none",
  },

};

export default ContactPage;