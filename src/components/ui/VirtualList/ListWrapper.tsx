import { FC } from "react";

import { VIRTUAL_LIST_PARAMS } from "src/constants/virtual";
import { VirtualList } from "src/types/virtual";
import ElementWrapper from "./ElementWrapper";

type ListWrapperProps<ElementData> = {
  count: number;
  visibleList: VirtualList<ElementData>;
  element: FC<{ data: ElementData }>;
};

export default function ListWrapper<ElementData>({
  count,
  visibleList,
  element: Element,
}: ListWrapperProps<ElementData>) {
  const rendered = visibleList.map((el) => (
    <ElementWrapper key={el.index} index={el.index}>
      <Element data={el.data} />
    </ElementWrapper>
  ));

  return (
    <div
      style={{
        position: "relative",
        height: VIRTUAL_LIST_PARAMS.elFullHeight * count,
      }}
    >
      {rendered}
    </div>
  );
}
