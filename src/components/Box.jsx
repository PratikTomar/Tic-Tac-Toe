import "../App.css";
import "./Box.css";
import Icons from "./Icons";

const Box = ({ onPlayGame, player, idx, gameFinish }) => {
  let icon = <Icons />;
  player === "X"
    ? (icon = <Icons playerName="X" />)
    : player === "O"
    ? (icon = <Icons playerName="O" />)
    : (icon = <Icons playerName="" />);

  const gameHandler = (index) => {
    onPlayGame(index);
  };
  return (
    <>
      <div
        className="box"
        onClick={() => !gameFinish && player === "" && gameHandler(idx)}
      >
        {icon}
      </div>
    </>
  );
};

export default Box;
