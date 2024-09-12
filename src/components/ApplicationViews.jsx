import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Authorized } from './Authorized';
import { Login } from '../pages/Login.jsx';
import Home from '../pages/Home';

import { Register } from '../pages/Register.jsx';
import { AllGames } from './AllGames.jsx';
import { GameDetails } from './GameDetails.jsx';
import { NewGame } from './NewGame.jsx';
import { ReviewForm } from './ReviewForm.jsx';

export const ApplicationViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<Home />} />
          <Route path="/games">
            <Route index element={<AllGames />} />
            <Route path=":gameId" element={<GameDetails />} />
            <Route path=":gameId/review" element={<ReviewForm />} />
          </Route>

          <Route path="/create" element={<NewGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
