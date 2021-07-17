import { useDispatch, useSelector } from "react-redux";
import { displayHandle, cheking } from "./actionsTicTac";

const Board = ({ validation }) => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = (e, x, y, square) => {

    let plays = storeData.ticTac.plays;

    if ( validation && storeData.ticTac.tokenPlayerOne && storeData.ticTac.times < 9) {
      if (plays) {
        dispatch(displayHandle(storeData.ticTac.tokenPlayerOne, !plays, 1, true, square))
        dispatch(cheking({
          token: storeData.ticTac.tokenPlayerOne,
          xvalue: x,
          yvalue: y,
        }))
      } else {
        dispatch(displayHandle(storeData.ticTac.tokenPlayerTwo, !plays, 1, true, square))
        dispatch(cheking({
          token: storeData.ticTac.tokenPlayerTwo,
          xvalue: x,
          yvalue: y
        }))
      }
    }

  }

  return (
    <section className='mainTicTac-container'>
      <div
        className="square square-one"
        onClick={(e) => handleClick(e, 0, 0, 'square1')}
      >
        {storeData.ticTac.square1}
      </div>
      <div
        className="square square-two"
        onClick={(e) => handleClick(e, 0, 1, 'square2')}
      >
        {storeData.ticTac.square2}

      </div>
      <div
        className="square square-three"
        onClick={(e) => handleClick(e, 0, 2, 'square3')}
      >
        {storeData.ticTac.square3}

      </div>
      <div
        className="square square-four"
        onClick={(e) => handleClick(e, 1, 0, 'square4')}
      >
        {storeData.ticTac.square4}

      </div>
      <div
        className="square square-five"
        onClick={(e) => handleClick(e, 1, 1, 'square5')}
      >
        {storeData.ticTac.square5}

      </div>
      <div
        className="square square-six"
        onClick={(e) => handleClick(e, 1, 2, 'square6')}
      >
        {storeData.ticTac.square6}

      </div>
      <div
        className="square square-seven"
        onClick={(e) => handleClick(e, 2, 0, 'square7')}
      >
        {storeData.ticTac.square7}

      </div>
      <div
        className="square square-eight"
        onClick={(e) => handleClick(e, 2, 1, 'square8')}
      >
        {storeData.ticTac.square8}

      </div>
      <div
        className="square square-nine"
        onClick={(e) => handleClick(e, 2, 2, 'square9')}
      >
        {storeData.ticTac.square9}

      </div>
    </section>
  );
}

export default Board;