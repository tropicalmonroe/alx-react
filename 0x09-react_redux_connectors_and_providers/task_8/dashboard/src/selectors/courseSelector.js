export const getListCourses = (state) => {
  const courses = state.course;

  if (courses) {
    return courses.valueSeq();
  }

  return courses;
};
