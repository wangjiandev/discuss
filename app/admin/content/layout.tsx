import ContentHeader from "@/components/content-header";
import CreateTopicForm from "@/components/topic/create-topic-form";
import TopicList from "@/components/topic/topic-list";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <NuqsAdapter>
      <div className="flex min-h-screen">
        <div className="sticky top-0 h-screen w-[232px] bg-[#f6f6f9] flex flex-col items-center z-[1] border-r border-[#eaeaef]">
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
        <div className="flex-1 min-h-screen relative">
          <div className="fixed top-0 w-full flex flex-col gap-2 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Suspense fallback={<div>Loading...</div>}>
              <ContentHeader />
            </Suspense>
          </div>
          <div className="pt-16">{children}</div>
        </div>
      </div>
    </NuqsAdapter>
  );
};

export default ContentLayout;
