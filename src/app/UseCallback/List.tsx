import React, { useEffect, useState } from "react";

function List({ getItems }: { getItems: () => number[] }) {
  const [items, setItems] = useState<Array<number>>([]);
  useEffect(() => {
    setItems(getItems);
    console.log("update items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
