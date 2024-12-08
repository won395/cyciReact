import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

const Card = styled.div`
    border: 2px solid #ccc;
    border-radius: 8px;
    width: 550px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

const Info = styled.p`
    font-size: 16px;
    margin: 10px 0;
    color: #333;
`;

const ActionLink = styled.a`
    display: inline-block;
    margin: 10px;
    font-size: 16px;
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #0056b3;
    }
`;

export default function BoardArea(props) {
    const board = props.board;

    function goodUp(index) {
        console.log(index);
        props.onGoodUp(index);
    }

    return (
        <Container>
            <Card>
                <Info>IDX: {board.boardIdx}</Info>
                <Info>제목: {board.title}</Info>
                <Info>내용: {board.content}</Info>
                <Info>추천: {board.boardGood}</Info>
                <ActionLink
                    onClick={(e) => {
                        e.preventDefault();
                        goodUp(board.idx);
                    }}
                >
                    👍 추천
                </ActionLink>
                <ActionLink href={`/BoardDetail/${board.boardIdx}`}>상세보기</ActionLink>
            </Card>
        </Container>
    );
}
