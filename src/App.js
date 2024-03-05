import React from 'react';
import { Post } from './features/post/Post';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Post />
      </header>
    </div>
  );
}

export default App;
