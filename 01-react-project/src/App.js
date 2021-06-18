//import logo from './logo.svg';
import './App.css';
import Ten from './components/Ten/Ten';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const headings = {
  heading: 'First React App',
  subheading: 'Learning React and Redux'
}

const App = (props) => {
  let multiplication = {
    number: 5,
    factor: 2,
    operation: '*',
  }


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header data_headings={headings}/>
        <Navbar />
        <Ten data_multiplication={multiplication}/>
        <div className="app-wrapper__content">
         {/*  <Route path="/dialogs" route={ () => <Dialogs /> } />*/}
          <Route path='/profile' render={ () => <Profile data_posts={props.data_posts}/> }/>
          <Route path="/dialogs" component={Dialogs} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
