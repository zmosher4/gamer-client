import { useEffect, useState } from 'react';
import { getAllCategories } from '../managers/categoryManager';
import { createGame } from '../managers/gameManager';
import { useNavigate } from 'react-router-dom';

export const NewGame = () => {
  const [game, setGame] = useState({});
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const catData = await getAllCategories();
    setCategories(catData);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createGame(game);
    navigate('/games');
  };

  return (
    <main className="container--login">
      <section>
        <form className="form--login">
          <h1 className="text3xl">Add a game</h1>
          <fieldset className="mt-4">
            <label htmlFor="game">Title:</label>
            <input
              id="game"
              type="text"
              onChange={(e) => {
                const copy = { ...game };
                copy.title = e.target.value;
                setGame(copy);
              }}
              value={game.title || ''}
              className="form-control"
            />
          </fieldset>

          <fieldset className="mt-4">
            <label htmlFor="designer">Designer:</label>
            <input
              id="designer"
              type="text"
              onChange={(e) => {
                const copy = { ...game };
                copy.designer = e.target.value;
                setGame(copy);
              }}
              value={game.designer || ''}
              className="form-control"
            />
          </fieldset>
          <fieldset className="mt-4">
            <label htmlFor="release_year">Release Year:</label>
            <input
              id="release-year"
              type="text"
              onChange={(e) => {
                const copy = { ...game };
                copy.year_released = parseInt(e.target.value);
                setGame(copy);
              }}
              value={game.year_released || ''}
              className="form-control"
            />
          </fieldset>
          <fieldset className="mt-4">
            <label htmlFor="players">Number of players:</label>
            <input
              id="players"
              type="text"
              onChange={(e) => {
                const copy = { ...game };
                copy.number_of_players = parseInt(e.target.value);
                setGame(copy);
              }}
              value={game.number_of_players || ''}
              className="form-control"
            />
          </fieldset>
          <fieldset className="mt-4">
            <label htmlFor="length">Time to play (hours):</label>
            <input
              id="length"
              type="text"
              onChange={(e) => {
                const copy = { ...game };
                copy.game_length_hrs = parseInt(e.target.value);
                setGame(copy);
              }}
              value={game.game_length_hrs || ''}
              className="form-control"
            />
          </fieldset>
          <fieldset className="mt-4">
            <label htmlFor="age">Age recommendation:</label>
            <input
              id="age"
              type="text"
              onChange={(e) => {
                const copy = { ...game };
                copy.age_rec = parseInt(e.target.value);
                setGame(copy);
              }}
              value={game.age_rec || ''}
              className="form-control"
            />
          </fieldset>
          <fieldset className="mt-4">
            <label htmlFor="category"> Category </label>
            <br />
            <select
              id="type"
              className="form-control"
              onChange={(e) => {
                const copy = { ...game };
                copy.categories = [];
                copy.categories.push(parseInt(e.target.value));
                setGame(copy);
              }}
            >
              <option value={0}>- Select a category -</option>
              {categories.map((c) => (
                <option key={`category-${c.id}`} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <button
              onClick={handleSubmit}
              className="button rounded-md bg-blue-700 text-blue-100 p-3 mt-4"
            >
              Add Game
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  );
};
// # Title
// # Designer
// # Year released
// # Number of players
// # Estimated time to play
// # Age recommendation
// # Categories
