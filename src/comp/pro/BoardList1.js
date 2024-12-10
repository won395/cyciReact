import { useEffect, useState } from 'react';
import { fetchBoards, deleteBoard, updateGood } from '../api/Board';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BoardArea from './BoardArea';

const Container = styled.div`
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
`;

const SearchBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
`;

const SearchButton = styled.button`
    padding: 10px 20px;
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

const WriteButton = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: #218838;
    }
`;

const BoardListContainer = styled.div`
    margin-top: 20px;
`;

export default function BoardList() {
    const [boards, setBoards] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        loadBoards();
    }, [keyword]);

    const loadBoards = () => {
        fetchBoards({ keyword }).then(res => {
            console.log(res.data);
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

    function good(idx) {
        updateGood(idx).then(res => {
            console.log('API Response:', res); // 응답 확인
            if (res.data.code === '200') {
                const updatedBoards = boards.map(board =>
                    board.idx === idx ? { ...board, good: (board.good || 0) + 1 } : board
                );
                setBoards(updatedBoards);
            } else {
                console.error('API Error:', res.data.message); // 서버 메시지 출력
                alert('추천 처리에 실패했습니다.');
            }
        }).catch(error => {
            console.error('Network Error:', error); // 네트워크 에러 확인
            alert('추천 요청 중 오류가 발생했습니다.');
        });
    }
    

    return (
        <Container>
            <Title>게시판</Title>

            <SearchBox>
                <Input
                    type="text"
                    placeholder="검색어 입력"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                />
                <SearchButton onClick={loadBoards}>검색</SearchButton>
            </SearchBox>

            <WriteButton to="/board/create">글쓰기</WriteButton>

            <BoardListContainer>
                {boards.map((board, index) => (
                    <BoardArea
                        key={index}
                        board={board}
                        onGoodUp={idx => good(idx)}
                    />
                ))}
            </BoardListContainer>
        </Container>
    );
}
