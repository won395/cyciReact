import { useLocation } from 'react-router-dom';

export default function User() {
    
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h1>회원 정보</h1>
      {data ? (
        <div>
          <p>아이디: {data.id}</p>
          <p>비밀번호: {data.pw}</p>
          <p>생일: {data.birthday}</p>
          <p>취미: {data.hobby}</p>
        </div>
      ) : (
        <p>회원 정보가 없습니다.</p>
      )}
    </div>
  );
}
