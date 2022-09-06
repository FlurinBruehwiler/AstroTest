import { useState } from "react";
import Fuse from "fuse.js";

const books = [
  {
    title: "Emmentaler",
  },
  {
    title: "Gruyere",
  },
  {
    title: "Appenzeller",
  },
  {
    title: "Tilsiter",
  },
  {
    title: "Scharfi Maxxx",
  },
  {
    title: "Sbrinz",
  },
  {
    title: "Tete de moine",
  },
  {
    title: "Raclette",
  },
  {
    title: "Fondue Käse",
  },
  {
    title: "Bündner Bergkäse",
  },
  {
    title: "Vacherin mont dor",
  },
  {
    title: "Swizzrocker",
  },
  {
    title: "Berner Hobelkäse",
  },
  {
    title: "Tessiner Alpkäse",
  },
  {
    title: "Tomme Vaudiose",
  },
  {
    title: "Füürtüfel",
  },
  {
    title: "Würziger Bruno",
  },
  {
    title: "Aletsch Carnotzet",
  },
];

const fuse = new Fuse(books, {
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
          return <p key={x.item.refIndex}>{x.item.title}</p>;
        })}
      </div>
    </div>
  );
};
