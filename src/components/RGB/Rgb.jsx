import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Answer from "./Answer";

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

  return (

    <section className='game-container'>
      <h1 className="game-container-title">rgb challenge</h1>
      <div className='game-container-game'>
        <h2>{storeData.rgbChallenge.score}</h2>
        <div className='quest'>rgb({`${r},${g},${b}`} )</div>
        <Answer colorSet={colorsObject} mainColor={mainColor} />
        {storeData.rgbChallenge.notification &&
          <div className="status">{storeData.rgbChallenge.notification}</div>}
      </div>
      <div className='game-container-text'>
        <h2>explanation of game</h2>
        <p>The map and underlying data set, which are now freely available to the public, depict more than 200,000 neurons and half a billion neural connections contained inside a cube of mouse brain no bigger than a grain of sand.
          The new research is part of the Machine Intelligence from Cortical Networks (MICrONS) program, which hopes to improve the next generation of machine-learning algorithms by reverse-engineering the cerebral cortex—the part of the brain that in mammals is responsible for higher functions like planning and reasoning. A consortium of researchers led by groups from the Allen Institute, Baylor College of Medicine, and Princeton University collected the data.
        </p>
      </div>
    </section>

  );
}

export default RGB;