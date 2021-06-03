import logo from './logo.svg';
import './App.css';
import openAllMaps from './Map/all-maps';


const App = () => {
  return (
    <div>
      <Technologies />
      <ReactTechnologies />
      <openAllMaps />
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
      </ul>
    </div>
  )
}
const ReactTechnologies = () => {
  return (
    <div>
      <ul>
        <li>react</li>
        <li>redux</li>
      </ul>
    </div>
  )
}

export default App;
