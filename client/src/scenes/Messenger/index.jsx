import Navbar from "scenes/navbar";
import "./messenger.css";
import Conversation from "components/conversations/conversations";
import Message from "components/message/message";
import ChatOnline from "components/chatOnline/ChatOnline";
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";

export default function Messenger() {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);
    return (
        <>
        <Navbar />
        <div className="messenger"> 
            <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder="Search for friends" className="chatMenuInput" />
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                box
                <div className="chatBoxTop">
            <Message/>
            <Message own={true}/>

            <Message/>
            <Message own={true}/>

            <Message/>
            <Message own={true}/>

            <Message/><Message/>
    
            <Message own={true}/>
            </div>
            <div className="chatBoxBottom">
            <textarea  className="chatMessageInput" placeholder="write something..."></textarea>
            <button className="chatSubmitButton">Send</button>
            </div>                   
        </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">Online<ChatOnline/> 
            <ChatOnline/> 
            <ChatOnline/> 
            <ChatOnline/> 
            </div>
            </div>
        </div>
        </>
    )
}

