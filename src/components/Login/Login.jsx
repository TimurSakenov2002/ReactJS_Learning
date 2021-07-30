import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormControls/FormControls.module.css";

const LoginForm = (props) => {
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} validate={[required]} component={Input} name={"email"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} validate={[required]} component={Input} name={"password"} type={"password"}/>
                </div>
                <div>
                    <Field type="checkbox" component={Input} name={"rememberMe"}/>Remember me
                </div>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
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