import userPhoto from '../../assets/images/user-photo.png';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

function Users(props) {

    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //чтобы показать абсолютно всех юзеров
    let pagesCount = Math.ceil(props.totalUsersCount >= 10 ? 10 : props.pageSize) //чтобы показать максимум 10 страниц с юзерами
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
             pages.push(i);
    }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span className={props.currentPage === p && s.selectedPage}
                                  onClick={(e) => {
                                      props.onPageChanged(p);
                                  }}><span className={s.selectButton}>{" "}{p}</span></span>
                        )
                    })}
                </div>
                {
                    props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "482461d6-8235-4701-af35-901394fe0915"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unfollow(u.id);
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "482461d6-8235-4701-af35-901394fe0915"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id);
                                        }
                                    });
                            }}>Follow</button>
                        }
                    </div>
                </span>

                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                    </div>)
                }
            </div>
        )
}

export default Users;