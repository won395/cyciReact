import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchBoardDetail, updateBoard } from '../api/Board';

export default function BoardEdit() {
    const { idx } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchBoardDetail(idx).then(res => {
            if (res.data.code === '200') {
                setTitle(res.data.data.title);
                setContent(res.data.data.content);
            }
        });
    }, [idx]);

    const handleSubmit = () => {
        updateBoard({ boardId: idx, title, content }).then(res => {
            if (res.data.code === '200') {
                alert('수정 완료!');
                navigate(`/board/${idx}`);
            }
        });
    };

    return (
        <div>
            <h1>글 수정</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSubmit}>수정</button>
        </div>
    );
}
