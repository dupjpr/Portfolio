import { useDispatch, useSelector } from "react-redux";
import setColorAction from './actionsRGB.js';

import './Answer.scss';

const Answer = ({ colorSet, mainColor }) => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { color1, color2, color3 } = colorSet
  const { r, g, b } = mainColor;

  const handleClick = (colorPick) => {

    const { r: Pr, g: Pg, b: Pb } = colorPick;

    if (r === Pr && g === Pg && b === Pb) {
      dispatch(setColorAction(!storeData.rgbChallenge.status, 'correcto +5 puntos', 5));
    } else {
      dispatch(setColorAction(storeData.rgbChallenge.status, 'incorrecto -1 punto', -1));
    }
  }

  return (
    <div className="answer-container">
      <div
        className='answer-container-item'
        style={{
          backgroundColor: `rgb( 
          ${color1?.r}, 
          ${color1?.g}, 
          ${color1?.b} 
          )` }}
        onClick={() => handleClick(color1)}
      >
      </div>
      <div
        className='answer-container-item'
        style={{
          backgroundColor: `rgb( 
            ${color2?.r}, 
            ${color2?.g}, 
            ${color2?.b} )`
        }}
        onClick={() => handleClick(color2)}
      >
      </div>
      <div
        className='answer-container-item'
        style={{
          backgroundColor: `rgb( 
            ${color3?.r}, 
            ${color3?.g}, 
            ${color3?.b} )`
        }}
        onClick={() => handleClick(color3)}
      >
      </div>
    </div>
  );
}
export default Answer;