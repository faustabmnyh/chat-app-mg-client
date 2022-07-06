import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LIKE_POST } from "../../graphql/posts";
import "./CommentIcons.css";

const CommentIcons = ({ post, setOpenComment }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  const [liked, setLiked] = useState(false);
  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: post.id },
  });

  useEffect(() => {
    if (post.likes?.find((like) => like.username === user.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [post, user]);

  return (
    <div className={"commentIcons__contentIcons"}>
      <div className="commentIcons__iconsIcon">
        {liked ? (
          <span onClick={likePost} className={"commentIcons__icon likes"}>
            <i className="fa fa-heart" />
          </span>
        ) : (
          <span className={"commentIcons__icon"} onClick={likePost}>
            <i class="fa fa-heart-o" />
          </span>
        )}
        <img
          src="/images/icons/message_circle.svg"
          alt="message"
          onClick={setOpenComment}
          className={"commentIcons__icon"}
        />
      </div>
      <p>
        {post.likeCount} likes, {post.commentCount} comments
      </p>
    </div>
  );
};

export default CommentIcons;
