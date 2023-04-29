import { useEffect, useRef, useState } from "react";
import './_inputForm.css'
import Button from "../Buttons/Button";

export default function InputForm (){

  const [isEmail, setEmail] = useState("");
  const [isMessage, setMessage] = useState("");
  const [popUp, setPopUp] = useState("");
  const [randomEmojiGenerated, setRandomEmojiGenerated] = useState([]);
  const [clipboardIsCopy, setClipboardIsCopy] = useState(false)
  const EmojiAPI = "https://emoji-api.com/emojis?access_key=0485af6bad82b18a33db25fe3e292cf0e790dc72"

  const handleSubmit = async (event:any) => {  
    
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      message: target.message.value,
      emoji: randomEmojiGenerated,
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
    const fetchEmojiData = async () => {
      const response = await fetch(EmojiAPI)
      const emojiData = await response.json()
      const randomEmojiIndex = Math.floor(Math.random()* emojiData.length);
      const randomEmoji = emojiData[randomEmojiIndex]
      setRandomEmojiGenerated(randomEmoji.codePoint)
    };
    fetchEmojiData();
    setPopUp("isShown");
    setTimeout(()=>{setPopUp("")}, 5000);
    setEmail("");
    setMessage("");
  };

  const handlePopUp = () => {
    setPopUp("")
  }

  const textToClipBoard = useRef("") as any

  const handleClipboardState = ()=>{
    const text = textToClipBoard.current.textContent;
    navigator.clipboard.writeText(text);
    setClipboardIsCopy(!clipboardIsCopy);
    setTimeout(()=>{setClipboardIsCopy(false)}, 5000);
  } 



  return (
    <form onSubmit={handleSubmit} className="form-root">
      <div className="form-body">
        <h3>My email 📧:</h3>
        <div className="input-form-my-email">
          <p ref={textToClipBoard}> gustavoq26@gmail.com </p>
          <div onClick={handleClipboardState}>{clipboardIsCopy ? <i className="fa-solid fa-check"></i> : <i className="fa-regular fa-clipboard"></i>}</div>
        </div>
        <h3>Your mail: </h3>
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
        <h3>Your message:</h3>
        <label>
          <textarea
            required
            // type="text"
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
      {popUp === "isShown" && 
        <div className="email-form-send-pop-up">
          <div className="email-pop-up-body">
            <h2>Email sent! 👨‍💻</h2>
            <Button variant="mainButton" onClick={handlePopUp}>
              Ok
            </Button>
          </div>
          <div className="email-pop-up-background"></div>
        </div> 
        }
    </form>
  );
};


