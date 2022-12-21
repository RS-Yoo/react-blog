import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const blogTitle = "ReactBlog";
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [dates, setDates] = useState(['2월 17일 발행']);
  let [likes, setLikes] = useState(0);

  return (
    <div className="App">
    <div className="black-nav">
      <div>{blogTitle}</div>
    </div>
    <button onClick={()=>{setTitles(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])}}>Change Title</button>
    <div className="list">
      <h4>{titles[0]} <span onClick={()=>{setLikes(likes+1)}}>👍</span> {likes} </h4>
      <p>{dates[0]}</p>
    </div>
    <div className="list">
      <h4>{titles[1]}</h4>
      <p>{dates[0]}</p>
    </div>
    <div className="list">
      <h4>{titles[2]}</h4>
      <p>{dates[0]}</p>
    </div>
    </div>
  );
}

export default App;
