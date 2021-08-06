import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormControls/FormControls.module.css";

const LoginForm = (error, handleSubmit) => {
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} validate={[required]} component={Input} name={"email"}/>
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required]} component={Input} name={"password"} type={"password"}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"}/>Remember me
            </div>
            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return(
           <div>
               <h1>Login</h1>
               <LoginReduxForm onSubmit={onSubmit}/>
           </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);