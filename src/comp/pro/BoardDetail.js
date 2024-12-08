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
                setBoard(prevBoard => ({
                    ...prevBoard,
                    good: prevBoard.good + 1
                }));
            } else {
                alert('추천 처리에 실패했습니다.');
            }
        }).catch(() => {
            alert('추천 요청 중 오류가 발생했습니다.');
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
                <p>추천 수: {board.good}</p>
                <button onClick={handleRecommend}>추천</button>
                <button onClick={handleDelete}>삭제</button>
                <Link to={`/board/edit/${idx}`}>수정</Link>
            </div>
        )
    );
}
