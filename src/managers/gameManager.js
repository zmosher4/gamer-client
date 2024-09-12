export const getAllGames = async () => {
  const response = await fetch('http://localhost:8000/games', {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem('game_token')).token
      }`,
    },
  });
  const games = await response.json();
  return games;
};

export const getGameById = async (gameId) => {
  const response = await fetch(`http://localhost:8000/games/${gameId}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem('game_token')).token
      }`,
    },
  });
  const game = await response.json();
  return game;
};

export const createGame = async (game) => {
  return await fetch('http://localhost:8000/games', {
    method: 'POST',
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem('game_token')).token
      }`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
};
