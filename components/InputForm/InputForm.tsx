import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBiOgwA5Vy0XPD9-U_WzwBOdw9SpOsSY2Q",
    authDomain: "myportfolio-70cb1.firebaseapp.com",
    databaseURL: "https://myportfolio-70cb1-default-rtdb.firebaseio.com/",
    projectId: "myportfolio-70cb1",
    storageBucket: "myportfolio-70cb1.appspot.com",
    messagingSenderId: "199716296587",
    appId: "1:199716296587:web:9b773bf0fc5ba6adb5c18e",
    measurementId: "G-2M05JW1WPL"
};

firebase.initializeApp(firebaseConfig);

export default function InputForm (){

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const database = getDatabase();

  const handleSubmit = (event:any) => {
    event.preventDefault();
    push(ref(database, "contacts"), {
        email: email,
        message: message,
      })
      .then(() => {
        alert("Data saved successfully.");
        setEmail("");
        setMessage("");
      })
      .catch((error:any) => {
        console.error("Error saving data: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Send me an email! 📧</h2>
      <label>
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <br />
        <button type="submit" className="mainButton">
            Send
        </button>
    </form>
  );
};


