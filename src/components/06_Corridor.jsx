import Gallery from "./07_Gallery";

const Corridor = ({ message1, onReply }) => {
  return (
    <div>
      <h1>Corridor</h1>
      <p>Message for JSD7: {message1}</p>
      <Gallery message1={message1} onReply={onReply} />
    </div>
  );
};
export default Corridor;
