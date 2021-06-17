import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(){
    return (
          <div>My posts
            <div>
              <textarea></textarea>
              <button>Add post</button>
            </div>
            <div className={s.posts}>
            <Post message="Hi babe"/>
            <Post message="Ola todos!"/>
            
          </div>
          </div>
    )
}
export default MyPosts;