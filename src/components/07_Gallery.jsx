import Nook from "./08_Nook";

const Gallery = ({ message1, onReply }) => {
  return (
    <div>
      <h1>Gallery</h1>
      <p>Message for JSD7: {message1}</p>
      <Nook message1={message1} onReply={onReply} />
    </div>
  );
};
export default Gallery;
