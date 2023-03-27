import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');
const coursesNormalizer = (data) => {
  const normalizerData = normalizer(data, [courses]);
  return normalizerData.entities.courses;
};

export default coursesNormalizer
