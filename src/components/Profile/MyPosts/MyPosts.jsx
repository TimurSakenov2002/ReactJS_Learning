import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

function MyPosts(props){

    let postsData = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
          <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
              {postsData}
          </div>
          </div>
    )
}

export default MyPosts;