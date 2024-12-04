import { VIRTUAL_LIST_PARAMS } from "src/constants/virtual";
import { VirtualList } from "src/types/virtual";

const numberOfAdditionalVisibleElements = 7;

export default function getVisibleVirtualList<ElementData>(
  list: VirtualList<ElementData>,
  htmlWrapper: HTMLDivElement
) {
  let startIndex = 0;
  let endIndex = getNumberOfVisibleElements(window.innerHeight) + 1;

  if (htmlWrapper) {
    let countElements = getNumberOfVisibleElements(htmlWrapper.clientHeight);

    startIndex = getIndexOfFirstVisibleElement(htmlWrapper.scrollTop);

    if (startIndex >= numberOfAdditionalVisibleElements) {
      startIndex = addAdditionalElementsToBeginning(startIndex);
      countElements = addAdditionalElementsToCountElemnts(countElements);
    }

    endIndex = startIndex + countElements;
  }

  return list.slice(startIndex, endIndex);
}

const getNumberOfVisibleElements = (fullHeight: number) =>
  Math.ceil(fullHeight / VIRTUAL_LIST_PARAMS.elFullHeight) +
  numberOfAdditionalVisibleElements;

const getIndexOfFirstVisibleElement = (htmlWrapperScrollTop: number) =>
  Math.floor(htmlWrapperScrollTop / VIRTUAL_LIST_PARAMS.elFullHeight);

const addAdditionalElementsToBeginning = (startIndex: number) =>
  (startIndex -= numberOfAdditionalVisibleElements);
const addAdditionalElementsToCountElemnts = (countElements: number) =>
  (countElements += numberOfAdditionalVisibleElements);
