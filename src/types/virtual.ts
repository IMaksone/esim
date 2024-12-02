export type VirtualElement<Data> = {
  index: number;
  data: Data;
};

export type VirtualList<Data> = VirtualElement<Data>[];
