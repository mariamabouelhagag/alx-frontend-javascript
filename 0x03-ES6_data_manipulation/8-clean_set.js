const cleanSet = (set, startString) => {
  const stringArr = [];

  if (startString && startString.length > 0) {
    for (const el of set) {
      if (typeof el === 'string' && el.startsWith(startString)) {
        stringArr.push(el.substring(startString.length));
      }
    }
  }

  return stringArr.join('-');
};

export default cleanSet;
