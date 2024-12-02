import { FC, useRef } from "react";

import useVirtualization from "./tools/useVirtualization";
import useVirtualList from "./tools/useVirtualList";
import ListWrapper from "./ListWrapper";

type VirtualListProps<ElementData> = {
  list: ElementData[];
  element: FC<{ data: ElementData }>;
};

export default function VirtualList<ElementData>({
  list,
  element,
}: VirtualListProps<ElementData>) {
  const ref = useRef<HTMLDivElement>(null);

  const virtualList = useVirtualList(list);

  const { visibleList, handleScroll } = useVirtualization<ElementData>(
    virtualList,
    ref?.current
  );

  return (
    <div ref={ref} onScroll={handleScroll}>
      <ListWrapper
        count={virtualList.length}
        visibleList={visibleList}
        element={element}
      />
    </div>
  );
}
