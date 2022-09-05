import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import w from "./login.module.css";

class LoginContainer extends React.Component{
    componentDidMount() {
    }
    render() {
        return(
            <Login login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}



const Login = (props) =>{
    if(props.isAuth){
        return <Navigate to={"/profile"}/>

    }    return(
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login}/>
        </div>
    )
}

const LoginForm = (props) => (
    <div>
      <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Неккоректно введен адрес';
            }
            return errors;
          }}
          onSubmit={(values, onSubmitProps) => {
              props.login(values.email, values.password, values.rememberMe, onSubmitProps.setStatus, onSubmitProps.setSubmitting);
              onSubmitProps.setSubmitting(true);
          }}
          validationSchema={loginFormSchema}>
          {(formik) => (
              <Form>
                  <div>
                      <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
                  </div>
                  <ErrorMessage name="email" component="div"/>
                  <div>
                      <Field type={'password'} name={'password'} placeholder={'password'}/>
                  </div>
                  <ErrorMessage name="password" component="div"/>
                  <div>
                      <Field type={'checkbox'} name={'rememberMe'}/>
                      <label htmlFor={'rememberMe'}> remember me </label>
                  </div>
                  <button disabled={formik.isSubmitting} type={'submit'}>Log in</button>
                  {formik.status && <div className={w.error}>{formik.status}</div>}
              </Form>
          )}
      </Formik>
    </div>
);

let mapStateToProps = (state) => ({
    isAuth: state.authUsersPage.isAuth,

})


export default connect(mapStateToProps,{login})(LoginContainer);
