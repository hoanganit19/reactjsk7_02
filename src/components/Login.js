import React from "react";
import LoginControl from "./LoginControl";

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLogin: true
        };
    }

    render(){

        const LoginHandle = () => {
            this.setState({
                isLogin: true
            })
        }

        const LogoutHandle = () => {
            this.setState({
                isLogin: false
            })
        }
        
        //Component button login
        const LoginButton = (props) => {
            return (
                <button type="button" onClick={props.onClick}>Đăng nhập</button>
            );
        }

        //Component button logout
        const LogoutButton = (props) => {
            return (
                <button type="button" onClick={props.onClick}>Đăng xuất</button>
            );
        }

        const isLogin = this.state.isLogin;

        return (
            <div className="login-box">
                {/* <h2>Trạng thái đăng nhập: {isLogin?'Đã đăng nhập':'Chưa đăng nhập'}</h2> */}
                {
                    isLogin?(
                    <>
                        <h2>Bạn đã đăng nhập</h2>
                        <LogoutButton onClick={LogoutHandle}/>
                    </>
                    ):
                    (
                        <>
                        <h2>Bạn chưa đăng nhập</h2>
                        <LoginButton onClick={LoginHandle}/>
                        </>
                        
                    )
                }
            </div>
        );
    }
}

export default Login;