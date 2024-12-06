import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'
import Inp1 from './comp/inp/input01'
import Ref1 from './comp/inp/Ref01'
import Oup1 from './comp/inp/output01'
import Singup from './comp/login/singup'
import User from './comp/login/user';
import Ax1 from './comp/ax/ax01'
import ProJoin from './comp/pro/Join'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/cal1"} element={<Calc1 />} />

          <Route path={"/inp1"} element={<Inp1 />} />
          <Route path={"/oup1"} element={<Oup1 />} />
          <Route path={"/ref1"} element={<Ref1 />} />

          <Route path={"/pro1"} element={<ProJoin />} />

          <Route path={"/singup"} element={<Singup />} />
          <Route path={"/user"} element={<User />} />

          <Route path={"/ax1"} element={<Ax1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function About() {
  return (
    <div style={{border: '2px blue solid'}}>
      <Link to="/">Home으로 이동</Link>
    </div>
  )
}

function Home() {
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About으로 이동</Link><br/>
      <Link to="/cal1">Cal1로 이동하기</Link><br/>

      <h2>데이터 옮기기</h2>
      <Link to="/inp1">데이터입력</Link><br/>
      <Link to="/oup1">데이터 출력</Link><br/>
      <Link to="/ref1">레퍼런스 사용하기</Link><br/>

      <h2>로그인</h2>
      <Link to="/singup">회원가입</Link><br/>

      <h4>Axios</h4>
      <Link to="/ax1">Axios 사용</Link><br/>

      <h4>과제</h4>
      <Link to="/pro1">회원가입 창</Link>


    </div>
  )
}

export default App;
