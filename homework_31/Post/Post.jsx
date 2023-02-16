import React from "react";

const Post = (props) => {
    const {users} = props;

    return(
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    )
}

export default Post