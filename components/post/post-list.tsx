"use client";

import { PostWithRelations } from "@/data/posts";

interface PostListProps {
  data: PostWithRelations[];
}

const PostList = ({ data }: PostListProps) => {
  return (
    <div className="grid gap-4 px-4">
      {data.map((post) => (
        <div
          key={post.id}
          className="p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
        >
          <div className="flex items-end justify-between">
            <div className="flex flex-col items-start gap-2 justify-between">
              <span>{post.title}</span>
              <span className="text-xs font-normal leading-snug text-muted-foreground">
                {post.user?.name}
              </span>
            </div>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              {post.comments?.length} comments
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
