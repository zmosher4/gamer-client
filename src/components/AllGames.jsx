import { useEffect, useState } from 'react';
import { getAllGames } from '../managers/gameManager';
import { Link } from 'react-router-dom';

export const AllGames = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const gameData = await getAllGames();
    setGames(gameData);
  };
  useEffect(() => {
    fetchGames();
  }, []);

  return games.map((game) => {
    return (
      <div key={game.id}>
        <Link to={`/games/${game.id}`}>
          <h1>{game.title}</h1>
        </Link>
      </div>
    );
  });
};
