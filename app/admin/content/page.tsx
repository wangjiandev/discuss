import Welcome from "@/components/welcome";
import { getTop5Posts } from "@/data/posts";
import PostList from "@/components/post/post-list";

const Page = async () => {
  const posts = await getTop5Posts();
  console.log(posts);
  return (
    <main className="flex flex-col gap-4">
      <div className="bg-background flex items-center justify-between mt-4">
        <div className="flex-1 h-12 flex items-start justify-center flex-col px-4">
          <h1 className="font-bold text-gray-900 ">{}</h1>
          <p className="text-gray-600">{}</p>
        </div>
      </div>
      <PostList data={posts} />
    </main>
  );
};

export default Page;
