export const getAllCategories = async () => {
  const response = await fetch('http://localhost:8000/categories', {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem('game_token')).token
      }`,
    },
  });
  const categories = await response.json();
  return categories;
};
