import { getTopic } from "@/data/topic";
import CreatePostForm from "@/components/post/create-post-form";
import PostList from "@/components/post/post-list";
import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/data/posts";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const topic = await getTopic(id);
  const posts = await getPosts(topic.id);
  return (
    <main className="flex flex-col gap-4">
      <div className="bg-background flex items-center justify-between mt-4">
        <div className="flex-1 h-12 flex items-start justify-center flex-col px-4">
          <h1 className="font-bold text-gray-900 ">{topic.name}</h1>
          <p className="text-gray-600">{topic.description}</p>
        </div>
        <div className="w-40 h-12 flex justify-center items-center px-4">
          <CreatePostForm topicId={topic.id} />
        </div>
      </div>
      <Separator />
      <PostList data={posts} />
    </main>
  );
};

export default Page;
