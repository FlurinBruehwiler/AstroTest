import { useState } from "react";

export default () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);

    
  };

  return (
    <div>
      <input type="search" value={searchText} onChange={handleChange} />
      {searchText}
    </div>
  );
};
