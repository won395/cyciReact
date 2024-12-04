import { useNavigate } from 'react-router-dom';
import './App.css';
import React, { useState } from "react";

function Singup() {
  const [item, setItem] = useState({
    id: "",
    pw: "",
    birthday: "",
    hobby: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setItem({ ...item, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입 정보:", item);
  };

  function send() {
    //alert();
    //localStorage.setItem('study', Singup);
    //navigate('/user');
    navigate('/user', { state: item });

}

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>아이디:</span>
          <input
            type="text"
            id="id"
            value={item.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>비밀번호:</span>
          <input
            type="password"
            id="pw"
            value={item.pw}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>생일:</span>
          <input
            type="date"
            id="birthday"
            value={item.birthday}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>취미:</span>
          <select id="hobby" value={item.hobby} onChange={handleChange}>
            <option value="">선택</option>
            <option value="reading">독서</option>
            <option value="sports">운동</option>
            <option value="music">음악 감상</option>
            <option value="travel">여행</option>
            <option value="game">게임</option>
          </select>
        </div>
        <input type='button' value='회원가입' onClick={send}/>
      </form>
    </div>
  );
}

export default Singup;