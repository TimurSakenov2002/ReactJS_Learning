import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"*/}
            {/*        className={s.mainImg}></img>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div style={{border: "3px solid black", margin: "10px"}}>
                    <div><span>Name: </span>{props.profile.fullName}</div>
                    <div><span>User info: </span>{props.profile.aboutMe}</div>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <br/>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                     className={s.profileImg}></img>
                Description
            </div>
        </div>
    )
}

export default ProfileInfo;