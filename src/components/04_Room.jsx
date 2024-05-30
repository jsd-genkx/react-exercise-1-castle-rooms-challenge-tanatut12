import Hall from "./05_Hall";

const Room = ({ message1, onReply }) => {
  return (
    <div>
      <h1>Room</h1>
      <p>Message for JSD7: {message1}</p>
      <Hall message1={message1} onReply={onReply} />
    </div>
  );
};
export default Room;
