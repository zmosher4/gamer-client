import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getGameById } from '../managers/gameManager';
import { makeReview } from '../managers/reviewManager';

export const ReviewForm = () => {
  const [review, setReview] = useState({});
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const navigate = useNavigate();

  const fetchGame = async () => {
    const gameData = await getGameById(gameId);
    setGame(gameData);
  };
  useEffect(() => {
    fetchGame();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewToSend = { ...review, gameId };

    await makeReview(reviewToSend);
    navigate(`/games/${gameId}`);
  };

  return (
    <div>
      <h1>Create a review for: {game.title}</h1>
      <main className="container--login">
        <section>
          <form className="form--login">
            <fieldset className="mt-4">
              <label htmlFor="rating">Number rating:</label>
              <input
                id="rating"
                type="text"
                onChange={(e) => {
                  const copy = { ...review };
                  copy.number_rating = parseInt(e.target.value);
                  setReview(copy);
                }}
                value={review.number_rating || ''}
                className="form-control"
              />
            </fieldset>
            <fieldset className="mt-4">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                rows="40"
                cols="70"
                onChange={(e) => {
                  const copy = { ...review };
                  copy.comment = e.target.value;
                  setReview(copy);
                }}
                value={review.comment || ''}
                className="form-control"
              />
            </fieldset>
            <fieldset>
              <button
                onClick={handleSubmit}
                className="button rounded-md bg-blue-700 text-blue-100 p-3 mt-4"
              >
                Save
              </button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
};
