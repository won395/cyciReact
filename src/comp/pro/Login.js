import { useNavigate } from "react-router-dom"

export default function Study() {

    const navigate = useNavigate

    return (
        <div>
            <h1>로그인</h1>
            <input type="text" placeholder="아이디 입력"/><br/>
            <input type="password" placeholder="패스워드 입력"/><br/>

            <input type="button" value='로그인'/>
            <input type="button" value='회원가입' onClick={
                () => {
                    navigate('/pro1');
                }
            }/>
        </div>
    )
}