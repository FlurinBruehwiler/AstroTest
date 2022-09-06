import { useState } from "react";
import Fuse from "fuse.js";
import Kaese from "./Kaese";

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
        {searchResult.map((x) => {
          return (
            <a href={x.item.url} key={x.item.title}>
              <p>{x.item.title}</p>
              <p>{x.item.description}</p>
              <img src={x.item.image} alt="" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
