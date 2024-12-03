import { ReactNode } from "react";

import { VIRTUAL_LIST_PARAMS } from "src/constants/virtual";

type ElementWrapperProps = {
  index: number;
  children: ReactNode;
};

export default function ElementWrapper({
  index,
  children,
}: ElementWrapperProps) {
  const styles = {
    position: "absolute" as any,
    height: VIRTUAL_LIST_PARAMS.elHeight,
    top: index * VIRTUAL_LIST_PARAMS.elFullHeight,
  };

  return <div style={styles}>{children}</div>;
}
