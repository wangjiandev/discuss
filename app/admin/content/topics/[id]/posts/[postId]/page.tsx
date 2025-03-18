import PostInfo from "@/components/post/post-info";
import PostInfoSkeleton from "@/components/post/post-info-skeleton";
import { Suspense } from "react";
import ReplyForm from "@/components/post/reply-form";
import { Separator } from "@/components/ui/separator";
import CommentList from "@/components/comment/comment-list";

interface PageProps {
  params: Promise<{ topicId: string; postId: string }>;
}

const PostPage = async ({ params }: PageProps) => {
  const { topicId, postId } = await params;
  return (
    <div className="flex flex-col gap-4 p-4">
      <Suspense fallback={<PostInfoSkeleton />}>
        <PostInfo postId={postId} />
      </Suspense>
      <Separator />
      <ReplyForm postId={postId} isShow={true} />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostPage;
