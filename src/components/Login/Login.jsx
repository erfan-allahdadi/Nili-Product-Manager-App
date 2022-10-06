import React , { useState } from 'react';

// style
import { ButtonBox, Container, InputBox, Left, Right, TitleBox } from "./LoginStyles"

// redux
import { useDispatch , useSelector } from 'react-redux';

// action
import { loginUserAction } from './../../server/Actions/loginAction';

// navigate
import { useNavigate } from 'react-router-dom';

// loader
import { Oval } from 'react-loader-spinner';

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { visitRequestToast } from './../../helper/toastify';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginState = useSelector(state => state?.login?.userData);
    const isLoginLoading = useSelector(state => state?.login?.isLoginLoading);
     

    const [loginFormData , setLoginFormData] = useState({
        username : "",
        password : ""
    })

    const changeHandler = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name] : e.target.value
        })
    }
 
    const submitLogin = () => {
        dispatch(loginUserAction(loginFormData,navigate));
        setLoginFormData({
            username : "",
            password : ""
        })
        // console.log("loginState" ,loginState);
        if(!isLoginLoading) visitRequestToast("شما با موفقیت وارد شدید", "success")
    }

    return (
        <Container> 
            <Right>
                <TitleBox>
                    <h2>لطفا وارد شوید</h2>
                </TitleBox>
                <InputBox>
                    <div>
                        <label htmlFor="">نام کاربری</label>
                        <input onChange={changeHandler} value={loginFormData.username} name="username" type="text" />
                    </div>

                    <div>
                        <label htmlFor="">رمز عبور</label>
                        <input onChange={changeHandler} value={loginFormData.password} name="password" type="text" />
                    </div>
                </InputBox>
                <ButtonBox>
                    <button onClick={submitLogin}>{isLoginLoading ? <Oval height={50} width={50}/> : "ورود"}</button>
                </ButtonBox>
            </Right>

            <Left>
                <img src={require("../../assets/images/login-Pic.jpg")} />
                <h3>به اپلیکیشن مدیریت محصولات نیلی خوش آمدید</h3>
            </Left>
            <ToastContainer/>
        </Container>
    );
};

export default Login;