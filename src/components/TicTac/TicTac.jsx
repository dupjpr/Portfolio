
import './ticTac.scss';

const TicTac = () => {
  return (
    <main className='mainTicTac'>
      <h1>this will be the tic tac toe game</h1>
      <p>select your token</p>
      <section className='mainTicTac-container'>
        <div className="square square-one">1</div>
        <div className="square square-two">2</div>
        <div className="square square-three">3</div>
        <div className="square square-four">4</div>
        <div className="square square-five">5</div>
        <div className="square square-six">6</div>
        <div className="square square-seven">7</div>
        <div className="square square-eight">8</div>
        <div className="square square-nine">9</div>
      </section>
    </main>
  );
}

export default TicTac;