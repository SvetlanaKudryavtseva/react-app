import logo from './logo.svg';
import './App.css';
import OpenAllMaps from './Map/all-maps';
// import openYandex from './Map/Yandex';
import Technologies from './Technologies/Technologies';
import ReactTechnologies from './Technologies/ReactTechnologies';


const App = () => {
  return (
    <div>
      <Technologies />
      <ReactTechnologies />
      {/* <openYandex /> */}
    </div>
  );
}

export default App;
