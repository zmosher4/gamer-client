import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getGameById } from '../managers/gameManager';
import { getAllReviews } from '../managers/reviewManager';

export const GameDetails = () => {
  const [game, setGame] = useState({});
  const { gameId } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchGame = async () => {
    const gameData = await getGameById(gameId);
    setGame(gameData);
  };
  const fetchReviewsForGame = async () => {
    const revData = await getAllReviews();
    const filteredReviews = revData.filter(
      (review) => review.game === parseInt(gameId)
    );
    setReviews(filteredReviews);
  };
  useEffect(() => {
    fetchGame();
    fetchReviewsForGame();
  }, [gameId]);

  return (
    <div>
      <h1>{game.title}</h1>
      <div>Designer: {game.designer}</div>
      <div>Released: {game.year_released}</div>
      <div>Number of players: {game.number_of_players}</div>
      <div>Estimated time to play: {game.game_length_hrs}</div>
      <div>Age recommendation: {game.age_rec}</div>
      <ul>
        Categories:{' '}
        {game.categories?.map((category) => {
          return <li key={category.id}>{category.name}</li>;
        })}
      </ul>
      <Link to={`/games/${gameId}/review`}>
        <button className="button rounded-md bg-blue-700 text-blue-100 p-3 mt-4">
          Review Game
        </button>
      </Link>
      <div>
        Reviews for {game.title}:
        {reviews.map((review) => {
          return (
            <div key={review.id}>
              <div>
                Review by: {review.user?.first_name} {review.user?.last_name}
              </div>
              <div> Rating: {review.number_rating} </div>
              <div> Comment: {review.comment}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
//Title
// Designer
// Year released
// Number of players
// Estimated time to play
// Age recommendation
// Categories
