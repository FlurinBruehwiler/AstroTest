import { useState } from "react";
import { Cheese, cheeses } from "../Cheese";
import Fuse from "fuse.js";
import SearchResult from "./SearchResult";

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
        setSelectIndex(selectIndex + 1);
        break;
      case "ArrowUp":
        setSelectIndex(selectIndex - 1);
        break;
      case "Enter":
        //executeLink
        break;
    }
  };

  return (
    <div className="w-[700px]">
      <input
        type="search"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleInputKeyPress}
        className="w-full h-10 bg-slate-400 rounded-md p-3 hover:outline-none outline-none"
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
