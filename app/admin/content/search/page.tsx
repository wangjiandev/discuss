import PostList from "@/components/post/post-list";
import { searchPosts } from "@/data/posts";

interface SearchPageProps {
  searchParams: Promise<{ query: string }>;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query } = await searchParams;
  const posts = await searchPosts(query);
  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-96">
        No posts found
      </div>
    );
  }
  return <PostList data={posts} />;
};

export default SearchPage;
