import PostList from "@/components/post/post-list";
import { searchPosts } from "@/data/posts";

interface SearchPageProps {
  searchParams: Promise<{ query: string }>;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query } = await searchParams;
  const posts = await searchPosts(query);
  return <PostList data={posts} />;
};

export default SearchPage;
