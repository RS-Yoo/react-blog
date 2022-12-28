import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titles[props.clickedTitle]}</h4>
      <p> 날짜 </p>
      <p> 상세내용 </p>
      <button onClick={props.onClick}>글 수정</button>
    </div>
  );
}

function App() {
  const blogTitle = "ReactBlog";
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [dates, setDates] = useState(['2월 17일 발행', '2월 18일 발행', '2월 19일 발행']);
  let [likes, setLikes] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [clickedTitle, setClickedTitle] = useState();

  let [inputTitle, setInputTitle] = useState();

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
            <h4 onClick={()=>{
              setModal(!modal);
              setClickedTitle(i)
              }}>{t} <span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...likes];
              copy[i] += 1;
              setLikes(copy);
            }}>👍</span> {likes[i]} </h4>
            <p>{dates[i]}</p><button onClick={() => {
              let titleCopy = [...titles];
              titleCopy.splice(i, 1);
              setTitles(titleCopy);
              let likeCopy = [...likes];
              likeCopy.splice(i, 1);
              setLikes(likeCopy);
              let dateCopy = [...dates];
              dateCopy.splice(i, 1);
              setDates(dateCopy);
            }}>삭제</button>
          </div>
        )
      })
    }

    {
      modal == true ? <Modal titles={titles} onClick={()=>{
      let copy = [...titles];
      copy[0] = '여자 코트 추천';
      setTitles(copy);}} clickedTitle={clickedTitle} /> : null
    }

    <input onChange={(e) => {
      setInputTitle(e.target.value)
    }} />
    <button onClick={() => {
      let titleCopy = [inputTitle, ...titles];
      setTitles(titleCopy);
      let likeCopy = [0, ...likes];
      setLikes(likeCopy);
      let dateCopy = ['2월 20일 발행', ...dates];
      setDates(dateCopy);
    }}>Post</button>

    </div>
  );
}

export default App;
