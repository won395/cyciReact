import axios from 'axios'
import { useRef, useState } from 'react';

export default function Ax1() {

    const [지역, 변경지역] = useState([]);
    const text = useRef(); //변수를 가상 dom에만 저장을 함 랜더 현상 x
    // 사용자에게 변화되는 데이터를 보여줄 필요가 없

    const text2 = useRef();

    function axios01() {
        console.log('axios get 방식');

        axios.get('http://localhost:8080/api/area/list')
        .then(res => {
            console.log(res);
            if(res.data.code === '200') {
                변경지역(res.data.data)
            }
        })

        //promise 라는 javaScript 기능하고 비슷 // ES6 문법

        
    }
    //useRef

    function axios02() {
        console.log(text.current.value)
        // text.current.focus();

        const obj = {
            id: '1'
        }

        console.log(obj);

        axios.get('http://localhost:8080/api/area/byId', {params: {
            id: '1'
        }})
        .then(res => {
            console.log(res);
        })
    }

    function axios03() {
        axios.post('http://localhost:8080/api/member/list')
        .then(res => {
            console.log(res);
        })
    }

    function axios04() {
        const obj = {
            'id': text2.current.value
        } // {"id": "hello world"}
        axios.post('http://localhost:8080/api/member/findId', JSON.stringify(obj)
        , {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        )
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <h1>Axios 연습</h1>
            <h4>get 방식</h4>
            <input type='button' onClick={axios01} value='get방식'/><br/>
            <input type='text' ref={text}/><br/>
            <input type='button' onClick={axios02} value='get방식2'/>

            <h4>post 방식</h4>
            {/*method // 전송방법: method, get, post (톰켓은 get, post만 지원) */}
            <input type='button' onClick={axios03} value='post 방식'/>
            <input type='text' ref={text2}/>
            <input type='button' onClick={axios04} value='post 방식2'/>
        </div>
    )
}