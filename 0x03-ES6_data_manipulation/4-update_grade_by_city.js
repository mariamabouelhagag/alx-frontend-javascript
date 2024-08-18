const updateStudentGradeByCity = (studentsList, city, newGrades) => studentsList
  .filter((objItem) => objItem.location === city)
  .map((list) => {
    const matchingGrade = newGrades.find(
      (item) => item.studentId === list.id,
    );

    const updatedList = { ...list };

    updatedList.grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return updatedList;
  });

export default updateStudentGradeByCity;
