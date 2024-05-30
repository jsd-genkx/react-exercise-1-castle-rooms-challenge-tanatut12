import Tower from "./02_Tower";
const Castle = ({ message1, onReply }) => {
  return (
    <div>
      <h1>Castle</h1>
      <p>Message for JSD7: {message1}</p>
      <Tower message1={message1} onReply={onReply} />
    </div>
  );
};

export default Castle;
