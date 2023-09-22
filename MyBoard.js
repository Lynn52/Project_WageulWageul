import {useState} from "react";

function MyBoard(){
    const[newPost, setNewPost] = useState({title : '', content : ''});
    const[posts, setPosts] = useState([]);

    return(
        <>
            <div className="purple-nav">
                <h1>와글와글 게시판</h1>
            </div>
            <div className="body">
                <h2>새 게시글 작성</h2>
                <input type="text" placeholder="제목"
                        onChange={(e)=>{
                            setNewPost({...newPost, title : e.target.value});
                        }}>
                </input><br></br>
                <textarea placeholder="내용"
                            onChange={(e)=>{
                                setNewPost({...newPost, content : e.target.value});
                            }}>
                </textarea><br></br>

                <button onClick={()=>{
                    if(newPost.title && newPost.content){
                        const updatePosts = [...posts, {...newPost, id : Date.now()}]
                        setPosts(updatePosts);
                        setNewPost({title : '', content : ''});
                    }
                }}>게시</button>
            </div>

            <div className="body">
                <h2>게시글 목록</h2>
                <div className="bgArea">
                {
                    posts.map((post)=>{
                        return(
                        <span key={post.id}>
                            <h3 className="postTitle">{post.title}</h3>
                            <div className="postContent">{post.content}</div>
                        </span>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default MyBoard;