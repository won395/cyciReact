import { useEffect, useState } from 'react';
import { fetchBoards, deleteBoard } from '../api/Board';
import { Link } from 'react-router-dom';

export default function BoardList() {
    const [boards, setBoards] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        loadBoards();
    }, [keyword]);

    const loadBoards = () => {
        fetchBoards({ keyword }).then(res => {
            if (res.data.code === '200') {
                setBoards(res.data.data);
            }
        });
    };

    const handleDelete = (boardId) => {
        deleteBoard(boardId).then(res => {
            if (res.data.code === '200') {
                alert('삭제 완료!');
                loadBoards();
            }
        });
    };

    return (
        <div>
            <h1>게시판</h1>
            <input
                type="text"
                placeholder="검색어 입력"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={loadBoards}>검색</button><br />
            <Link to="/board/create">글쓰기</Link>
            <ul>
                {boards.map(board => (
                    <li key={board.idx}>
                        <Link to={`/board/${board.idx}`}>{board.title}</Link>
                        <input type='button' onClick={() => handleDelete(board.idx)}>삭제</input>
                    </li>
                ))}
            </ul>
        </div>
    );
}
