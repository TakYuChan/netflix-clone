import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import S from "./styles/player.style";

export const PlayerContext = createContext();

function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <S.Container {...restProps}>{children}</S.Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <S.Overlay onClick={() => setShowPlayer(false)}>
          <S.Inner>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <S.Close />
          </S.Inner>
        </S.Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <S.Button onClick={() => setShowPlayer(!showPlayer)}>Play</S.Button>;
};

export default Player;
