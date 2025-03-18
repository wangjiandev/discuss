"use client";

import { searchAction } from "@/actions/search";
import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";

const ContentHeader = () => {
  const [query, setQuery] = useQueryState("query");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setQuery(null);
    } else {
      setQuery(e.target.value);
    }
  };

  return (
    <div className="h-full flex justify-start items-center pl-4">
      <form action={searchAction} className="w-1/4">
        <Input
          type="text"
          name="query"
          value={query || ""}
          onChange={onChange}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default ContentHeader;
