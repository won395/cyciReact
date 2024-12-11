import { useState } from "react"

export default function Red01() {

    const [data, setData] = useState(0);

    return (
        <div>
            <h1>Reducer 01</h1>
            {data}<br/>
            <input type="button" value="증가"
            onClick={e=> {
                setData(data+1)
            }}/><br/>
            <input type="button" value="감소"
            onClick={e=> {
                setData(data-1)
            }}/>
        </div>
    )

}