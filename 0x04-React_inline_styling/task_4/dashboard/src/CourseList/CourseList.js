import React from 'react';
import PropType from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" cellPadding="0" cellSpacing="0">
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        
	{listCourses.length > 0 ? (
           listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: "2em",
    width: "100%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
    marginBottom: "15em",
    marginLeft: "auto",
    marginRight: "auto",
  },

  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },

  td: {
    width: "80%",
  },

  tr: {
    "nth-child(2)": {
      textAlign: "left",
    },
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
