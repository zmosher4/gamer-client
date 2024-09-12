export const makeReview = async (review) => {
  return await fetch('http://localhost:8000/reviews', {
    method: 'POST',
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem('game_token')).token
      }`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });
};
export const getAllReviews = async () => {
  const response = await fetch('http://localhost:8000/reviews', {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem('game_token')).token
      }`,
    },
  });
  const reviews = await response.json();
  return reviews;
};
