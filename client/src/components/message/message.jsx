import "./message.css";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="..\assets\p7.jpeg"
          alt=""
        />
        <p className="messageText">Bonjour je t'envoi un message</p>
      </div>
      <div className="messageBottom">today at 23:18</div>
    </div>
  );
}
