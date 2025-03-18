import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CommentWithRelations, getComments } from "@/data/comments";
import dayjs from "dayjs";
import Image from "next/image";
import ReplyForm from "../post/reply-form";

interface CommentShowProps {
  comment: CommentWithRelations;
}

const CommentShow = async ({ comment }: CommentShowProps) => {
  const comments = await getComments(comment.postId);
  const childComments = comments.filter((c) => c.parentId === comment.id);
  return (
    <Alert>
      <div className="flex items-start gap-2">
        <div className="flex items-center gap-2">
          <Image
            src={comment.user?.image || ""}
            alt={comment.user?.name || ""}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <AlertTitle>{comment.user?.name}</AlertTitle>
          <AlertDescription>
            <div className="flex items-end justify-between gap-2">
              <div className="flex-1 flex flex-col items-start gap-2">
                <div>{comment.content}</div>
                <div className="w-full">
                  {/* <Button variant="link">回复</Button> */}
                  <ReplyForm postId={comment.postId} parentId={comment.id} />
                </div>
              </div>
              <span className="text-sm text-gray-400">
                {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm:ss")}
              </span>
            </div>
          </AlertDescription>
          {childComments.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              {childComments.map((c) => (
                <CommentShow key={c.id} comment={c} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Alert>
  );
};

export default CommentShow;
