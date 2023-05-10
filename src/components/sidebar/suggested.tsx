import React, { useEffect, useState } from "react";

import Suggestion from "./suggestion";

function SuggestedList() {
  const [perpage, setPerpage] = useState(5);

  const suggestedList = [
    {
      "full_name": "Susana",
      "username": "susana",
      "tick": false,
    },
    {
      "full_name": "Kipsang Ruto",
      "username": "kipsang",
      "tick": true,
    },
    {
      "full_name": "The Vidshop",
      "username": "vidshop",
      "tick": true,
    }
  ];


  const handleSeeMore = () => {
    if (perpage != 20) {
      setPerpage((prev) => prev + 5);
    } else {
      setPerpage(5);
    }
  };

  useEffect(() => {
    const fetchSuggestedList = async () => {

    };

    fetchSuggestedList();
  }, [perpage]);

  return (
    <Suggestion
      title="Suggested accounts"
      list={suggestedList}
      onClick={handleSeeMore}
      perpage={perpage}
    />
  );
}

export default SuggestedList;
