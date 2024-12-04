export default function getTwoElementsArr (arr: any[]) {
  const list = [];

  for (let index = 0; index < arr.length; index += 2) {
    const elementData = [arr[index]];

    if (arr[index + 1]) {
      elementData.push(arr[index + 1]);
    }

    list.push(elementData);
  }

  return list;
};