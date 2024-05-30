import { useState } from "react";

const SecretRoom = ({ message1, onReply }) => {
  const [reply, setReply] = useState("");
  const handleSendReply = () => {
    onReply(reply);
  };

  return (
    <div>
      <h1>SecretRoom</h1>
      <p>Message for JSD7: {message1}</p>
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      ></textarea>
      <button onClick={handleSendReply}>Send</button>
    </div>
  );
};

export default SecretRoom;
