import {reduxForm} from "redux-form";
import {Field} from "redux-form";

const LoginForm = (props) => {
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={"Login"} component={"input"} name={"login"}/>
                </div>
                <div>
                    <Field type="text" placeholder={"Password"} component={"input"} name={"password"}/>
                </div>
                <div>
                    <Field type="checkbox" component={"input"} name={"rememberMe"}/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
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


export default Login;