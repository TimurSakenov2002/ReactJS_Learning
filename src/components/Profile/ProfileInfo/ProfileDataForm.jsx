import {Input, Textarea} from "../../common/FormControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import s from "../../common/FormControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
                {error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>}
            </div>
            <div>
                <div>
                    <b>Name</b><Field placeholder={"Name"} validate={[]} component={Input} name={"fullName"}/>
                </div>
            </div>

            <div>
                <div>
                    <b>Looking for a job: </b>
                    <Field placeholder={""} validate={[]} component={Input} name={"lookingForAJob"} type={"checkbox"}/>
                </div>
            </div>

            <div>
                <div>
                    <b>My professional skills: </b>
                    <Field placeholder={"My professional skills"} validate={[]} component={ Textarea} name={"lookingForAJobDescription"}/>
                </div>
            </div>


            <div>
                <div>
                    <b>About me: </b>
                    <Field placeholder={"About me"} validate={[]} component={ Textarea} name={"aboutMe"}/>
                </div>
            </div>

            <div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={s.contact}>
                            <b>{key}: <Field placeholder={key} validate={[]} component={Input} name={"contacts." + key}/></b>
                        </div>
                    )
                })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;