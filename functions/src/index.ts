import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as admin from "firebase-admin";

const serviceAccount = require("./myportfolio-70cb1-firebase-adminsdk-93t0f-4714f47806.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://myportfolio-70cb1-default-rtdb.firebaseio.com/"
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
export const sendEmail = functions.https.onCall(async (data, context) => {
  // Check if the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "You must be authenticated to call this function."
    );
  }

  // Extract the data from the request
  const {name, email, message} = data;

  try {
    // Send the email
    await transporter.sendMail({
      from: "gustavoq26@gmail.com",
      to: "gustavoq26@gmail.com",
      subject: "New message from your portfolio website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Return a success message
    return {message: "Email sent successfully!"};
  } catch (error) {
    // Return an error message
    throw new functions.https.HttpsError(
      "unknown",
      "Failed to send email.",
      error
    );
  }
});
