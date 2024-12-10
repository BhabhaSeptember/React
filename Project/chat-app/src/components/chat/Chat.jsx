import { useEffect, useState, useRef } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();

  const { chatId } = useChatStore;

  //allow user to auto scroll to the latest messages in a chat upon page refresh
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      {/* ============================= TOP SECTION =============================*/}
      <div className="top">
        <div className="user">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <span>Bhabha</span>
            <p>Bhabha Tracy Akhona September</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      {/* ============================= CENTER SECTION =============================*/}

      <div className="center">
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>I hope you had a wonderful weekend?</p>
            <span>7 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="texts">
            <p>Yes, thank you and yourself?</p>
            <span>6 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>I had an extremely long weekend! I am tired...</p>
            <span>5 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="texts">
            <p>
              I'm sorry to hear that. Load up on that coffee and rest when you
              can
            </p>
            <span>4 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>Most definitely. Are we seeing you at the auction tomorrow?</p>
            <span>3 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="texts">
            <img src="./busy-office-image.png" alt="" />
            <p>I will confirm with you later this evening but for now, yep!!</p>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>Awesome! Enjoy the rest of your day. Bye!!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endRef}></div>
      </div>

      {/* ============================= BOTTOM SECTION =============================*/}

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />

          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};
export default Chat;
