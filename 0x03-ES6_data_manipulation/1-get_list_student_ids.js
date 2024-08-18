const getListStudentIds = (list) => {
  if (!Array.isArray(list)) return [];

  return list.map((element) => element.id);
};

export default getListStudentIds;
