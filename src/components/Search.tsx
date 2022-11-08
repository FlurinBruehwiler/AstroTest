import { useEffect, useState } from "react";
import { Cheese, cheeses } from "../Cheese";
import Fuse from "fuse.js";
import SearchResult from "./SearchResult";

const fuse = new Fuse(cheeses, {
  keys: ["title"],
});

export default () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResult] = useState<Cheese[]>(cheeses);
  const [selectIndex, setSelectIndex] = useState(0);

  useEffect(() => {}, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    if (e.currentTarget.value === "") setSearchResult(cheeses);
    else setSearchResult(fuse.search(e.currentTarget.value).map((x) => x.item));
  };

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        console.log(selectIndex, searchResults.length);
        if (selectIndex < searchResults.length - 1)
          setSelectIndex(selectIndex + 1);
        break;
      case "ArrowUp":
        if (selectIndex > 0) setSelectIndex(selectIndex - 1);
        break;
      case "Enter":
        window.location.href = searchResults[selectIndex].url;
        break;
    }
  };

  return (
    <div className="w-[700px] bg-cc-600" id="cheesefinder">
      <div className="flex justify-center w-full self-center my-4">
        <input
          type="search"
          placeholder="Cheesefinder..."
          value={searchText}
          onChange={handleChange}
          onKeyDown={handleInputKeyPress}
          className="w-[500px] h-10 bg-cc-400 rounded-md p-3 hover:outline-none outline-none border-solid border-l-black placeholder-cc-200"
        />
        <button className="w-[40px] h-10 bg-cc-400 rounded-md p-3 ml-3"></button>
      </div>
      <div>
        {searchResults.map((x, i) => (
          <div key={x.title}>
            <SearchResult
              title={x.title}
              description={x.description}
              url={x.url}
              image={x.image}
              selected={selectIndex === i}
              isRight={i % 2 == 0}
            ></SearchResult>
          </div>
        ))}
      </div>
    </div>
  );
};
