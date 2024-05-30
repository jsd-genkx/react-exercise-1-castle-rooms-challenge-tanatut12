import Corridor from "./06_Corridor";

const Hall = ({ message1, onReply }) => {
  return (
    <div>
      <h1>Hall</h1>
      <p>Message for JSD7: {message1}</p>
      <Corridor message1={message1} onReply={onReply} />
    </div>
  );
};
export default Hall;
