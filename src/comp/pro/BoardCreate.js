import { useState } from 'react';
import { createBoard } from '../api/Board';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    height: 100px;
    resize: none;
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

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
        <Container>
            <Title>글쓰기</Title>
            <Input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Input
                type="text"
                placeholder="작성자 ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
            />
            <Button onClick={handleSubmit}>작성</Button>
        </Container>
    );
}
