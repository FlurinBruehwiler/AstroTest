import { useState } from "react";
import Fuse from "fuse.js";
import type { Cheese } from "./Cheeses";
import { cheeses } from "./Cheeses";
import SearchResult from "./SearchResult";
import '../global.css';

const fuse = new Fuse(cheeses, {
  keys: ["title"],
});

export default () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResult] = useState<Cheese[]>([]);
  const [selectIndex, setSelectIndex] = useState(0);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    setSearchResult(fuse.search(e.currentTarget.value).map((x) => x.item));
  };

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        setSelectIndex(selectIndex + 1)
        break;
      case "ArrowUp":
        setSelectIndex(selectIndex - 1)
        break;
      case "Enter":
        //executeLink
        break;
    }
  };

  return (
    <div>
      <input
        type="search"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleInputKeyPress}
        className="w-40"
      />
      <div>
        {(searchText === "" ? cheeses : searchResults).map((x, i) => (
          <div key={x.title}>
            <SearchResult
              title={x.title}
              description={x.description}
              url={x.url}
              image={x.image}
              selected={selectIndex === i}
            ></SearchResult>
          </div>
        ))}
      </div>
    </div>
  );
};
