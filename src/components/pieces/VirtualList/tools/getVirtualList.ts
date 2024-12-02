export default function getVirtualList<ElementData>(list: ElementData[]) {
  return list.map((data, index) => ({
    index: index,
    data: data,
  }));
}
