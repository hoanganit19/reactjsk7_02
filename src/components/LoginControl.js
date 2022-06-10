import React from "react";

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        }
    }

    render(){

        let button;

        //Component Greeting
        const Greeting = (props) => {
            
            if (props.isLogin){
                return <UserGreeting />
            }

            return <GuestGreeting />

        }

        //Component dành cho user đã đăng nhập
        const UserGreeting = (props) => {
            return <h2>Chào mừng quay lại</h2>
        }

        //Component dành cho user chưa đăng nhập
        const GuestGreeting = (props) => {
            return <h2>Vui lòng đăng nhập</h2>
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
        
        //Lấy trạng thái login từ State
        const isLogin = this.state.isLogin;

        //Tạo button login - logout
        button = !isLogin?<LoginButton onClick={LoginHandle}/>:<LogoutButton onClick={LogoutHandle}/>;

        return (
            <>
                <Greeting isLogin={isLogin}/>
                {button}
            </>
        );
    }
}

export default LoginControl;