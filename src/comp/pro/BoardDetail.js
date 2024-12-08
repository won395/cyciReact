import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchBoardDetail, updateGood, deleteBoard } from '../api/Board';
import { useEffect, useState } from 'react';
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
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
`;

const Content = styled.p`
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #555;
`;

const Info = styled.p`
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ danger }) => (danger ? '#d9534f' : '#0056b3')};
    }

    background-color: ${({ danger }) => (danger ? '#dc3545' : '#007bff')};
    color: white;
`;

const EditLink = styled(Link)`
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    transition: background-color 0.3s;

    &:hover {
        background-color: #218838;
    }
`;

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

    <h1></h1>
    return (
        board && (
            <Container>
                <Title>{board.title}</Title>
                <Content>{board.content}</Content>
                <Info>추천 수: {board.good}</Info>
                <ButtonContainer>
                    <Button onClick={handleRecommend}>추천</Button>
                    <Button danger onClick={handleDelete}>삭제</Button>
                    <EditLink to={`/board/edit/${idx}`}>수정</EditLink>
                </ButtonContainer>
            </Container>
        )
    );
}
