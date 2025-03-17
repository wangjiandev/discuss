import CreateTopicForm from "@/components/topic/create-topic-form";
import TopicList from "@/components/topic/topic-list";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <div className="sticky top-0 h-screen w-[232px] bg-[#f6f6f9] flex flex-col items-center z-[1] border-r border-[#eaeaef]">
        <div className="flex items-center justify-between h-12 w-full px-4">
          <span className="text-[#8e8ea9] text-lg font-semibold">Topics</span>
        </div>
        <div className="flex w-full px-4">
          <div className="h-[1px] w-1/2 bg-[#eaeaef]"></div>
        </div>
        <div className="p-2 w-full">
          <CreateTopicForm />
        </div>
        <div className="pt-3 w-full px-4">
          <div className="text-[#666687] text-sm font-bold">
            <span>All Topics</span>
          </div>
          <TopicList />
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ContentLayout;
