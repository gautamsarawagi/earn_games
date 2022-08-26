import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import {
  Academy,
  AmbassadorsProgram,
  Faq,
  GameSquare,
  Governance,
  LaunchPad,
  Leaderboard,
  MarketPlace,
  MyNft,
  MysteryBox,
  PlayLearn,
  StackEarn,
} from "./components";

function App() {
  return (
    <div>
      <Home>
      <Routes>
        <Route path="/" element={<GameSquare />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/ambassadors" element={<AmbassadorsProgram />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gamesquare" element={<GameSquare />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/launchpad" element={<LaunchPad />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/my-nft" element={<MyNft />} />
        <Route path="/mystery-box" element={<MysteryBox />} />
        <Route path="/play-and-learn" element={<PlayLearn />} />
        <Route path="/stack-and-earn" element={<StackEarn />} />
      </Routes>
      </Home>
    </div>
  );
}

export default App;
