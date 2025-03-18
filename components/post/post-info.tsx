import { getPost } from "@/data/posts";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PostInfoProps {
  postId: string;
}

const PostInfo = async ({ postId }: PostInfoProps) => {
  const post = await getPost(postId);
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{post.title}</AlertTitle>
      <AlertDescription>{post.content}</AlertDescription>
    </Alert>
  );
};

export default PostInfo;
