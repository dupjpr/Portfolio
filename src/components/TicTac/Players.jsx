import { useSelector } from "react-redux";

const Players = () => {

  const storeData = useSelector(state => state);

  return (
    <div className='mainTicTac-Players'>
      <div className="mainTicTac-Player1">
        <p>Player One:</p>
        <div>{storeData.ticTac.tokenPlayerOne}</div>
      </div>
      <div className="mainTicTac-Player2">
        <p>Player Two:</p>
        <div>{storeData.ticTac.tokenPlayerTwo}</div>
      </div>
    </div>
  );
}

export default Players;