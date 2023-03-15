import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map_1 = Map(Page1);
  const map_2 = Map(Page2);

  return map_1.mergeDeep(map_2);
}
