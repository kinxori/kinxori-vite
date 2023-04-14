// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as admin from "firebase-admin";
import * as serviceAccount from
  "../../myportfolio-70cb1-firebase-adminsdk-93t0f-4714f47806.json";

admin.initializeApp({
  credential: admin.credential.cert(
      serviceAccount as admin.ServiceAccount
  ),
  databaseURL: "https://myportfolio-70cb1-default-rtdb.firebaseio.com/",
});

// Set up a transporter with your email provider
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "gustavoq26@gmail.com",
    pass: "Kimbaloca9",
  },
});

// Define your Cloud Function
export const sendEmail = functions
  .database
  .ref("/contacts")
  .onCreate(async (snapshot, context) => {
  // Check if the user is authenticated
    // if (!context.auth) {
    //   throw alert(
    //     "unauthenticated",
    //   );
    // }

    // Extract the data from the request
    const {email, message} = snapshot.val();

    try {
    // Send the email
      await transporter.sendMail({
        from: "gustavoq26@gmail.com",
        to: "gustavoq26@gmail.com",
        subject: "New message from your portfolio website",
        text: `Email: ${email}\nMessage: ${message}`,
      });

      // Return a success message
      return console.log("Email sent successfully!");
    } catch (error) {
    // Return an error message
      return console.error("Failed to send email.", error);
    }
  });
