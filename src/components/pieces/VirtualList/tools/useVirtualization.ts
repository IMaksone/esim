import { useCallback, useEffect, useState } from "react";

import { VirtualList } from "src/types/virtual";
import getVisibleVirtualList from "./getVisibleVirtualList";

type Returned<ElementData> = {
  visibleList: VirtualList<ElementData>;
  handleScroll: React.UIEventHandler<HTMLDivElement>;
};

export default function useVirtualization<ElementData>(
  virtualList: VirtualList<ElementData>,
  virtualBoxElement: HTMLDivElement | null
): Returned<ElementData> {
  const [visibleList, setVisibleList] = useState<VirtualList<ElementData>>([]);

  const handleScrollCallback = useCallback(handleScroll, [
    virtualBoxElement,
    virtualList,
    setVisibleList,
  ]);

  useEffect(() => {
    handleScrollCallback();
  }, [virtualList, handleScrollCallback]);

  function handleScroll() {
    if (!virtualBoxElement) return;

    const visible = getVisibleVirtualList(virtualList, virtualBoxElement);

    setVisibleList(visible);
  }

  return {
    visibleList,
    handleScroll: handleScrollCallback,
  };
}
