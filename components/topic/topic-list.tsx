import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getTopics } from "@/data/topic";
import { Terminal } from "lucide-react";
import Link from "next/link";

const TopicList = async () => {
  const topics = await getTopics();
  return (
    <div className="flex flex-col gap-2 py-2">
      {topics.map((topic) => (
        <Link key={topic.id} href={`/admin/content/topics/${topic.id}`}>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>{topic.name}</AlertTitle>
            <AlertDescription>{topic.posts.length} posts</AlertDescription>
          </Alert>
        </Link>
      ))}
    </div>
  );
};

export default TopicList;
