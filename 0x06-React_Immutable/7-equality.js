import { is } from 'immutable';

export default function areMapsEqual(map_1, map_2) {
  return is(map_1, map_2);
}
