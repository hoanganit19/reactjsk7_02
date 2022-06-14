import React from "react";
import * as ReactDOM from 'react-dom/client';

class Home extends React.Component{

    constructor(props){
        super(props);

        this.errors = {};

        this.state = {
            email: '',
            password: '',
            errors: this.errors
        }
    }

    loginHandle = (e) => {
        e.preventDefault();

        this.errors = {}

        let email = this.state.email;

        let password = this.state.password;

        if (email===''){
            this.errors['email'] = 'Vui lòng nhập email';
        }

        if (password===''){
            this.errors['password'] = 'Vui lòng nhập mật khẩu';
        }

        this.setState({
            errors: this.errors
        });
      
    }

    changeValue = (e) => {

        const data = {};

        data[e.target.name] = e.target.value;

        this.setState(data);
    }

    resetState = () => {
        this.setState({
            email: '',
            password: ''
       }); 
    }

    componentDidMount = () => {
        const loginModal = document.querySelector('#login_modal');
        loginModal.addEventListener('hidden.bs.modal', event => {
            //React Dom để xoá
            const msgObj = document.querySelector('.msg-box');

            if (msgObj!==null){
                const msgRoot = ReactDOM.createRoot(msgObj);

                msgRoot.unmount();

                setTimeout(()=>{
                    this.resetState();
                }, 500);
            }
            
           
        });


      
    }

    render(){

    
       return (
            <>
                <div className="container">
                    <h1 className="text-center">Unicode Academy</h1>
                    <p className="text-center">
                        <a href="#login_modal" data-bs-toggle="modal" className="btn btn-primary">Đăng nhập</a>
                    </p>
                </div>
                <div className="modal fade" id="login_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Đăng nhập</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="msg-box">
                            {
                                Object.keys(this.state.errors).length>0 ? 
                                <div className="alert alert-danger text-center">
                                    Vui lòng kiểm tra lại các trường dữ liệu
                                </div>: ''
                            }
                            </div>

                            <form method="get" onSubmit={this.loginHandle}>
                               <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" type="text" className="form-control" placeholder="Email..." value={this.state.email} onChange={this.changeValue}/>
                                    <span className="text-danger">
                                        {
                                            this.state.errors.email
                                        }
                                    </span>
                               </div>

                               <div className="mb-3">
                                    <label htmlFor="email">Mật khẩu</label>
                                    <input name="password" type="password" className="form-control" placeholder="Mật khẩu..." onChange={this.changeValue} value={this.state.password}/>
                                    <span className="text-danger">
                                        {
                                            this.state.errors.password
                                        }
                                    </span>
                               </div>
                               <div className="d-grid">
                               <button type="submit" className="btn btn-success">Đăng nhập</button>
                               </div>
                               
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;