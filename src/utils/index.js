export const getUser = () => {
  const item = localStorage.getItem('userObj');
  if (!item) {
    return {};
  }

  const obj = JSON.parse(item);
  return obj;
};

export const setUser = val => {
  localStorage.setItem('userObj', JSON.stringify(val));
};
