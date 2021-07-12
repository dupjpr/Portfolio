import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Answer from "./Answer";

import setColorAction from "./actionsRGB";
import './rgb.scss';

const RGB = () => {

  const [colorsObject, setColorsObject] = useState('');
  const [mainColor, setMainColor] = useState('');
  const storeData = useSelector(state => state);

  useEffect(() => {

    const color = () => {

      const rgbColor = {};

      const random = () => {
        const colorNum = 255;
        return Math.floor(Math.random() * colorNum);
      }

      rgbColor.r = random();
      rgbColor.g = random();
      rgbColor.b = random();

      return rgbColor;

    }

    const colorSet = {
      color1: color(),
      color2: color(),
      color3: color()
    }

    setColorsObject(colorSet)

    const mainColorGenerator = () => {
      const colorSelected = Object.values(colorSet);
      return colorSelected[Math.floor(Math.random() * colorSelected.length)]
    }

    setMainColor(mainColorGenerator())

  }, [storeData.rgbChallenge.status]);

  const { r, g, b } = mainColor;

  // console.log( storeData.rgbChallenge.score);

  return (

    <section>
      <h1>rgb challenge</h1>
      <h2>{storeData.result}</h2>

      <div>rgb({`${r},${g},${b}`} )</div>

      <Answer colorSet={colorsObject} mainColor={mainColor} />

      {storeData.rgbChallenge.notification &&
        <div className="status">{storeData.rgbChallenge.notification}</div>}
    </section>


  );
}

export default RGB;