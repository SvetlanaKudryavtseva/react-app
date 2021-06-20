import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let data_posts = [
  {id: 1, message: '1st message', likesCount: '23'},
  {id: 2, message: '2nd message', likesCount:'17'},
]
let data_dialogs = [
  {name: 'Olga', id: 1},
  {name: 'Sveta', id: 2},
  {name: 'Yulya', id: 3}
]
let data_messages = [
  {text: 'Olga: Hi', id: 1},
  {text: 'Sveta: Hi', id: 2},
  {text: 'Yulya: Hi hi', id: 3}
]

ReactDOM.render(
  <React.StrictMode>
    <App data_posts={data_posts} data_dialogs={data_dialogs} data_messages={data_messages}/>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
