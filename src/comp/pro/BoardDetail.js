import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchBoardDetail, updateGood, deleteBoard } from '../api/Board';
import { useEffect, useState } from 'react';

export default function BoardDetail() {
    const { idx } = useParams();
    const navigate = useNavigate();
    const [board, setBoard] = useState(null);

    useEffect(() => {
        fetchBoardDetail(idx).then(res => {
            if (res.data.code === '200') {
                setBoard(res.data.data);
            }
        });
    }, [idx]);

    const handleRecommend = () => {
        updateGood(idx).then(res => {
            if (res.data.code === '200') {
                setBoard({ ...board, good: board.good + 1 });
            }
        });
    };

    const handleDelete = () => {
        deleteBoard(idx).then(res => {
            if (res.data.code === '200') {
                alert('삭제 완료!');
                navigate('/board');
            }
        });
    };

    return (
        board && (
            <div>
                <h1>{board.title}</h1>
                <p>{board.content}</p>
                <button onClick={handleRecommend}>추천: {board.good}</button>
                <button onClick={handleDelete}>삭제</button>
                <Link to={`/board/edit/${idx}`}>수정</Link>
            </div>
        )
    );
}
