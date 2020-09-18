import React, { useState, createContext } from "react";

const PlayerContext = createContext();

function playerContextProvider({ children }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <playerContext.Provider value={{ showPlayer, setShowPlayer }}>
      {children}
    </playerContext.Provider>
  );
}

export { PlayerContext, playerContextProvider };
