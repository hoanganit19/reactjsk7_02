import React from "react";

/*
state và setState chỉ tồn tại trong class React => Sử dụng Class Components

*/

class Member extends React.Component{

    constructor(props){
        super(props);

        // this.state = {
        //     name: props.name,
        //     age: props.age
        // }

        this.state = {
            users: [
                {name: 'Hoàng An 1', age: 30},
                {name: 'Hoàng An 2', age: 31},
                {name: 'Hoàng An 3', age: 32}
            ]
        }
    }

    random = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    changeName = () => {

        //setState() là 1 phương thức
        this.setState({
            users: [
                {name: 'Hoàng An 1 - Update', age: 33},
                {name: 'Hoàng An 2 - Update', age: 34},
                {name: 'Hoàng An 3 - Update', age: 35}
            ]
        });
    }

    render(){

       // console.log(this.random(0,2));

        return (
            <div className="member-box">
                <h3>Tên: {this.state.users[this.random(0, this.state.users.length-1)].name}</h3>
                <h3>Tuổi: {this.state.users[this.random(0, this.state.users.length-1)].age}</h3>
                <button type="button" onClick={this.changeName}>Change</button>
            </div>
        );
    }

}


export default Member;