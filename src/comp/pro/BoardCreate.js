import { useState } from 'react';
import { createBoard } from '../api/Board';
import { useNavigate } from 'react-router-dom';

export default function BoardCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [memberId, setMemberId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        createBoard({ title, content, memberId }).then(res => {
            if (res.data.code === '200') {
                alert('글 작성 완료!');
                navigate('/board');
            }
        });
    };

    return (
        <div>
            <h1>글쓰기</h1>
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input
                type="text"
                placeholder="작성자 ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
            />
            <button onClick={handleSubmit}>작성</button>
        </div>
    );
}
