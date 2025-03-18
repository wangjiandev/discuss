import Welcome from "@/components/welcome";
import { getTop5Posts } from "@/data/posts";
import PostList from "@/components/post/post-list";

const Page = async () => {
  const posts = await getTop5Posts();
  return (
    <main className="flex flex-col gap-4">
      <PostList data={posts} />
    </main>
  );
};

export default Page;
