import axios from 'axios'
import { useState } from 'react';

export default function Ax1() {

    const [지역, 변경지역] = useState([]);

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

    return (
        <div>
            <h1>Axios 연습</h1>
            <input type='button' onClick={axios01} value='get방식'/>
        </div>
    )
}