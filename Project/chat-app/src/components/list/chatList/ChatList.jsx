import "./chatList.css";
import { useState } from "react";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt=""/>
                    <input type="text" placeholder="Search" />
                </div>
                <img 
                src={addMode ? "./minus.png" : "./plus.png"} 
                alt="" 
                className="add"
                onClick={() => setAddMode((prev) => !prev)} />
            </div>
            <div className="item">
                <img src="./avatar.jpg" alt=""/>
                <div className="texts">
                    <span>Tracy</span>
                    <p>Hello there, how are you doing today?</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.jpg" alt=""/>
                <div className="texts">
                    <span>Tracy</span>
                    <p>Hello there, how are you doing today?</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.jpg" alt=""/>
                <div className="texts">
                    <span>Tracy</span>
                    <p>Hello there, how are you doing today?</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.jpg" alt=""/>
                <div className="texts">
                    <span>Tracy</span>
                    <p>Hello there, how are you doing today?</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.jpg" alt=""/>
                <div className="texts">
                    <span>Tracy</span>
                    <p>Hello there, how are you doing today?</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.jpg" alt=""/>
                <div className="texts">
                    <span>Tracy</span>
                    <p>Hello there, how are you doing today?</p>
                </div>
            </div>
        </div>
    )
}
export default ChatList;