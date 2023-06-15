import { useRef, useState } from "react";
import Button from "../Buttons/Button";
import "./_inputForm.css";

export default function InputForm() {
  const [isEmail, setEmail] = useState("");
  const [isMessage, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [randomEmojiGenerated, setRandomEmojiGenerated] = useState({});
  const [clipboardIsCopy, setClipboardIsCopy] = useState(false);
  const EmojiAPI =
    "https://emoji-api.com/emojis?access_key=0485af6bad82b18a33db25fe3e292cf0e790dc72";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      message: target.message.value,
      emoji: randomEmojiGenerated,
    };

    const result = await fetch(
      "https://us-central1-myportfolio-70cb1.cloudfunctions.net/formFunction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      }
    );
    const fetchEmojiData = async () => {
      const response = await fetch(EmojiAPI);
      const emojiData = await response.json();
      const randomEmojiIndex = Math.floor(Math.random() * emojiData.length);
      const randomEmoji = emojiData[randomEmojiIndex];
      setRandomEmojiGenerated(randomEmoji.codePoint);
    };
    fetchEmojiData();
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 5000);
    setEmail("");
    setMessage("");
  };

  const handlePopUp = () => {
    setPopUp(false);
  };

  const textToClipBoard = useRef("") as any;

  const handleClipboardState = () => {
    const text = textToClipBoard.current.textContent;
    navigator.clipboard.writeText(text);
    setClipboardIsCopy(!clipboardIsCopy);
    setTimeout(() => {
      setClipboardIsCopy(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="form-root">
      <div className="form-content">
        <h3>Insert your email:</h3>
        <input
          type="email"
          value={isEmail}
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          className="form-email-input"
          required
          placeholder="example@email.com"
        />
        <h3>Insert your message:</h3>
        <textarea
          required
          value={isMessage}
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          className="form-message-input"
          placeholder="Enter your message here"
        />
        <button type="submit" className="mainButton form-button-CTA">
          Submit
        </button>

        <h3>Copy my email:</h3>
        <p ref={textToClipBoard}>gustavoq26@gmail.com</p>
        <Button onClick={handleClipboardState} className="form-button-CTA">
          {clipboardIsCopy ? (
            <>
              Copied&nbsp;&nbsp;<i className="fa-solid fa-check"></i>
            </>
          ) : (
            <>
              Copy&nbsp;&nbsp;<i className="fa-regular fa-clipboard"></i>
            </>
          )}
        </Button>
      </div>

      {popUp && (
        <div className="email-pop-up-root" onClick={handlePopUp}>
          <div className="email-pop-up-content">
            <h2>Email sent! 👨‍💻</h2>
            <Button variant="mainButton">Ok</Button>
          </div>
          <div className="email-pop-up-background"></div>
        </div>
      )}
    </form>
  );
}
