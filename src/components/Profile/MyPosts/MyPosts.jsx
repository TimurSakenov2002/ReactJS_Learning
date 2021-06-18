import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(){
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
            <Post message="Hi babe" likes="5"/>

            <Post message="Ola todos!" likes="2"/>
            
          </div>
          </div>
    )
}
export default MyPosts;