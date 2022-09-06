import { useState } from "react";
import Fuse from "fuse.js";
import Kaese from "./Kaese";
import Cheese from "./Cheese";

const fuse = new Fuse(Kaese, {
  keys: ["title"],
});

export default () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    const res = fuse.search(e.target.value);
    setSearchResult(res);
    console.log(res);
  };

  return (
    <div>
      <input type="search" value={searchText} onChange={handleChange} />
      <div>
        {searchText === ""
          ? Kaese.map((x) => (
              <Cheese
                title={x.title}
                description={x.description}
                url={x.url}
                image={x.image}
                isSearching={false}
                id={x.key}
              ></Cheese>
            ))
          : searchResult.map((x) => (
              <Cheese
                title={x.item.title}
                description={x.item.description}
                url={x.item.url}
                image={x.item.image}
                isSearching={true}
                id={x.item.key}
              ></Cheese>
            ))}
      </div>
    </div>
  );
};
