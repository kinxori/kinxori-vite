import { useEffect, useRef, useState } from "react";
import Button from "../Buttons/Button";
import "./_inputForm.css";

export default function InputForm() {
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [randomEmojiGenerated, setRandomEmojiGenerated] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [clipboardIsCopy, setClipboardIsCopy] = useState(false);

  const EmojiAPI =
    "https://emoji-api.com/emojis?access_key=0485af6bad82b18a33db25fe3e292cf0e790dc72";

  useEffect(() => {
    const fetchEmojiData = async () => {
      const response = await fetch(EmojiAPI);
      const emojiData = await response.json();
      const randomEmojiIndex = Math.floor(Math.random() * emojiData.length);
      const randomEmojiSelected = emojiData[randomEmojiIndex];
      const emoji = String.fromCodePoint(parseInt(randomEmojiSelected.codePoint, 16));
      console.log(emoji);
      setRandomEmojiGenerated(emoji);
    };
    fetchEmojiData();
  }, [emailInput]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      message: target.message.value,
      subject: target.subject.value,
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
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 10000);
    setEmailInput("");
    setMessageInput("");
  };

  const handlePopUp = () => {
    setPopUp(false);
  };

  const textToClipBoard = useRef("") as any;

  const handleClipboardState = () => {
    const text = textToClipBoard.current.textContent;
    navigator.clipboard.writeText(text);
    setClipboardIsCopy(true);
    setTimeout(() => {
      setClipboardIsCopy(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="form-root">
      <div className="form-content">
        <h3>Email:</h3>
        <input
          type="email"
          value={emailInput}
          name="email"
          onChange={(event) => setEmailInput(event.target.value)}
          required
          placeholder="example@email.com"
        />
        <h3>Subject</h3>
        <input
          type="text"
          value={subjectInput}
          name="subject"
          onChange={(event) => setSubjectInput(event.target.value)}
          required
          placeholder="Enter your subject"
        />
        <h3>Message:</h3>
        <textarea
          required
          value={messageInput}
          name="message"
          onChange={(event) => setMessageInput(event.target.value)}
          placeholder="Enter your message here"
        />
        <button type="submit" className="mainButton form-button-CTA">
          Submit
        </button>
        <h3>Send an email:</h3>
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
