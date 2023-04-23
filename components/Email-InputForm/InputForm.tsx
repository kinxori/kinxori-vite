import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import './_inputForm.css'
import Button from "../Buttons/Button";


export default function InputForm (){

  const [isEmail, setEmail] = useState("");
  const [isMessage, setMessage] = useState("");
  const [popUp, setPopUp] = useState("")
  const [emojiData, setEmojiData] = useState([]); // State variable to store the emoji data

  const EmojiAPI = "https://emoji-api.com/emojis?access_key=0485af6bad82b18a33db25fe3e292cf0e790dc72"

  useEffect(() => {
    const fetchEmojiData = async () => {
      const response = await fetch(EmojiAPI)
      const emojiData = await response.json()
      setEmojiData(emojiData)
    };
    fetchEmojiData()
  }, []);

  const cachedEmojiData = useMemo(()=> emojiData, [emojiData])
  const randomEmojiIndex = Math.floor(Math.random()* cachedEmojiData.length);
  const randomEmoji = cachedEmojiData[randomEmojiIndex]

  const handlePopUp = () => {
      setPopUp("")
    }

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
    setPopUp("isShown")
    setTimeout(()=>{
      setPopUp("");
    }, 5000)
    setEmail("");
    setMessage("");
  };

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


