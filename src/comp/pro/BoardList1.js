import { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../api/Board';
import { Link } from 'react-router-dom';

export default function BoardList() {
    const [posts, setPosts] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        loadPosts();
    }, [keyword]);

    const loadPosts = () => {
        fetchPosts({ keyword }).then(res => {
            if (res.data.code === 200) {
                setPosts(res.data.data);
            }
        });
    };

    const handleDelete = (postId) => {
        deletePost(postId).then(res => {
            if (res.data.code === 200) {
                alert('삭제 완료!');
                loadPosts();
            }
        });
    };

    return (
        <div>
            <h1>게시판</h1>
            <input
                type="text"
                placeholder="검색어 입력"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={loadPosts}>검색</button>
            <Link to="/board/create">글쓰기</Link>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/board/${post.id}`}>{post.title}</Link>
                        <button onClick={() => handleDelete(post.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
