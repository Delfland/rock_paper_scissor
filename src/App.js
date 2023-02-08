import './App.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import background from "./images/p02y7swm.jpg";
import Game from './container/Game';

function App() {

  setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/');

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
