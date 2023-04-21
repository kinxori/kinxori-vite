import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import './_inputForm.css'


export default function InputForm (){

    const [isEmail, setEmail] = useState("");
    const [isMessage, setMessage] = useState("");
 
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      message: target.message.value,
      emoji: randomEmoji.codePoint,
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

    // MODIFICAR ALERT PARA QUE SEA UN POP-UP 
    alert("Correo Enviado")
    target.reset();
    setEmail("");
    setMessage("");
  };

  const emojiData:any = useLoaderData();
  const randomEmojiIndex = Math.floor(Math.random()* emojiData.length);
  const randomEmoji = emojiData[randomEmojiIndex]

  return (
    <form onSubmit={handleSubmit} className="form-root">
      <div className="form-body">
        <h3>Email: </h3>
        <label>
          <input
            type="email"
            value={isEmail}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            className="email-input-box"
            required
            placeholder="email@example.com"
          />
        </label>
        <h3>Message:</h3>
        <label>
          <input
            required
            type="text"
            value={isMessage}
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            className="message-input-box"
            placeholder="Enter your message here"
          />
        </label>
      </div>
      <button type="submit" className="mainButton submit-button-CTA">
          Submit
      </button>
    </form>
  );
};


