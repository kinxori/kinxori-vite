import { useState } from "react";

export default function InputForm (){

    const [isEmail, setEmail] = useState("");
    const [isMessage, setMessage] = useState("");

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      message: target.message.value,
    };
    
    const result = await fetch(
      'https://us-central1-myportfolio-70cb1.cloudfunctions.net/formFunction',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...form, secret:"homelo" }),
      }
    )
    const data = await result.json();
    console.log()

    alert("Correo Enviado")
    target.reset();
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Email:</h3>
      <label>
        <input
          type="email"
          value={isEmail}
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <h3>Message:</h3>
      <label>
        <textarea
          value={isMessage}
          name="message"
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


