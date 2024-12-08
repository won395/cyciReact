export default function BoardArea(props) {

    const board = props.board;
    const index = props.index;

    function goodUp(index) {
        console.log(index);
        props.onGoodUp(index);
    }

    return (
        <div key={index} style={{
            'border': '2px solid gray',
            'width' : '400px',
            'margin': '10px',
            'padding': '10px',
            'cursor' : 'pointer'
        }}>
            <p>IDX: {board.idx}</p>
            <p>제목: {board.title}</p>
            <p>내용: {board.content}</p>
            <p>추천: {board.good}</p>
            <a onClick={
                e => {
                    e.preventDefault();
                    goodUp(board.idx);
                }
            }>👍 추천 </a><br/>

            <a href={`/BoardDetail/${board.idx}`}>상세보기</a><br/>
        </div>
    );
}
