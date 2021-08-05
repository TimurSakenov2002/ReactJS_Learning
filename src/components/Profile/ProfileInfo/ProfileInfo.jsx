import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user-photo.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto}) {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div style={{border: "3px solid black", margin: "10px"}}>

                    <div><span>Name: </span>{profile.fullName}</div>
                    <div><span>User info: </span>{profile.aboutMe}</div>

                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
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