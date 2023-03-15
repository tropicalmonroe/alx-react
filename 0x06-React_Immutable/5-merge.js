import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
  const list_1 = List(page1);
  const list_2 = List(page2);

  return list_1.concat(list_2);
}

export function mergeElements(page1, page2) {
  const map_1 = Map(page1);
  const map_2 = Map(page2);

  return map_1.merge(map_2);
}
