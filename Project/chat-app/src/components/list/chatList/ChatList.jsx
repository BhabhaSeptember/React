// import "./chatList.css";
// import { useState, useEffect } from "react";
// import AddUser from "./addUser/AddUser"
// import { useUserStore } from "../../../lib/userStore";
// import { onSnapshot, doc, getDoc, updateDoc} from "firebase/firestore";
// import { db } from "../../../lib/firebase";

// const ChatList = () => {
//     const [addMode, setAddMode] = useState(false);
//     const [chats, setChats] = useState([]);

//     const { currentUser } = useUserStore();

//     useEffect(() => {
//         if (!currentUser?.id) {
//             console.error("No currentUser or user ID found");
//             return;
//         }
    
//         const unSub = onSnapshot(
//             doc(db, "userchats", currentUser.id),
//             async (res) => {
//                 try {
//                     const data = res.data();
    
//                     if (!data?.chats || !Array.isArray(data.chats)) {
//                         console.warn("Chats not found or invalid structure");
//                         setChats([]);
//                         return;
//                     }
    
//                     const items = data.chats;
    
//                     const promises = items.map(async (item) => {
//                         if (!item?.receiverId) {
//                             console.warn("Missing receiverId in chat item", item);
//                             return null;
//                         }
    
//                         try {
//                             const userDocRef = doc(db, "users", item.receiverId);
//                             const userDocSnap = await getDoc(userDocRef);
    
//                             if (!userDocSnap.exists()) {
//                                 console.warn(`User document not found for ID: ${item.receiverId}`);
//                                 return { ...item, user: null };
//                             }
    
//                             const user = userDocSnap.data();
//                             return { ...item, user };
//                         } catch (error) {
//                             console.error("Error fetching user document:", error);
//                             return null; // Handle individual fetch errors gracefully
//                         }
//                     });
    
//                     const chatData = await Promise.all(promises);
    
//                     // Filter out invalid items
//                     const validChats = chatData.filter(Boolean);
//                     setChats(validChats.sort((a, b) => b.updatedAt - a.updatedAt));
//                 } catch (error) {
//                     console.error("Error processing snapshot data:", error);
//                 }
//             },
//             (error) => {
//                 console.error("Error in Firestore snapshot listener:", error);
//             }
//         );
    
//         return () => {
//             unSub();
//         };
//     }, [currentUser?.id]);
    
    

//     return (
//         <div className="chatList">
//             <div className="search">
//                 <div className="searchBar">
//                     <img src="./search.png" alt=""/>
//                     <input type="text" placeholder="Search" />
//                 </div>
//                 <img 
//                 src={addMode ? "./minus.png" : "./plus.png"} 
//                 alt="" 
//                 className="add"
//                 onClick={() => setAddMode((prev) => !prev)} 
//                 />
//             </div>
//             {chats.map((chat) => (
//                 <div className="item">
//                 <img src={chat.user.avatar || "./login-avatar.jpg"} alt=""/>
//                 <div className="texts">
//                     <span>{chat.user.username}</span>
//                     <p>{chat.lastMessage}</p>
//                 </div>
//             </div>
//             ))}

// <div className="item">
//                 <img src="./login-avatar.jpg" alt=""/>
//                 <div className="texts">
//                     <span>Jacob</span>
//                     <p>Please check your emails dude</p>
//                 </div>

//            {addMode && <AddUser />}
//         </div>
//     )
// }
// export default ChatList;

//====================================

import "./chatList.css";
import { useState, useEffect } from "react";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { onSnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);

    const { currentUser } = useUserStore();
    const { chatId, changeChat } = useChatStore();

    useEffect(() => {
        if (!currentUser?.id) {
            console.error("No currentUser or user ID found");
            return;
        }

        const unSub = onSnapshot(
            doc(db, "userchats", currentUser.id),
            async (res) => {
                try {
                    const data = res.data();

                    if (!data?.chats || !Array.isArray(data.chats)) {
                        console.warn("Chats not found or invalid structure");
                        setChats([]);
                        return;
                    }

                    const items = data.chats;

                    const promises = items.map(async (item) => {
                        if (!item?.receiverId) {
                            console.warn("Missing receiverId in chat item", item);
                            return null;
                        }

                        try {
                            const userDocRef = doc(db, "users", item.receiverId);
                            const userDocSnap = await getDoc(userDocRef);

                            if (!userDocSnap.exists()) {
                                console.warn(`User document not found for ID: ${item.receiverId}`);
                                return { ...item, user: null };
                            }

                            const user = userDocSnap.data();
                            return { ...item, user };
                        } catch (error) {
                            console.error("Error fetching user document:", error);
                            return null;
                        }
                    });

                    const chatData = await Promise.all(promises);

                    // Filter out invalid items
                    const validChats = chatData.filter(Boolean);
                    setChats(validChats.sort((a, b) => b.updatedAt - a.updatedAt));
                } catch (error) {
                    console.error("Error processing snapshot data:", error);
                }
            },
            (error) => {
                console.error("Error in Firestore snapshot listener:", error);
            }
        );

        return () => {
            unSub();
        };
    }, [currentUser?.id]);

    // Hardcoded chat items
    const hardcodedChats = [
        {
            user: { avatar: "./login-avatar.jpg", username: "Jacob" },
            lastMessage: "Please check your emails dude",
        },
        {
            user: { avatar: "./login-avatar.jpg", username: "Sophia" },
            lastMessage: "Can we meet tomorrow?",
        },
        {
            user: { avatar: "./login-avatar.jpg", username: "Sophia" },
            lastMessage: "Can we meet tomorrow?",
        },
        {
            user: { avatar: "./login-avatar.jpg", username: "Sophia" },
            lastMessage: "Can we meet tomorrow?",
        },
        {
            user: { avatar: "./login-avatar.jpg", username: "Sophia" },
            lastMessage: "Can we meet tomorrow?",
        },
        {
            user: { avatar: "./login-avatar.jpg", username: "Sophia" },
            lastMessage: "Can we meet tomorrow?",
        },
    ];

    const handleSelect = (chat) => {

        changeChat(chat.chatId, chat.user)

    }
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img
                    src={addMode ? "./minus.png" : "./plus.png"}
                    alt=""
                    className="add"
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            {/* Render dynamic chats */}
            {chats.map((chat, index) => (
                <div className="item" key={chat.chatId} onClick={() => handleSelect(chat)}>
                    <img src={chat.user?.avatar || "./login-avatar.jpg"} alt="" />
                    <div className="texts">
                        <span>{chat.user?.username}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}

            {/* Render hardcoded chats */}
            {hardcodedChats.map((chat, index) => (
                <div className="item" key={`hardcoded-${index}`}>
                    <img src={chat.user.avatar} alt="" />
                    <div className="texts">
                        <span>{chat.user.username}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}

            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList;
