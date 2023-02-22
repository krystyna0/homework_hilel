import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState({});
    const {id } = useParams();

    useEffect(() => {
        const getOnePost = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((res) => res.json())
                .then((data) => setPost(data));
        }
        getOnePost();
    }, [id])

    return (
        <div>
            <div>Post page </div>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </div>
    )
};

export default Post;
