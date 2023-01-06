import './App.css';
import background from "./images/p02y7swm.jpg";
import Game from './container/Game';

function App() {
  return (
    <div id='background' style={{ backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    width:'100%',
    height:'100%'
    }}>
    <Game/>
    </div>
  );
}

export default App;
