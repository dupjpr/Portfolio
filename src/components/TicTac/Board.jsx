import { useDispatch, useSelector } from "react-redux";

import { displayHandle, cheking } from "./actionsTicTac";

const Board = ({ validation }) => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = (e, x, y) => {

    const plays = storeData.ticTac.plays;

    if (validation && storeData.ticTac.tokenPlayerOne && storeData.ticTac.times < 9) {
      if (plays) {
        console.log('player one');
        dispatch(displayHandle(storeData.ticTac.tokenPlayerOne, !plays, 1))
        dispatch(cheking({
          token: storeData.ticTac.tokenPlayerOne,
          xvalue: x,
          yvalue: y
        }))
        e.target.innerHTML = storeData.ticTac.tokenPlayerOne;
      } else {
        dispatch(displayHandle(storeData.ticTac.tokenPlayerOne, !plays, 1))
        dispatch(cheking({
          token: storeData.ticTac.tokenPlayerTwo,
          xvalue: x,
          yvalue: y
        }))
        console.log('player two');
        e.target.innerHTML = storeData.ticTac.tokenPlayerTwo;
      }
    }

  }

  return (
    <section className='mainTicTac-container'>
      <div
        className="square square-one"
        onClick={(e) => handleClick(e, 0, 0)}
      >

      </div>
      <div
        className="square square-two"
        onClick={(e) => handleClick(e, 0, 1)}
      >

      </div>
      <div
        className="square square-three"
        onClick={(e) => handleClick(e, 0, 2)}
      >

      </div>
      <div
        className="square square-four"
        onClick={(e) => handleClick(e, 1, 0)}
      >

      </div>
      <div
        className="square square-five"
        onClick={(e) => handleClick(e, 1, 1)}
      >

      </div>
      <div
        className="square square-six"
        onClick={(e) => handleClick(e, 1, 2)}
      >

      </div>
      <div
        className="square square-seven"
        onClick={(e) => handleClick(e, 2, 0)}
      >

      </div>
      <div
        className="square square-eight"
        onClick={(e) => handleClick(e, 2, 1)}
      >

      </div>
      <div
        className="square square-nine"
        onClick={(e) => handleClick(e, 2, 2)}
      >

      </div>
    </section>
  );
}

export default Board;