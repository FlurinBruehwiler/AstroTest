import { useState } from "react";
import Fuse from "fuse.js";
import type { Cheese } from "./Cheeses";
import { cheeses } from "./Cheeses";
import SearchResult from "./SearchResult";

const fuse = new Fuse(cheeses, {
  keys: ["title"],
});

interface FuseSearchResult {
  item: Cheese;
}

export default () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResult] = useState<Cheese[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    setSearchResult(fuse.search(e.currentTarget.value).map((x) => x.item));
  };

  return (
    <div>
      <input
        type="search"
        value={searchText}
        onChange={handleChange}
        className="w-40"
      />
      <div>
        {(searchText === "" ? cheeses : searchResults).map((x) => (
          <div key={x.title}>
            <SearchResult
              title={x.title}
              description={x.description}
              url={x.url}
              image={x.image}
            ></SearchResult>
          </div>
        ))}
      </div>
    </div>
  );
};
