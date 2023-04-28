import React, { useMemo, useDeferredValue, useEffect } from "react";

export default function List({ input }: any): JSX.Element[] {
  const ListSize = 20000;
  const defferdInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < ListSize; i++) {
      //   l.push(<div key={i}>{input}</div>);
      l.push(<div key={i}>{defferdInput}</div>);
    }
    return l;
    //   }, [input]);
  }, [defferdInput]);

  useEffect(() => {
    console.log(`input:${input} \n Deffered: ${defferdInput}`);
  });

  return list;
}
