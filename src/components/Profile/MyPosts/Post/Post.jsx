import s from './Post.module.css';

function Post(props) {
    return (

        <div className={s.item}>
            <img src="https://tinypng.com/images/social/website.jpg"></img>
            <span>{props.message}</span>
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>
    )
}

export default Post;