import getListStudentIds from './1-get_list_student_ids';

const getStudentIdsSum = (objectList) => {
  const studentIds = getListStudentIds(objectList);
  return studentIds.reduce((acc, cur) => acc + cur, 0);
};

export default getStudentIdsSum;
