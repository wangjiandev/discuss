import { getComments } from "@/data/comments";
import CommentShow from "./comment-show";

interface CommentListProps {
  postId: string;
}

const CommentList = async ({ postId }: CommentListProps) => {
  const comments = await getComments(postId);
  const parentComments = comments.filter((comment) => !comment.parentId);
  return (
    <div className="flex flex-col gap-2">
      <h1>all 20 comments</h1>
      {parentComments.map((comment) => (
        <CommentShow key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
