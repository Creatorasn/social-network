import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'scout post Squirrel', likesCount: 0},
  {id: 2, message: 'scout post Fox', likesCount: 10},
  {id: 3, message: 'scout post Tit', likesCount: 20}
]

let dialogs = [
  {id: 1, name: 'Squirrel'},
  {id: 2, name: 'Fox'},
  {id: 3, name: 'Tit'},
  {id: 4, name: 'Wolf'},
  {id: 5, name: 'Phoenix'}
]

let messages = [
  {id: 1, message: 'When did the first scouts appear?'},
  {id: 2, message: 'The scout movement originated a long time ago and still exists.'},
  {id: 3, message: 'It was his basic organizational principles that were adopted by the pioneer organization.'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
