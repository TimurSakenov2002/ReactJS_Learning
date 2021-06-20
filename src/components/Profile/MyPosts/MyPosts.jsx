import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props){

    let postsData = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    return (
          <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
              <div>
              <textarea></textarea>
              </div>
              <div>
              <button>Add post</button>
              </div>
            </div>
            
            <div className={s.posts}>
              {postsData}
          </div>
          </div>
    )
}
export default MyPosts;