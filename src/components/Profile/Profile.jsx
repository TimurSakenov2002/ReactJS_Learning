import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile(){
    return (
        <div className={s.content}>
          <div>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" className={s.mainImg}></img>
          </div>
          <div>
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className={s.profileImg}></img>
            Description
          </div>
          <MyPosts />
        </div>

    )
}
export default Profile;