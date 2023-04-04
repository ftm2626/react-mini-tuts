import React, { useEffect, useState } from "react";

function List({ getItems }: { getItems: (increment: number) => number[] }) {
  const [items, setItems] = useState<Array<number>>([]);
  useEffect(() => {
    setItems(getItems(1));
    console.log("update items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
