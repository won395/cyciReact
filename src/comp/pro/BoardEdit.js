import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchBoardDetail, updateBoard } from '../api/Board';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    height: 150px;
    resize: none;
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

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
        <Container>
            <Title>글 수정</Title>
            <Input
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button onClick={handleSubmit}>수정</Button>
        </Container>
    );
}
