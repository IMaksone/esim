import { FC, useRef } from "react";

import useVirtualization from "./tools/useVirtualization";
import useVirtualList from "./tools/useVirtualList";
import ListWrapper from "./ListWrapper";
import classNames from "src/helper/classNames";

import classes from "./virtual-list.module.scss";

type VirtualListProps<ElementData> = {
  className?: string;
  list: ElementData[];
  element: FC<{ data: ElementData }>;
};

export default function VirtualList<ElementData>({
  className,
  list,
  element,
}: VirtualListProps<ElementData>) {
  const ref = useRef<HTMLDivElement>(null);

  const virtualList = useVirtualList(list);

  const { visibleList, handleScroll } = useVirtualization<ElementData>(
    virtualList,
    ref?.current
  );

  const insideClassName = classNames(classes.wrapper, className || "");

  return (
    <div ref={ref} onScroll={handleScroll} className={insideClassName}>
      <ListWrapper
        count={virtualList.length}
        visibleList={visibleList}
        element={element}
      />
    </div>
  );
}
