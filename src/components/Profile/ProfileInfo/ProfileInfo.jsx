import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user-photo.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(
                () => {
                    setEditMode(false);
                }
            );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div style={{border: "3px solid black", margin: "10px"}}>

                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

                <br/>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                     className={s.profileImg}></img>
                Description
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div>
                <div>
                    <span><b>Name:</b> </span>{profile.fullName}
                </div>
            </div>

            <div>
                <div>
                    <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
                </div>
            </div>
            {profile.lookingForAJob &&
            <div>
                <div>
                    <b>My professional skills: </b>{profile.lookingForAJobDescription}
                </div>
            </div>
            }

            <div>
                <div>
                    <b>About me: </b> {profile.aboutMe}
                </div>
            </div>

            <div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b> : {contactValue}</div>
}

export default ProfileInfo;