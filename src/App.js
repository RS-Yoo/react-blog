import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p> 날짜 </p>
      <p> 상세내용 </p>
    </div>
  );
}

function App() {
  const blogTitle = "ReactBlog";
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [dates, setDates] = useState(['2월 17일 발행', '2월 18일 발행', '2월 19일 발행']);
  let [likes, setLikes] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  return (
    <div className="App">
    <div className="black-nav">
      <div>{blogTitle}</div>
    </div>

    {/* <button onClick={()=>{
      let copy = [...titles];
      copy[0] = '여자 코트 추천';
      setTitles(copy);
      }}>Change Title</button>

    <button onClick={()=>{
      let copy = [...titles];
      copy.sort();
      setTitles(copy);
      }}>Sort titles</button> */}

    {/* <div className="list">
      <h4 onClick={()=>{setModal(!modal)}}>{titles[0]} <span onClick={()=>{setLikes(likes+1)}}>👍</span> {likes} </h4>
      <p>{dates[0]}</p>
    </div>
    <div className="list">
      <h4 onClick={()=>{setModal(!modal)}}>{titles[1]}</h4>
      <p>{dates[0]}</p>
    </div>
    <div className="list">
      <h4 onClick={()=>{setModal(!modal)}}>{titles[2]}</h4>
      <p>{dates[0]}</p>
    </div> */}

    {
      titles.map((t, i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(!modal)}}>{t} <span onClick={()=>{
              let copy = [...likes];
              copy[i] += 1;
              setLikes(copy);
            }}>👍</span> {likes[i]} </h4>
            <p>{dates[i]}</p>
          </div>
        )
      })
    }

    {
      modal == true ? <Modal /> : null
    }

    </div>
  );
}

export default App;
