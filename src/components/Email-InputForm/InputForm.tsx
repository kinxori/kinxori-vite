import { useEffect, useState } from "react";
import "./_inputForm.css";
import emailAsset from "@src/assets/AboutmeAsset.png";
import Button from "../Buttons/Button";

export default function InputForm({ handlePopUp, popUp }: any) {
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [randomEmojiGenerated, setRandomEmojiGenerated] = useState("");

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
    handlePopUp(true);
    setTimeout(() => {
      handlePopUp(false);
    }, 5000);
    setEmailInput("");
    setMessageInput("");
    setSubjectInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-root">
      <div className="form-content">
        <div className="form-content-inputs">
          <div>
            <h4>Email:</h4>
            <input
              type="email"
              value={emailInput}
              name="email"
              onChange={(event) => setEmailInput(event.target.value)}
              required
              placeholder="example@email.com"
            />
          </div>
          <div>
            <h4>Subject</h4>
            <input
              type="text"
              value={subjectInput}
              name="subject"
              onChange={(event) => setSubjectInput(event.target.value)}
              required
              placeholder="Enter your subject"
            />
          </div>
        </div>
        <div className="form-content-textareas">
          <h4>Message:</h4>
          <textarea
            required
            value={messageInput}
            name="message"
            onChange={(event) => setMessageInput(event.target.value)}
            placeholder="Enter your message here"
          />
        </div>
        <button type="submit" className="mainButton form-button-CTA">
          Submit
        </button>
      </div>
      {popUp === true && (
        <div className="email-pop-up-root">
          <div className="email-pop-up-content">
            <img
              src={emailAsset}
              alt="purple cup of coffee with a delivery backpack riding a scooter with glasses on its way to deliver something - Kinxori.com"
            ></img>
            <h2>Email sent! 👨‍💻</h2>
            <Button variant="mainButton" onClick={() => handlePopUp(false)}>
              Close
            </Button>
          </div>
          <div className="email-pop-up-background" onClick={() => handlePopUp(false)}></div>
        </div>
      )}
    </form>
  );
}
