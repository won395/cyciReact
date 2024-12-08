import { useEffect, useState } from 'react';
import { fetchBoards, deleteBoard, updateGood } from '../api/Board';
import { Link } from 'react-router-dom';
import BoardArea from './BoardArea';

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

    
    // function good(idx) {
    //     let obj = new Object();
    //     obj.idx = idx;

    //      updateGood(obj);

    //      const copyBoard = [...boards];
    //      copyBoard[idx-1] = { ...copyBoard[idx-1], good: copyBoard[idx-1].good+1 };
    //      setBoards(copyBoard);
    // }

    function good(idx) {
    updateGood(idx).then(res => {
        if (res.data.code === '200') {
            // API가 갱신된 값을 반환하지 않는 경우 클라이언트에서 직접 처리
            const updatedBoards = boards.map(board =>
                board.idx === idx ? { ...board, good: (board.good || 0) + 1 } : board
            );
            setBoards(updatedBoards);
        } else {
            alert('추천 처리에 실패했습니다.');
        }
    }).catch(() => {
        alert('추천 요청 중 오류가 발생했습니다.');
    });
}

   

    return (
        <div>
            <h1>게시판</h1>
            
            <input
                type="text"
                placeholder="검색어 입력"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
            />
            <input type="button" value="검색" onClick={loadBoards}/><br />
            <Link to="/board/create">글쓰기</Link>

            {/** 리스트 */}
            {boards.map(
                (board, index) => (
                    <BoardArea key={index} board={board} onGoodUp={
                        (idx) => {
                            const copy = boards.copy;
                            console.log('idx: ', idx);
                            good(idx);
                        }
                    }></BoardArea>
                )
            )}

        </div>
    );
}
