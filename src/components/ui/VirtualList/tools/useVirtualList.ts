import { useEffect, useState } from "react";

import { VirtualList } from "src/types/virtual";
import getVirtualList from "./getVirtualList";

export default function useVirtualList<ElementData>(list: ElementData[]) {
  const [virtualList, setVirtualList] = useState<VirtualList<ElementData>>(
    getVirtualList(list)
  );

  useEffect(() => {
    const newVirtualList = getVirtualList(list);

    setVirtualList(newVirtualList);
  }, [list]);

  return virtualList;
}
