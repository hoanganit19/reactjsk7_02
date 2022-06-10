import React from "react";
import * as ReactDOM from 'react-dom/client';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 1};
    }

    countFunc = () => {
        this.setState({
            count: this.state.count + 1
        });


    }

    //Khởi tạo vòng đời
    componentDidMount = () => {
        this.counterId = setInterval(()=> this.countFunc(), 1000);

        console.log("componentDidMount");
    }

    //Cập nhật vòng đời
    componentDidUpdate = () => {
        console.log('componentDidUpdate');
        if (this.state.count === 3) {

            //Áp dụng phiên bản React 18
            const counterObj = document.querySelector('.counter');
            
            const counterRoot = ReactDOM.createRoot(counterObj);

            counterRoot.unmount(); 
           
        }
    }

    //Kết thúc vòng đời
    componentWillUnmount = () => {
        console.log("componentWillUnmount");
        clearInterval(this.counterId);
    }

    render(){

        //console.log('count = ' + this.state.count);

        return (
            <h2>{this.state.count}</h2>
        );

    }
}

export default Counter;