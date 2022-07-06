import { useSelector } from "react-redux";
import "./Message.css";

const Message = ({ message, users }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  const stickers = ["❤️", "😆", "😯", "😢", "😡", "👍", "👎"];
  const sticker = stickers.find((s) => s === message.content);

  const selectedUser = users?.find((u) => u.selected);

  return (
    <div className="message">
      <div className="message__container">
        {user.username !== message.from && (
          <img
            src={selectedUser?.imageUrl || "/images/icons/profile.png"}
            alt="girls"
            className="message__person"
          />
        )}
        <p
          className={
            user.username === message.from
              ? sticker
                ? "message__content user sticker"
                : "message__content user"
              : sticker
              ? "message__content sticker"
              : "message__content"
          }
        >
          {message.content}
        </p>
      </div>
    </div>
  );
};

export default Message;
